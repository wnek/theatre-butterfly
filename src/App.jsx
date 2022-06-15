import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { EffectComposer, DepthOfField, Bloom, Vignette} from "@react-three/postprocessing"
import {KernelSize, BlendFunction} from "postprocessing"
import { useRef } from "react";
import { proxy, useSnapshot } from 'valtio'

const modes = ['translate', 'rotate', 'scale']
const state = proxy({ current: null, mode: 0 })


function Controls() {
  // Get notified on changes to state
  const snap = useSnapshot(state)
  const scene = useThree((state) => state.scene)
  return (
    <>
      {/* As of drei@7.13 transform-controls can refer to the target by children, or the object prop */}
      {snap.current && <TransformControls object={scene.getObjectByName(snap.current)} mode={modes[snap.mode]} />}
      {/* makeDefault makes the controls known to r3f, now transform-controls can auto-disable them when active */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
    </>
  )
}

function Butterfly({...props}){
  const group = useRef()
  const { nodes, materials } = useGLTF('/butterfly-cleaned.glb')
  return(
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.tree.geometry} material={materials.leaf}  receiveShadow />
      <mesh geometry={nodes.rwing.geometry} material={materials.wing} castShadow />
      <mesh geometry={nodes.body.geometry} material={materials.wing} castShadow  />
      <mesh geometry={nodes.tree_tree003.geometry} material={materials['bark.001']} receiveShadow/>
      <mesh geometry={nodes.tree_tree003_1.geometry} material={materials.leaf} receiveShadow/>
      <mesh geometry={nodes.light.geometry} material={materials.Material} receiveShadow/>
    </group>
  )
}
export default function App() {
  return (
  <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 100}} shadows>
    <color attach="background" args={["#000000"]} />
    <fog attach="fog" color="black" near={1} far={15} />
    <ambientLight intensity={10} color={"#002238"}/>
    <spotLight position={[-4, 60, 20]} intensity={1.1} color={"#D5BC76"} penumbra={1} castShadow/>
    <Butterfly />
    <Controls />
    <EffectComposer>
      <DepthOfField target={[0, 0, 0.9]} focalLength={ 0.01 } bokehScale={1.4}/>
      <Bloom kernelSize={5} luminanceThreshold={0.45} luminanceSmoothing={1} intensity={1} />
      <Bloom kernelSize={1} luminanceThreshold={0.4} luminanceSmoothing={1} intensity={2} />
      <Vignette
        offset={0.5}
        darkness={0.6}
        // Eskil's vignette technique works from the outside inwards rather
        // than the inside outwards, so if this is 'true' set the offset
        // to a value greater than 1.
        // See frag for details - https://github.com/vanruesc/postprocessing/blob/main/src/effects/glsl/vignette/shader.frag
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
      />
   
    </EffectComposer>
  </Canvas>
  )
}
