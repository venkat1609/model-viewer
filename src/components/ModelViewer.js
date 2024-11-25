import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

const Model = ({ modelPath, scale = 1 }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} />;
};

const ModelViewer = ({ modelPath, scale = 1, fallbackMessage = 'Loading...' }) => {
  return (
    <Canvas>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <directionalLight position={[-10, -10, -10]} />

      {/* Suspense for loading 3D model */}
      <Suspense
        fallback={
          <Html center>
            <div style={{ color: 'white' }}>{fallbackMessage}</div>
          </Html>
        }
      >
        <Model modelPath={modelPath} scale={scale} />
      </Suspense>

      {/* Orbit controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
