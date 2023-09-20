"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project(props: { route: string; imagepath: string }) {
  return (
    <div className="w-36 h-36 md:w-96 md:h-96 hover:border-[.2rem] hover:border-gray-50 transition ease-in delay-75 hover:-translate-y-5">
      <Link href={props.route} className="relative w-full h-full z-50">
        <Image
          className="w-full h-full"
          src={props.imagepath}
          alt="Image of me"
          width={250}
          height={250}
        />
      </Link>
    </div>
  );
}
