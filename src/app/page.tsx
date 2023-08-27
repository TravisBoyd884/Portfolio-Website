"use client";

import styles from "./home.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import FBOCurl from "./FBOCurl";
import Reveal from "./Reveal";
import Link from "next/link";
import Image from "next/image";
import Tsparticles from "./Tsparticles";
import Project from "./Project";
import Confetti from "./Confetti";

export default function Home() {
  const [aboutActive, setaboutActive] = useState(false);
  const [projectActive, setprojectActive] = useState(false);
  const projectSection = useRef<HTMLDivElement>(null);
  const homeSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        setprojectActive(true);
      } else {
        setprojectActive(false);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
          setprojectActive(true);
        } else {
          setprojectActive(false);
        }
      });
    };
  }, []);

  const handleClick = () => {
    setaboutActive(false);
  };

  const handleProjectButton = () => {
    projectSection.current?.scrollIntoView();
    setprojectActive(!projectActive);
  };

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
          <button onClick={() => handleProjectButton()} className={styles.glow}>
            Projects
          </button>
        </Reveal>
        <Reveal delay={0.5} inView={false}>
          <a
            href="mailto:phtboyd884@gmail.com"
            target="_blank"
            className={styles.glow}
          >
            Contact
          </a>
        </Reveal>
      </div>

      {aboutActive ? (
        <div className="fixed w-screen h-screen z-50 p-8">
          <button
            type="button"
            className="absolute p-8 text-white text-3xl z-[60] cursor-pointer font-mono"
            onClick={() => handleClick()}
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
                I&apos;m a 19 year old sophomore at Oakland University, deeply
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
          <div ref={homeSection} className="w-screen h-screen">
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
          <h1
            ref={projectSection}
            className="text-white text-3xl md:text-6xl font-mono p-16 md:p-32"
          >
            Projects
          </h1>

          {projectActive ? (
            <Confetti />
          ) : (
            <div className="absolute w-screen h-screen bg-black z-[-10]"></div>
          )}

          <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
            <Project imagepath="/chess.png"></Project>
            <Project imagepath="/codetype.png"></Project>
            <Project imagepath="/quickflip2.jpg"></Project>
          </div>
        </div>
      </div>
    </>
  );
}
