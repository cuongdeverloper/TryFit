import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle12 = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      backgroundMode: {
        enable: true,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 1000,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#d4d4d4ff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.4,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: false,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default Particle12;
