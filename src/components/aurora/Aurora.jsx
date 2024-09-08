import React from "react";

function Aurora() {
  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: 'black',
    overflow: 'hidden',
  };

  const beamStyleBase = {
    position: 'absolute',
    top: 0,
    width: '150%',
    height: '100%',
    filter: 'blur(120px)',
    opacity: 0.8,
    animation: 'shimmer 8s infinite alternate ease-in-out',
  };

  const beams = [
    {
      id: 1,
      left: '-10%',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0))',
      animationDuration: '12s',
      animationDelay: '-1s',
    },
    {
      id: 2,
      left: '20%',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 0, 255, 0.6), rgba(0, 255, 0, 0))',
      animationDuration: '10s',
      animationDelay: '0s',
    },
    {
      id: 3,
      left: '60%',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 255, 0, 0.6), rgba(255, 255, 0, 0))',
      animationDuration: '14s',
      animationDelay: '-2s',
    },
    {
      id: 4,
      left: '80%',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 255, 0.6), rgba(255, 0, 0, 0))',
      animationDuration: '9s',
      animationDelay: '-3s',
    },
  ];

  return (
    <div style={containerStyle}>
      {beams.map((beam) => (
        <div
          key={beam.id}
          style={{
            ...beamStyleBase,
            left: beam.left,
            background: beam.background,
            animationDuration: beam.animationDuration,
            animationDelay: beam.animationDelay,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateY(0px) rotate(10deg);
          }
          100% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Aurora;
