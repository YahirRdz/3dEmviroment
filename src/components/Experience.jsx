import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Mike } from "./Mike";
export const Experience = () => {

  const map = useTexture('textures/realistic_robotic_and_ciber_world.jpg')

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <Mike scale={0.5} position-y={-1} />
      <mesh>
          <sphereGeometry args={[5, 32, 32]} />
          <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};
