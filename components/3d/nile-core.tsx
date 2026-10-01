"use client";

import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const RIVER = "#43D9BE";
const BLUE = "#6FA0FF";
const CORE = "#F4FFFC";

function FlowRibbon({ offset = 0, color = RIVER }: { offset?: number; color?: string }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-2.7, -0.9 + offset, 0.25),
          new THREE.Vector3(-1.6, -0.15 + offset, -0.35),
          new THREE.Vector3(-0.7, 0.55 + offset, 0.15),
          new THREE.Vector3(0.15, -0.2 + offset, 0.75),
          new THREE.Vector3(1.1, 0.65 + offset, -0.15),
          new THREE.Vector3(2.35, 0.05 + offset, 0.35),
        ],
        false,
        "catmullrom",
        0.55,
      ),
    [offset],
  );

  return (
    <mesh>
      <tubeGeometry args={[curve, 120, 0.035, 10, false]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.45}
        roughness={0.28}
        metalness={0.32}
      />
    </mesh>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return;

    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.13,
      0.04,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.12,
      0.04,
    );
  });

  return (
    <group ref={group}>
      <Float
        speed={reduceMotion ? 0 : 1.15}
        rotationIntensity={reduceMotion ? 0 : 0.18}
        floatIntensity={reduceMotion ? 0 : 0.42}
      >
        <mesh>
          <icosahedronGeometry args={[0.66, 4]} />
          <meshPhysicalMaterial
            color={CORE}
            emissive={RIVER}
            emissiveIntensity={0.28}
            roughness={0.12}
            metalness={0.7}
            transmission={0.18}
            thickness={0.45}
          />
        </mesh>
      </Float>

      <mesh rotation={[0.15, 0.2, 0.1]}>
        <torusGeometry args={[0.93, 0.018, 14, 96]} />
        <meshStandardMaterial
          color={RIVER}
          emissive={RIVER}
          emissiveIntensity={1.2}
          transparent
          opacity={0.68}
        />
      </mesh>

      <mesh rotation={[1.35, -0.3, 0.3]}>
        <torusGeometry args={[1.12, 0.012, 12, 96]} />
        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={1}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh rotation={[0.4, 1.1, -0.65]}>
        <torusGeometry args={[1.35, 0.009, 12, 96]} />
        <meshStandardMaterial
          color="#A8E7DE"
          emissive={RIVER}
          emissiveIntensity={0.8}
          transparent
          opacity={0.36}
        />
      </mesh>
    </group>
  );
}

function Node({ position, active = false }: { position: [number, number, number]; active?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <Float
      speed={reduceMotion ? 0 : active ? 1.5 : 1}
      floatIntensity={reduceMotion ? 0 : active ? 0.35 : 0.22}
    >
      <mesh position={position}>
        <sphereGeometry args={[active ? 0.075 : 0.055, 20, 20]} />
        <meshStandardMaterial
          color={active ? RIVER : BLUE}
          emissive={active ? RIVER : BLUE}
          emissiveIntensity={active ? 1.7 : 0.95}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} color="#DDFBF5" />
      <pointLight position={[-3, 0, 2]} intensity={18} distance={9} color={RIVER} />
      <pointLight position={[3, 0, -2]} intensity={15} distance={8} color={BLUE} />

      <group scale={1.02}>
        <FlowRibbon />
        <FlowRibbon offset={0.16} color="#2CBFA8" />
        <FlowRibbon offset={-0.17} color={BLUE} />

        <Node position={[-1.95, 0.4, 0]} />
        <Node position={[-1.1, -0.65, 0.25]} active />
        <Node position={[1.55, 0.42, 0.1]} />
        <Node position={[2.0, -0.4, 0]} active />
        <Node position={[0.2, 1.0, -0.5]} />

        <Core />
      </group>

      <Sparkles
        count={reduceMotion ? 0 : 70}
        scale={[6.4, 4.5, 3.2]}
        size={1.25}
        speed={reduceMotion ? 0 : 0.18}
        color="#95D6CF"
        noise={0.9}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={1.1}
        maxPolarAngle={2.05}
        autoRotate={!reduceMotion}
        autoRotateSpeed={0.28}
      />
    </>
  );
}

export function NileCore({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full min-h-[360px] w-full overflow-hidden ${className}`}
      aria-label="Interactive 3D Nile intelligence core"
    >
      <Canvas
        camera={{ position: [0, 0.15, 6.15], fov: 36 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(66,217,190,0.12),transparent_34%),linear-gradient(180deg,transparent_0%,rgba(2,9,16,0.02)_70%,rgba(2,9,16,0.16)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="core-label">NILE CORE</span>
      </div>
    </div>
  );
}
