"use client";
import styles from "./glow.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import MovingPlane from "./MovingPlane";
import FBOCurl from "./FBOCurl";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden flex justify-center items-center">
      <div className="absolute h-screen w-screen z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <OrbitControls enableZoom={false} />
          <FBOCurl />
        </Canvas>
      </div>

      <div className="absolute text-white font-mono flex top-64 items-center flex-col z-50">
        <Reveal delay={0.5}>
          <h1 className="font-bold text-8xl pointer-events-none">
            Travis Boyd{" "}
          </h1>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="text-3xl pointer-events-none">
            --Computer Science Student--
          </h1>
        </Reveal>
      </div>

      <div className="absolute flex justify-center items-center cursor-pointer">
        <Reveal delay={1.5}>
          <Link href="/about" className={styles.glow}>
            About
          </Link>
        </Reveal>
        <Reveal delay={1.5}>
          <Link href="/projects" className={styles.glow}>
            Projects
          </Link>
        </Reveal>
        <Reveal delay={1.5}>
          <Link href="/about" className={styles.glow}>
            Contact
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
