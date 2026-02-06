import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import ParticleNetwork from './ParticleNetwork';

const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <mesh position={position} scale={scale * 1.5}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <ParticleNetwork />
          
          <FloatingOrb position={[-4, 2, -2]} color="#00d4ff" scale={0.8} />
          <FloatingOrb position={[4, -1, -3]} color="#8b5cf6" scale={1.2} />
          <FloatingOrb position={[2, 3, -4]} color="#00d4ff" scale={0.6} />
          <FloatingOrb position={[-3, -2, -2]} color="#8b5cf6" scale={0.9} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
