import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // smaller bundle than loadFull

const ParticlesBG: React.FC = () => {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="bg-particles"
      init={init}
      className="absolute inset-0 w-full h-full"
      options={{
        fullScreen: { enable: false },        // we’ll control it with CSS
        background: { color: "#151515" },     // pure black
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.3 },
            push: { quantity: 3 },
          },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#bd2208" },
          links: {
            enable: true,
            color: "#bd2208",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 4 } },
        },
      }}
    />
  );
};

export default ParticlesBG;
