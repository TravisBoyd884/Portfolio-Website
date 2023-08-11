"use client";
import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function projects() {
  const count = 100;
  const sep = 5;

  let Positions = useMemo(() => {
    let positions = [];

    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() * sep - 0.5,
        Math.random() * sep - 0.5,
        Math.random() * sep - 0.5
      );
    }

    return new Float32Array(positions);
  }, [count]);

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <mesh>
          <points>
            <bufferGeometry>
              <sphereGeometry />
              <bufferAttribute
                attach="attributes-position"
                array={Positions}
                count={Positions.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial color={0xffffff} size={0.05} />
          </points>
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
