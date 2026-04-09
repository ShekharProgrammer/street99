import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function Burger3D({ scrollYProgress }: { scrollYProgress: any }) {
  const groupRef = useRef<THREE.Group>(null);
  const { invalidate } = useThree();

  // Individual part refs for assembly
  const bunTopRef = useRef<THREE.Mesh>(null);
  const lettuceRef = useRef<THREE.Mesh>(null);
  const cheeseRef = useRef<THREE.Mesh>(null);
  const pattyRef = useRef<THREE.Mesh>(null);
  const bunBottomRef = useRef<THREE.Mesh>(null);

  // Subscribe to scroll changes to trigger re-renders
  useEffect(() => {
    return scrollYProgress.on("change", () => {
      invalidate();
    });
  }, [scrollYProgress, invalidate]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const progress = scrollYProgress.get();

    // Overall rotation and scale based on scroll
    const scale = THREE.MathUtils.lerp(1, 8, progress);
    const rotationZ = progress * Math.PI;
    const rotationX = progress * Math.PI * 0.25;
    
    groupRef.current.scale.setScalar(scale);
    groupRef.current.rotation.z = rotationZ;
    groupRef.current.rotation.x = rotationX;
    
    // We'll remove the constant slow spin to allow frameloop="demand" to be effective
    // groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2; 

    // Assembly logic
    const assemblyProgress = Math.min(progress / 0.8, 1);
    
    if (bunTopRef.current) bunTopRef.current.position.y = THREE.MathUtils.lerp(5, 0.6, assemblyProgress);
    if (lettuceRef.current) lettuceRef.current.position.y = THREE.MathUtils.lerp(4, 0.35, assemblyProgress);
    if (cheeseRef.current) cheeseRef.current.position.y = THREE.MathUtils.lerp(3, 0.25, assemblyProgress);
    if (pattyRef.current) pattyRef.current.position.y = THREE.MathUtils.lerp(2, 0.1, assemblyProgress);
    if (bunBottomRef.current) bunBottomRef.current.position.y = 0;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

      <group ref={groupRef}>
        {/* Bun Top */}
        <mesh ref={bunTopRef} castShadow>
          <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#d4a373" roughness={0.4} />
          {/* Sesame Seeds */}
          {[...Array(20)].map((_, i) => (
            <mesh key={i} position={[
              Math.sin(i * 1.5) * 0.7,
              Math.cos(i * 1.5) * 0.2 + 0.8,
              Math.cos(i * 1.5) * 0.7
            ]} rotation={[Math.random(), Math.random(), Math.random()]}>
              <boxGeometry args={[0.05, 0.02, 0.1]} />
              <meshStandardMaterial color="#fefae0" />
            </mesh>
          ))}
        </mesh>

        {/* Lettuce */}
        <mesh ref={lettuceRef} castShadow rotation={[0.1, 0, 0]}>
          <torusGeometry args={[0.9, 0.05, 16, 100]} />
          <meshStandardMaterial color="#386641" roughness={0.8} />
        </mesh>

        {/* Cheese */}
        <mesh ref={cheeseRef} castShadow rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.6, 0.05, 1.6]} />
          <meshStandardMaterial color="#ffb703" roughness={0.2} />
        </mesh>

        {/* Patty */}
        <mesh ref={pattyRef} castShadow>
          <cylinderGeometry args={[0.95, 0.95, 0.3, 32]} />
          <meshStandardMaterial color="#432818" roughness={0.9} />
        </mesh>

        {/* Bun Bottom */}
        <mesh ref={bunBottomRef} castShadow position={[0, -0.3, 0]}>
          <cylinderGeometry args={[1, 1, 0.4, 32]} />
          <meshStandardMaterial color="#d4a373" roughness={0.4} />
        </mesh>
      </group>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
    </>
  );
}
