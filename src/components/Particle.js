import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80, // Reduce number for a smoother effect
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#0d6efd", "#6610f2", "#20c997", "#ff7f50", "#f39c12"], // Aurora-like colors
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0.5,
            },
          },
          move: {
            enable: true,
            speed: 0.3, // Slow movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          line_linked: {
            enable: false, // Disable lines for a cleaner look
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble", // Make it interactive like an aurora reacting to interaction
            },
            onclick: {
              enable: true,
              mode: "repulse", // Particles repel on click
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 0.8,
              speed: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
