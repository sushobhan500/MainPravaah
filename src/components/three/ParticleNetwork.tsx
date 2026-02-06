import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;
  const connectionDistance = 2.5;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += particles.velocities[i * 3];
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1];
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];

      // Add subtle wave motion
      positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.002;

      // Boundary check
      if (Math.abs(positions[i * 3]) > 7.5) particles.velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 5) particles.velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 4) particles.velocities[i * 3 + 2] *= -1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update connections
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < connectionDistance) {
          const alpha = 1 - distance / connectionDistance;
          
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );

          // Cyan to purple gradient based on position
          const t = (positions[i * 3 + 1] + 5) / 10;
          lineColors.push(
            0.2 + t * 0.4, 0.8, 1 - t * 0.5, alpha,
            0.2 + t * 0.4, 0.8, 1 - t * 0.5, alpha
          );
        }
      }
    }

    if (linesRef.current.geometry) {
      linesRef.current.geometry.dispose();
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesRef.current.geometry = lineGeometry;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles.positions}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00d4ff"
          size={0.08}
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export default ParticleNetwork;
