import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Mike } from "./Mike";
import { Leela } from "./Leela";
import { Soldier } from "./Soldier";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
export const Experience = () => {
  const [active, setActive] = useState(null)

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <MonsterStage texture={'textures/realistic_create_a_word_for_the_war_this_is_in_th.jpg'} name="Soldier" color="#F2E638" active={active} setActive={setActive}>
        {/* <Mike scale={0.27} position-y={-.9} />  */}
        <Soldier scale={0.7} position-y={-.9} />

      </MonsterStage>
      <MonsterStage texture={'textures/realistic_robotic_and_ciber_world.jpg'} position-x={-2.5} rotation-y={Math.PI / 8} name="Leela" color="#594302" active={active} setActive={setActive}>
        {/* <Mike scale={0.27} position-y={-.9} />  */}
        <Leela scale={0.27} position-y={-.9} />

      </MonsterStage>
      <MonsterStage texture={'textures/realistic_create_a_futuristic_robotic_word.jpg'}  position-x={2.5} rotation-y={-Math.PI / 8} name="Mike" color="#1C3059" active={active} setActive={setActive}>
        <Mike scale={0.27} position-y={-.9} /> 
        {/* <Leela scale={0.27} position-y={-.9} /> */}

      </MonsterStage>
    </>
  );
};

const MonsterStage = ({children,texture,name, color, active, setActive, ...props}) => {
  const map = useTexture(texture)
  const portalMaterial = useRef()

  return(
    <group {...props}>
      <Text font="font/BlackFuture.otf" fontSize={0.3} position={[0, -1.3, 0.052]} anchorY={"bottom"}>
        {name}
        <meshBasicMaterial color={color} toneMapped={false} /> 
      </Text>
      <RoundedBox args={[2,3,0.1]} onDoubleClick={() => setActive( active === name ? null : name)}>
        <planeGeometry args={[2,3]} /> 
        <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial} >
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
            {children}
            <mesh>
                <sphereGeometry args={[5, 32, 32]} />
                <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}

{/* <Mike scale={0.27} position-y={-.9} /> */}