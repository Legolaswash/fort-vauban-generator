import React from 'react';
import presets from '../../utils/presets';

const PresetButtons = ({ applyPreset }) => {
  return (
    <div className="presets-container">
      {Object.keys(presets).map((presetKey) => (
        <button
          key={presetKey}
          className="preset-btn"
          onClick={() => applyPreset(presets[presetKey])}
        >
          {presetKey.charAt(0).toUpperCase() + presetKey.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;