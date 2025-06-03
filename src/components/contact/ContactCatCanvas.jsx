import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Loader';
import Cat from '../../models/Cat';
import { catSize } from '../../constants';

const ContactCatCanvas = ({ currentAnimation, currentSize }) => {
  const canvasRef = useRef();

  const adjustForScreenSize = () => {
    const screenPosition = catSize[currentSize][currentAnimation]['position'];
    const screenRotation = catSize[currentSize][currentAnimation]['rotation'];
    const screenScale = catSize[currentSize][currentAnimation]['scale'];
    return [screenPosition, screenRotation, screenScale];
  };

  const [positionScene, rotationScene, scaleScene] = adjustForScreenSize();

  return (
    <Canvas
      ref={canvasRef}
      camera={{
        fov: 35,
        near: 0.1,
        far: 1000
      }}
      className="flex justify-center items-center"
      resize={{ scroll: true, debounce: 0 }}
      shadows
      linear>
      <Suspense fallback={<Loader />}>
        <directionalLight intensity={2.5} position={[0, 0, 1]} />
        <ambientLight intensity={1} />
        <Cat
          currentAnimation={currentAnimation}
          position={positionScene}
          rotation={rotationScene}
          scale={scaleScene}
        />
      </Suspense>
    </Canvas>
  );
};

export default ContactCatCanvas;
