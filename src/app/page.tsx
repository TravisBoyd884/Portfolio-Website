"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import MovingPlane from "./MovingPlane";
import FBOCurl from "./FBOCurl";
import Reveal from "./Reveal";
import SkyBox from "./SkyBox";
import Anim from "./Anim";

export default function Home() {
  const [next, setnext] = useState(0);

  const animations = [<FBOCurl />, <MovingPlane />, <Anim />];

  const handleClick = () => {
    if (next == animations.length - 1) setnext(0);
    else setnext(next + 1);
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <div className="absolute h-screen w-screen z-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <OrbitControls />
          {animations[next]}
          <SkyBox />
        </Canvas>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="absolute w-48 h-20 bg-white text-black z-50 text-3xl left-1/2 -translate-x-1/2 top-10"
      >
        Next
      </button>

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
