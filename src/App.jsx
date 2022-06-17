import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls, Sparkles, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField, Bloom, Vignette} from "@react-three/postprocessing"
import { KernelSize, BlendFunction} from "postprocessing"
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
  const { nodes, materials } = useGLTF('/butterfly-orange-v1.glb')
  return(
    <group ref={group} {...props} dispose={null}>
    <mesh geometry={nodes.tree2.geometry} material={materials.leaf} receiveShadow castShadow />
    <mesh geometry={nodes.tree1.geometry} material={materials.leaf} receiveShadow castShadow/>
    <mesh geometry={nodes.body.geometry} material={materials.butterfly} position={[-0.08, -0.1, 0.39]} rotation={[0.56, 0.39, -0.34]} scale={0.27} castShadow>
      <mesh geometry={nodes.rwing001.geometry} material={materials['wing.001']} position={[0.1, -0.08, -0.13]} rotation={[0, 0, 0.33]} castShadow/>
    </mesh>
  </group>
  )
}

export default function App() {
  return (
  <Canvas gl={{alpha: false}} camera={{near: 0.01, far: 100}} shadows>
    <Environment files="/background.hdr" background={"true"}/>
    <Butterfly />

    {/* <color attach="background" args={["#020717"]} /> */}
    <fog attach="fog" color="#020717" near={1} far={20} />
    <ambientLight intensity={0.4} color={"#ffffff"}/>
    <spotLight intensity={2} angle={0.1} position={[20, 30, 30]} penumbra={1} castShadow decay={2} power={15} color={"#D5BC76"} />
    <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.01} />
    <Controls />
    <EffectComposer>
      <DepthOfField target={[0, 0, 1]} focalLength={ 0.2 } bokehScale={3}/>
      <Bloom kernelSize={4} luminanceThreshold={0.25} luminanceSmoothing={7} intensity={1} />
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
