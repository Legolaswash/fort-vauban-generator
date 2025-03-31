import React from 'react';

const RotationControls = ({ rotationAngle, setRotationAngle }) => (
  <div className="rotate-group">
    <button
      className="rotate-btn"
      onClick={() => setRotationAngle(prev => prev - 15)}
      aria-label="Rotation anti-horaire"
    >
      ↺
    </button>
    <input
      type="number"
      className="rotation-input"
      value={rotationAngle}
      onChange={e => setRotationAngle(Number(e.target.value))}
      aria-label="Angle de rotation"
    />
    <button
      className="rotate-btn"
      onClick={() => setRotationAngle(prev => prev + 15)}
      aria-label="Rotation horaire"
    >
      ↻
    </button>
  </div>
);

export default RotationControls;