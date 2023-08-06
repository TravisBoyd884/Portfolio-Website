"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import MovingPlane from "./MovingPlane";
import FBOCurl from "./FBOCurl";
import Reveal from "./Reveal";

function CheckerBoard() {
  const vertexShader = `
    void main() {
      gl_Position = vec4( position, 1.0 );
    }
  `;
  const fragmentShader = `
    uniform vec2 u_resolution;

    void main(){
      vec2 st = gl_FragCoord.xy/u-resolution;
      float color = mod(floor(2.0 * st.x) + floor(2.0 * st.y), 2.0);
      gl_FragColor = vec4(color,color,color,1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <div className="absolute h-screen w-2/3 left-80">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <CheckerBoard />
          <OrbitControls />
          <FBOCurl />
          <axesHelper />
        </Canvas>
      </div>

      {/* <div className="absolute text-white font-mono font-bold text-6xl top-1/3 left-20"> */}
      {/*   <Reveal delay={0.5}> */}
      {/*     <h1>Hi, </h1> */}
      {/*   </Reveal> */}
      {/*   <Reveal delay={1}> */}
      {/*     <h1>I'm Travis</h1> */}
      {/*   </Reveal> */}
      {/* </div> */}
    </div>
  );
}
