import { getProject } from '@theatre/core';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  Sparkles,
  Environment,
} from '@react-three/drei';
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
} from '@react-three/postprocessing';
import { KernelSize, BlendFunction } from 'postprocessing';
import { useRef, useMemo } from 'react';
import { proxy, useSnapshot } from 'valtio';
import InstancedModel from '/src/Components/3dmodel';
import { SheetProvider } from '@theatre/r3f';

const modes = ['translate', 'rotate', 'scale'];
const state = proxy({ current: null, mode: 0 });

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
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </>
  );
}

export default function App() {
  return (
    <Canvas
      gl={{ alpha: false, preserveDrawingBuffer: true }}
      camera={{ near: 0.01, far: 1000 }}
      shadows
    >
      <SheetProvider sheet={getProject('Butterfly').sheet('Scene')}>
        <Environment files="/background.hdr" background={'true'} />

        <fog attach="fog" color="#020717" near={1} far={20} />
        <ambientLight intensity={0.4} color={'#ffffff'} />
        <spotLight
          uniqueName="butterfly"
          intensity={2}
          angle={0.1}
          position={[20, 30, 30]}
          penumbra={1}
          castShadow
          decay={2}
          power={15}
          color={'#D5BC76'}
        />
        <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.01} />
        <InstancedModel />
        <Controls />
        <EffectComposer>
          <DepthOfField target={[0, 0, 1]} focalLength={0.2} bokehScale={3} />
          <Bloom
            kernelSize={4}
            luminanceThreshold={0.25}
            luminanceSmoothing={7}
            intensity={1}
          />
          <Vignette eskil={false} blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>
      </SheetProvider>
    </Canvas>
  );
}

useGLTF.preload('/butterfly-orange-instances-transformed.glb');
