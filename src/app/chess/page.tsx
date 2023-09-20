"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./chess.module.css";
import Tsparticles from "../Tsparticles";

export default function chess() {
  return (
    <>
      <div className="absolute bg bg-transparent text-3xl text-white w-fit h-fit text-[1rem] md:text-[2.2rem] p-10 ">
        <Link href="/" className={styles.glow}>
          Back
        </Link>
      </div>
      <div className="flex justify-center items-center w-screen h-fit bg-transparent flex-col gap-16 p-6 md:p-20 pt-28">
        <Image
          className="w-64 h-64 md:w-96 md:h-96"
          src={"/chess.png"}
          alt="Image of me"
          width={250}
          height={250}
        />
        <div className="absolute z-[-1]">
          <Tsparticles />
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-mono">
          Chess Game
        </h1>
        <p className="text-white md:w-1/2 text-lg md:text-2xl indent-10 font-mono backdrop-blur-xl">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis. Lorem ipsum dolor sit amet,
          officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
          nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
          cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
          est aliquip amet voluptate voluptate dolor minim nulla est proident.
          Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt
          ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
          cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi
          laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
          commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint
          cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Lorem
          ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
          labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation
          amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud
          nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim
          nulla est proident. Nostrud officia pariatur ut officia. Sit irure
          elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
          dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
          adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
          eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
          enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et
          est culpa et culpa duis.
        </p>
      </div>
    </>
  );
}
