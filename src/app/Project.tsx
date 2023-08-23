import React from "react";
import Image from "next/image";

export default function Project(props: { imagepath: string }) {
  return (
    <div className="w-36 h-36 md:w-96 md:h-96 hover:border-[.2rem] hover:border-gray-50 transition ease-in delay-75 hover:-translate-y-5">
      <Image
        className="w-full h-full"
        src={props.imagepath}
        alt="Image of me"
        width={250}
        height={250}
      />
      {/* <div className="relative w-full h-full blur-sm"></div> */}
    </div>
  );
}
