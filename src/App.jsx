import { getProject } from '@theatre/core';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  FlyControls,
  FirstPersonControls,
  Sparkles,
  Environment,
  PerspectiveCamera,
} from '@react-three/drei';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
  Noise,
} from '@react-three/postprocessing';
import { KernelSize, BlendFunction } from 'postprocessing';
import { proxy, useSnapshot } from 'valtio';
import { editable as e, SheetProvider } from '@theatre/r3f';
import InstancedModel from '/src/Components/3dmodel';
import stateTheatre from '/src/state.json';
import { useLayoutEffect } from 'react';

const modes = ['translate', 'rotate', 'scale'];
const state = proxy({ current: null, mode: 0 });

console.log(stateTheatre);

function Controls() {
  const snap = useSnapshot(state);
  const scene = useThree((state) => state.scene);
  return (
    <>
      {snap.current && (
        <TransformControls
          object={scene.getObjectByName(snap.current)}
          mode={modes[snap.mode]}
        />
      )}

      <OrbitControls
        dragToLook={true}
        enablePan={true}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export default function App() {
  const sheet = getProject('Butterfly', { state: stateTheatre }).sheet('Scene');

  useLayoutEffect(() => {
    // Play it on load
    sheet.sequence.play({ iterationCount: 1000 });
  });

  return (
    <Canvas
      gl={{ alpha: false, preserveDrawingBuffer: true }}
      camera={{ near: 0.01, far: 1000 }}
      shadows
    >
      <SheetProvider sheet={sheet}>
        <Environment files="/background3.hdr" background={'true'} />
        <fog attach="fog" color="#020717" near={1} far={40} />
        <ambientLight intensity={0.4} color={'#85C8DD'} />
        <spotLight
          intensity={6}
          angle={0.1}
          position={[20, 30, 30]}
          penumbra={1}
          castShadow
          decay={2}
          power={15}
          color={'#E3C87E'}
        />
        {/* <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.01} /> */}
        <InstancedModel />
        <Controls />
        <EffectComposer>
          {/* <DepthOfField target={[0, 0, 1]} focalLength={0.007} bokehScale={4} />
          <Bloom
            kernelSize={6}
            luminanceThreshold={0}
            luminanceSmoothing={10}
            height={100}
            intensity={100}
            opacity={0.01}
          /> */}
          <Noise opacity={0.05} />
          {/* <Vignette eskil={false} blendFunction={BlendFunction.NORMAL} /> */}
        </EffectComposer>
      </SheetProvider>
    </Canvas>
  );
}
