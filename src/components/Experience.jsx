import {
  CameraControls,
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useCursor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";
import { Mike } from "./Mike";
import { Leela } from "./Leela";
import { Soldier } from "./Soldier";
import { useEffect, useRef, useState } from "react";
import { act, useFrame, useThree } from "@react-three/fiber";
export const Experience = () => {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  useCursor(hovered ? "pointer" : "auto");
  const portalMaterial = useRef();
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
      <MonsterStage
        texture={
          "textures/realistic_create_a_word_for_the_war_this_is_in_th.jpg"
        }
        name="Soldier"
        color="#F2E638"
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Soldier
          scale={0.7}
          position-y={-0.9}
          hovered={hovered === "Soldier"}
        />
      </MonsterStage>
      <MonsterStage
        texture={"textures/realistic_robotic_and_ciber_world.jpg"}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        name="Leela"
        color="#594302"
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Leela scale={0.27} position-y={-0.9} hovered={hovered === "Leela"} />
      </MonsterStage>
      <MonsterStage
        texture={"textures/realistic_create_a_futuristic_robotic_word.jpg"}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
        name="Mike"
        color="#1C3059"
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
      >
        <Mike scale={0.27} position-y={-0.9} hovered={hovered === "Mike"} />
      </MonsterStage>
    </>
  );
};

const MonsterStage = ({
  children,
  texture,
  name,
  color,
  active,
  setActive,
  hovered,
  setHovered,
  ...props
}) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;
    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <Text
        font="font/BlackFuture.otf"
        fontSize={0.3}
        position={[0, -1.3, 0.052]}
        anchorY={"bottom"}
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>
      <RoundedBox
        args={[2, 3, 0.1]}
        onDoubleClick={() => setActive(active === name ? null : name)}
        name={name}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}
      >
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial side={THREE.DoubleSide} ref={portalMaterial}>
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
  );
};

{
  /* <Mike scale={0.27} position-y={-.9} /> */
}
