"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export default function MovingPlane() {
  const mesh = useRef(null);

  const fragmentShader = `
  uniform float u_time;

  void main() {

	gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
}
  `;
  const vertexShader = `
   uniform float u_time;

  varying vec2 vUv;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
    
    // Uncomment the code and hit the refresh button below for a more complex effect 🪄
    // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}

  `;

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
}
