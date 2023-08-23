import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";

export default function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig as ISourceOptions}
      init={particlesInit}
      className=""
    />
  );
}
