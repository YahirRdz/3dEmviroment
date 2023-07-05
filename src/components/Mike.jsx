/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/models/Mike.gltf -o src/components/Mike.jsx -r public
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Mike(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Mike.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(actions);

  useEffect(() => {
    actions["Hello"].reset().fadeIn(0.5).play();
    return () => actions["Hello"].fadeOut(0.5);
  },[])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RobotArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.FootL} />
          <primitive object={nodes.FootR} />
          <group name="Mike">
            <skinnedMesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.Main} skeleton={nodes.Cube010.skeleton} />
            <skinnedMesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials.Accent} skeleton={nodes.Cube010_1.skeleton} />
            <skinnedMesh name="Cube010_2" geometry={nodes.Cube010_2.geometry} material={materials.Black} skeleton={nodes.Cube010_2.skeleton} />
            <skinnedMesh name="Cube010_3" geometry={nodes.Cube010_3.geometry} material={materials.Eye} skeleton={nodes.Cube010_3.skeleton} />
            <skinnedMesh name="Cube010_4" geometry={nodes.Cube010_4.geometry} material={materials.Grey} skeleton={nodes.Cube010_4.skeleton} />
            <skinnedMesh name="Cube010_5" geometry={nodes.Cube010_5.geometry} material={materials.LightGrey} skeleton={nodes.Cube010_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Mike.gltf')
