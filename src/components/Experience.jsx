import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Mike } from "./Mike";
import { Leela } from "./Leela";
import { Soldier } from "./Soldier";
export const Experience = () => {

  // const map = useTexture('textures/realistic_robotic_and_ciber_world.jpg')

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <MonsterStage texture={'textures/realistic_create_a_word_for_the_war_this_is_in_th.jpg'}>
        {/* <Mike scale={0.27} position-y={-.9} />  */}
        <Soldier scale={0.7} position-y={-.9} />

      </MonsterStage>
      <MonsterStage texture={'textures/realistic_robotic_and_ciber_world.jpg'} position-x={-2.5} rotation-y={Math.PI / 8}>
        {/* <Mike scale={0.27} position-y={-.9} />  */}
        <Leela scale={0.27} position-y={-.9} />

      </MonsterStage>
      <MonsterStage texture={'textures/realistic_create_a_futuristic_robotic_word.jpg'}  position-x={2.5} rotation-y={-Math.PI / 8}>
        <Mike scale={0.27} position-y={-.9} /> 
        {/* <Leela scale={0.27} position-y={-.9} /> */}

      </MonsterStage>
    </>
  );
};

const MonsterStage = ({children,texture, ...props}) => {
  const map = useTexture(texture)
  return(
    <group {...props}>
            <RoundedBox args={[2,3,0.1]}>
        <planeGeometry args={[2,3]} /> 
        <MeshPortalMaterial side={THREE.DoubleSide} >
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