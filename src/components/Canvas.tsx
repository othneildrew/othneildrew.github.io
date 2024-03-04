import { Canvas as ThreeCanvas } from '@react-three/fiber'

export const Canvas = () => {
  const a = '';

  return (
    <ThreeCanvas>
      <ambientLight intensity={Math.PI / 2} />

    </ThreeCanvas>
  );
}