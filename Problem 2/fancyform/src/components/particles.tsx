import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Stars = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

    return (
  <Particles
    className="tsparticles"
    init={particlesInit}
    options={{
      background: {
        opacity: 0,
      },
      fpsLimit: 120,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#e3e3e3",
        },
        links: {
          color: "#ffa2f9",
          distance: 130,
          enable: true,
          opacity: 0.6,
          width: 0.8,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "polygon",
          stroke: {
            width: 0,
            color: "#e3e3e3",
          },
        },
        size: {
          value: 1,
        },
      },
      detectRetina: true,
    }}
  />
  )
}

export default Stars;