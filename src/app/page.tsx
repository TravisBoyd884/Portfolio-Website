"use client";
import styles from "./home.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useMemo, useRef, useState } from "react";
import MovingPlane from "./MovingPlane";
import FBOCurl from "./FBOCurl";
import Reveal from "./Reveal";
import Link from "next/link";
import Image from "next/image";
import Tsparticles from "./Tsparticles";
import Project from "./Project";
import Confetti from "./Confetti";

export default function Home() {
  const [aboutActive, setaboutActive] = useState(false);
  return (
    <>
      {/*NavBar  */}
      <div className="fixed flex justify-center w-screen items-center cursor-pointer text-[1rem] md:text-[2.2rem] z-50 top-5">
        <Reveal delay={0.5} inView={false}>
          <button
            type="button"
            className={styles.glow}
            onClick={() => setaboutActive(true)}
          >
            About
          </button>
        </Reveal>
        <Reveal delay={0.5} inView={false}>
          <Link href="/projects" className={styles.glow}>
            Projects
          </Link>
        </Reveal>
        <Reveal delay={0.5} inView={false}>
          <Link href="/contact" className={styles.glow}>
            Contact
          </Link>
        </Reveal>
      </div>

      {aboutActive ? (
        <div className="fixed w-screen h-screen z-50">
          <button
            type="button"
            className="absolute p-8 text-white text-3xl z-[60] cursor-pointer font-mono"
            onClick={() => setaboutActive(false)}
          >
            Back
          </button>
          <Tsparticles />

          <div className="relative w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-20 md:gap-80 z-50 text-white font-mono">
            <div className="flex justify-center items-center flex-col gap-4 w-[18rem] md:w-[40rem] order-last">
              <div className="text-xl">Hi, my name is...</div>
              <div>
                <div className="text-4xl md:text-8xl font-bold">
                  Travis Boyd.
                </div>
              </div>
              <div className="text-xl font-bold text-gray-400">
                I'm a 19 year old sophomore at Oakland University, deeply
                engrossed in the world of computer science. My insatiable
                curiosity has led me to explore the captivating domains of web
                development, artificial intelligence, and computer graphics.
              </div>
            </div>
            <Image
              className="shadow-[0_0_0.5rem_0.3rem_#fff] max-w-[10rem] max-h-[11rem] md:max-w-[20rem] md:max-h-[20rem] z-50 relative top-8"
              src="/Selfie.jpeg"
              alt="Image of me"
              width={250}
              height={250}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.parallax}>
        {/*Background*/}
        <div className={styles.parallaxLayerBack}>
          <div className="w-screen h-screen">
            <Canvas camera={{ position: [0, 0, 1] }} resize={{ scroll: false }}>
              <OrbitControls enableZoom={false} />
              <FBOCurl />
            </Canvas>
          </div>
          {/* Hero Section */}
          <div className="w-screen h-screen absolute flex justify-center items-center flex-col">
            <div className="relative justify-center text-white font-mono flex items-center flex-col z-50 pointer-events-none md:w-fit">
              <Reveal delay={0.5} inView={false}>
                <h1 className="font-bold text-3xl md:text-8xl p-1 md:p-3">
                  Travis Boyd
                </h1>
              </Reveal>
              <Reveal delay={0.5} inView={false}>
                <h1 className="text-xl md:text-3xl p-1 md:p-3">
                  --Computer Science Student--
                </h1>
              </Reveal>
            </div>
          </div>
        </div>

        <div className={styles.parallaxLayerBase}>
          <h1 className="text-white text-3xl md:text-6xl font-mono">
            Projects
          </h1>
          <Confetti />
          <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
            <Project imagepath="/chess.png"></Project>
            <Project imagepath="/codetype.png"></Project>
            <Project imagepath="/quickflip.jpg"></Project>
          </div>
        </div>
      </div>
    </>
  );
}
