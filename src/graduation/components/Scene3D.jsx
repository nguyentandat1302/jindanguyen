import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function GraduationCap() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.25;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Cap base (hat body) */}
      <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.7, 0.85, 0.4, 64]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.5}
          roughness={0.35}
          emissive="#1a1208"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Mortarboard (square top) */}
      <mesh castShadow position={[0, 0.1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.8, 0.06, 1.8]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Gold trim on edge */}
      <mesh position={[0, 0.135, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.82, 0.005, 1.82]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} emissive="#d4af37" emissiveIntensity={0.6} />
      </mesh>

      {/* Button on top */}
      <mesh position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.15} emissive="#d4af37" emissiveIntensity={1.2} />
      </mesh>

      {/* Tassel */}
      <Tassel />
    </group>
  );
}

function Tassel() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 1.5) * 0.15;
  });
  return (
    <group ref={ref} position={[0.6, 0.18, 0]}>
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.5, 8]} />
        <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <coneGeometry args={[0.07, 0.18, 12]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} emissive="#d4af37" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function GoldenRing() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.2;
    ref.current.rotation.y = clock.getElapsedTime() * 0.35;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.6, 0.012, 16, 200]} />
      <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={1.5} metalness={1} roughness={0.1} />
    </mesh>
  );
}

function Particles({ count = 800 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#e2c073"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <fog attach="fog" args={['#050507', 5, 12]} />

        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color="#fff7e0" />
        <pointLight position={[-3, -2, -2]} intensity={1.2} color="#d4af37" />
        <pointLight position={[2, -3, 1]} intensity={0.6} color="#c9354b" />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
            <group position={[0, 0.1, 0]} rotation={[0.2, 0.3, 0]}>
              <GraduationCap />
              <GoldenRing />
            </group>
          </Float>

          <Particles count={900} />
          <Sparkles count={60} scale={[8, 5, 8]} size={3} speed={0.3} color="#f0d99c" opacity={0.7} />

          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
