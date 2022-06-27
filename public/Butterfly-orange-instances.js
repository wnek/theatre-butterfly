/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/butterfly-orange-instances-transformed.glb')
  const instances = useMemo(
    () => ({
      Leaf: nodes.leaf,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <Model instances={instances} />}
    </Merged>
  )
}

function Model({ instances, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/butterfly-orange-instances-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.body.geometry} material={materials.butterfly}>
        <mesh castShadow receiveShadow geometry={nodes.LLwing.geometry} material={materials.butterfly} position={[-0.39, 0.18, 0.36]} />
        <mesh castShadow receiveShadow geometry={nodes.LUwing.geometry} material={materials.butterfly} position={[-0.44, 0.28, 0.24]} />
        <mesh castShadow receiveShadow geometry={nodes.RLwing.geometry} material={materials.butterfly} position={[-0.27, 0.16, 0.29]} />
        <mesh castShadow receiveShadow geometry={nodes.RUwing.geometry} material={materials.butterfly} position={[-0.33, 0.26, 0.18]} />
      </mesh>
      <instances.Leaf position={[-0.29, 0.29, -0.17]} />
      <instances.Leaf position={[-2.38, -1.02, 0.49]} rotation={[0.07, -0.48, 0.48]} scale={0.74} />
      <instances.Leaf position={[-4.19, 2.25, -3.52]} rotation={[-1.08, -0.54, -1.1]} scale={0.56} />
      <instances.Leaf position={[-2.25, 3.27, -3.61]} rotation={[-0.29, 0.08, 0.52]} scale={0.29} />
      <instances.Leaf position={[-4.67, 3.58, -5]} rotation={[-2.38, -0.88, -2.11]} scale={0.38} />
      <instances.Leaf position={[-3.65, 4.2, -5.43]} rotation={[-2.29, 0.04, -2.73]} scale={0.29} />
      <instances.Leaf position={[-0.88, 4.19, -3.68]} rotation={[-1.01, 0.38, -0.01]} scale={0.51} />
      <instances.Leaf position={[-6.78, 1.28, -5.08]} rotation={[0, -1.26, 0]} />
      <instances.Leaf position={[-7.87, 0.17, -8.71]} rotation={[Math.PI, -0.83, Math.PI]} scale={0.74} />
      <instances.Leaf position={[-5.81, 2.58, -8.47]} rotation={[-2.8, -0.45, -2.27]} scale={0.56} />
      <instances.Leaf position={[-4.19, 4.3, -7.67]} rotation={[0.61, -0.93, 0.96]} scale={0.29} />
      <instances.Leaf position={[-4.77, 2.41, -10.95]} rotation={[3.08, -0.6, -2.24]} scale={0.38} />
      <instances.Leaf position={[-2.51, 3.5, -11.01]} rotation={[3.04, 1.08, -2.11]} scale={0.29} />
      <instances.Leaf position={[-3.21, 6.4, -7.83]} rotation={[2.94, -0.06, 2.92]} scale={0.72} />
      <instances.Leaf position={[-1.66, 1.87, -8.65]} rotation={[-2.38, -0.34, -2.84]} scale={0.82} />
      <instances.Leaf position={[0.84, -2.2, -6.44]} rotation={[-2.64, -0.66, -2.94]} scale={0.75} />
      <instances.Leaf position={[-2.55, -2.78, -6.38]} rotation={[-2.11, 0.61, -3.14]} scale={0.75} />
      <instances.Leaf position={[-0.44, 1.05, -4.86]} rotation={[-1.02, -0.6, -0.66]} scale={0.48} />
      <instances.Leaf position={[-6.43, -1.24, -4.07]} rotation={[-1.94, -0.24, -2.69]} scale={0.75} />
      <instances.Leaf position={[-0.47, -1.03, -7.19]} rotation={[-2.71, -1.05, 3.14]} scale={0.3} />
      <instances.Leaf position={[-4.09, 0.1, -7.21]} rotation={[-2.7, -0.06, -2.72]} scale={0.24} />
      <instances.Leaf position={[-4.47, 1.79, -10.33]} rotation={[-2.7, -0.32, -2.74]} scale={0.15} />
      <instances.Leaf position={[-5.19, -0.32, -7.97]} rotation={[-2.59, 0.03, -2.52]} scale={0.29} />
      <instances.Leaf position={[-3.73, 0.16, -9.23]} rotation={[-2.46, -0.41, -2.56]} scale={0.5} />
      <instances.Leaf position={[-12.08, 4.14, -8.52]} rotation={[-1.89, -0.3, -2.86]} scale={1.02} />
      <instances.Leaf position={[-9.07, 3.81, -9.66]} rotation={[-2.7, -0.53, -3.09]} scale={0.47} />
      <instances.Leaf position={[-7.09, 2.92, -12.61]} rotation={[-3.14, 0.25, -2.47]} scale={0.67} />
      <instances.Leaf position={[-3.32, 2.45, -3.94]} rotation={[0.04, -0.6, 0.84]} scale={0.35} />
      <instances.Leaf position={[-1.73, 1.73, -4.98]} rotation={[0, 0.16, 0.81]} scale={0.55} />
      <instances.Leaf position={[-0.99, -0.89, -4.93]} rotation={[-0.89, 0.49, -0.27]} scale={0.48} />
      <instances.Leaf position={[-3.52, 0.43, -2.4]} rotation={[-0.67, -0.82, -0.47]} scale={0.85} />
      <instances.Leaf position={[2.84, -4.29, -0.83]} rotation={[0.06, 0.58, -0.5]} scale={1.37} />
      <instances.Leaf position={[-3.74, -0.54, -3.38]} rotation={[-2.26, 1.01, 2.54]} scale={0.77} />
      <instances.Leaf position={[-4.48, 1.21, -3.64]} rotation={[-1.2, -0.95, -1.51]} scale={0.34} />
      <instances.Leaf position={[-3.73, 3.36, -4.13]} rotation={[-1.16, -1.05, -1.29]} scale={0.21} />
      <instances.Leaf position={[-5.39, -2.52, -0.68]} rotation={[0.92, -1.37, 0.54]} scale={0.43} />
      <instances.Leaf position={[-4.67, 7.34, -10.5]} rotation={[-1.98, 0.01, -2.87]} scale={0.72} />
      <instances.Leaf position={[-2.97, 5.04, -8.22]} rotation={[-3.1, -0.62, 2.9]} scale={0.31} />
      <instances.Leaf position={[-4.23, 4.19, -9.93]} rotation={[0.09, 0.62, 2.44]} scale={0.5} />
      <instances.Leaf position={[-4.44, 3.29, -9.27]} rotation={[3.08, 0.71, 0.93]} scale={0.99} />
      <instances.Leaf position={[-0.46, -4.09, -5.5]} rotation={[-0.8, 0.47, 1.78]} scale={0.75} />
      <instances.Leaf position={[-4.54, -0.01, -5.22]} rotation={[-0.8, 0.47, 1.78]} scale={0.24} />
      <instances.Leaf position={[-1.33, 0.18, -5.83]} rotation={[1.43, 0.95, 0.07]} scale={0.24} />
      <instances.Leaf position={[-3.2, -0.38, -7.12]} rotation={[1.43, 0.95, 0.07]} scale={0.57} />
      <instances.Leaf position={[-1.59, -1.84, -9.95]} rotation={[-0.56, -0.3, -1.33]} scale={1.12} />
      <instances.Leaf position={[-11.83, -1.91, -4.68]} rotation={[0.09, -0.87, -1.7]} scale={1.12} />
      <instances.Leaf position={[-8.93, -2.99, -2.94]} rotation={[0.6, -0.83, -0.24]} scale={0.69} />
      <instances.Leaf position={[-6.33, -5.98, -2.42]} rotation={[0.9, -0.4, -0.19]} scale={0.69} />
      <instances.Leaf position={[-0.94, -5.07, -7.62]} rotation={[0.9, -0.4, -0.19]} scale={0.69} />
      <instances.Leaf position={[-3.41, 3.88, -6.63]} rotation={[-2.05, -0.2, -2.58]} scale={0.47} />
      <instances.Leaf position={[-0.53, 2.78, -5.64]} rotation={[-1.41, -1.3, -3.07]} scale={0.73} />
      <instances.Leaf position={[-4.29, -3.16, -1.18]} rotation={[3.1, -0.01, -0.05]} scale={0.79} />
      <instances.Leaf position={[-0.43, -5.85, 2.14]} rotation={[0.03, -0.36, -0.92]} scale={1.02} />
      <instances.Leaf position={[-1.99, -4.56, 0.78]} rotation={[0.1, 0.11, -0.13]} scale={0.86} />
      <instances.Leaf position={[-11.05, 1.52, -7.58]} rotation={[0.38, 0.01, -0.11]} scale={1.13} />
      <instances.Leaf position={[-3.64, 3.1, -12.18]} rotation={[-0.33, -0.12, -0.53]} scale={1.25} />
      <instances.Leaf position={[-0.13, -1.19, -4.35]} rotation={[1.02, -0.84, -1.9]} scale={0.74} />
    </group>
  )
}

useGLTF.preload('/butterfly-orange-instances-transformed.glb')
