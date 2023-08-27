"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import confettiConfig from "./particles-config";

export default function Confetti() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        options={confettiConfig as ISourceOptions}
        init={particlesInit}
      />
    </>
  );
}
