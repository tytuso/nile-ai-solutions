"use client";

import { Float, Line, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const points: [number, number, number][] = [
  [-1.8, 0.85, 0],
  [-1.7, -0.75, 0.05],
  [-0.15, 0, 0.35],
  [1.55, 0.7, -0.05],
  [1.75, -0.7, 0.05],
];

const links: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
];

function SystemScene() {
  const root = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!root.current) return;
    root.current.rotation.y += delta * 0.08;
    root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, state.pointer.y * 0.06, 0.03);
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <pointLight position={[-2, 2, 3]} intensity={12} color="#43D9BE" />
      <pointLight position={[3, -1, 1]} intensity={9} color="#6FA0FF" />

      <group ref={root}>
        {links.map(([a, b]) => (
          <Line
            key={`${a}-${b}`}
            points={[points[a], points[b]]}
            color="#5B8BFF"
            transparent
            opacity={0.32}
            lineWidth={0.65}
          />
        ))}

        {points.map((position, index) => (
          <Float
            key={position.join("-")}
            speed={index === 2 ? 1.4 : 1}
            floatIntensity={index === 2 ? 0.5 : 0.28}
          >
            <mesh position={position}>
              <sphereGeometry args={[index === 2 ? 0.2 : 0.09, 20, 20]} />
              <meshStandardMaterial
                color={index === 2 ? "#EFFFFB" : index % 2 ? "#43D9BE" : "#6FA0FF"}
                emissive={index === 2 ? "#43D9BE" : index % 2 ? "#43D9BE" : "#6FA0FF"}
                emissiveIntensity={index === 2 ? 0.9 : 1.4}
                metalness={0.3}
                roughness={0.2}
              />
            </mesh>
          </Float>
        ))}
      </group>

      <Sparkles count={36} scale={[4.8, 2.8, 2]} size={1.1} speed={0.16} color="#8DB9FF" />
    </>
  );
}

export function SystemMap({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[310px] w-full overflow-hidden ${className}`}>
      <Canvas camera={{ position: [0, 0, 5.2], fov: 34 }} dpr={[1, 1.45]} gl={{ antialias: true, alpha: true }}>
        <SystemScene />
      </Canvas>
    </div>
  );
}
