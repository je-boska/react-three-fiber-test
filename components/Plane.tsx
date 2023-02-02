import { ThreeElements } from '@react-three/fiber';
import { DoubleSide } from 'three';

export default function Plane(props: ThreeElements['mesh']) {
  return (
    <mesh {...props}>
      <planeGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={'gray'} side={DoubleSide} />
    </mesh>
  );
}
