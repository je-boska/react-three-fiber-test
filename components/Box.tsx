import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
