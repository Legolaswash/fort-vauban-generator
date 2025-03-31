import React from 'react';

const RotationControls = ({ rotationAngle, setRotationAngle }) => {
  const handleRotateLeft = () => {
    setRotationAngle((prev) => (prev - 10) % 360);
  };

  const handleRotateRight = () => {
    setRotationAngle((prev) => (prev + 10) % 360);
  };

  return (
    <div className="rotation-controls">
      <button onClick={handleRotateLeft}>↺ Tourner à gauche</button>
      <span>{rotationAngle}°</span>
      <button onClick={handleRotateRight}>↻ Tourner à droite</button>
    </div>
  );
};

export default RotationControls;