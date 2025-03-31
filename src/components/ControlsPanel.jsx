import React from 'react';
import RotationControls from './controls/RotationControls';
import ToggleSwitch from './controls/ToggleSwitch';

const ControlsPanel = ({
  outerSize,
  setOuterSize,
  bastionSize,
  setBastionSize,
  outerSides,
  setOuterSides,
  bastionSides,
  setBastionSides,
  offsetFactor,
  setOffsetFactor,
  rotationAngle,
  setRotationAngle,
  showBase,
  setShowBase,
  showBastions,
  setShowBastions,
  showExtensions,
  setShowExtensions,
  bastionOrientationOutward,
  setBastionOrientationOutward,
  designStyle,
  setDesignStyle,
  showControlsOnMobile,
  presets,
  applyPreset
}) => {
  return (
    <div className={`controls-panel ${showControlsOnMobile ? "show" : ""}`}>
      {/* Préréglages */}
      <div className="controls-group">
        <h3 className="controls-group-title">Préréglages</h3>
        <div className="presets-container">
          <button className="preset-btn" onClick={() => applyPreset(presets.hexagon)}>Hexagone</button>
          <button className="preset-btn" onClick={() => applyPreset(presets.square)}>Carré</button>
          <button className="preset-btn" onClick={() => applyPreset(presets.triangle)}>Triangle</button>
          <button className="preset-btn" onClick={() => applyPreset(presets.pentagone)}>Pentagone</button>
        </div>
      </div>

      {/* Dimensions */}
      <div className="controls-group">
        <h3 className="controls-group-title">Dimensions</h3>

        <div className="control-item">
          <label htmlFor="baseSize">Taille de la base</label>
          <div className="slider-container">
            <input
              id="baseSize"
              className="slider"
              type="range"
              min="0.4"
              max="0.95"
              step="0.01"
              value={outerSize}
              onChange={(e) => setOuterSize(Number(e.target.value))}
            />
            <input
              type="number"
              className="dimension-input"
              min="0.4"
              max="0.95"
              step="0.01"
              value={outerSize}
              onChange={(e) => setOuterSize(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="control-item">
          <label htmlFor="bastionSize">Taille des bastions</label>
          <div className="slider-container">
            <input
              id="bastionSize"
              className="slider"
              type="range"
              min="0.05"
              max="0.3"
              step="0.01"
              value={bastionSize}
              onChange={(e) => setBastionSize(Number(e.target.value))}
            />
            <input
              type="number"
              className="dimension-input"
              min="0.05"
              max="0.3"
              step="0.01"
              value={bastionSize}
              onChange={(e) => setBastionSize(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="inline-controls">
          <div className="control-item">
            <label htmlFor="outerSides">Côtés du fort</label>
            <input
              id="outerSides"
              type="number"
              className="number-input"
              min="3"
              max="15"
              value={outerSides}
              onChange={(e) => setOuterSides(Number(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label htmlFor="bastionSides">Côtés bastions</label>
            <input
              id="bastionSides"
              type="number"
              className="number-input"
              min="3"
              max="15"
              value={bastionSides}
              onChange={(e) => setBastionSides(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="control-item">
          <label htmlFor="offsetFactor">Extension</label>
          <div className="slider-container">
            <input
              id="offsetFactor"
              className="slider"
              type="range"
              min="-0.25"
              max="0.5"
              step="0.01"
              value={offsetFactor}
              onChange={(e) => setOffsetFactor(Number(e.target.value))}
            />
            <input
              type="number"
              className="dimension-input"
              min="0.05"
              max="0.5"
              step="0.01"
              value={offsetFactor}
              onChange={(e) => setOffsetFactor(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="control-item">
          <label htmlFor="rotation">Rotation</label>
          <RotationControls
            rotationAngle={rotationAngle}
            setRotationAngle={setRotationAngle}
          />
        </div>
      </div>

      {/* Visibilité */}
      <div className="controls-group">
        <h3 className="controls-group-title">Visibilité</h3>

        <div className="control-item">
          <label>Affichage des éléments</label>
          <ToggleSwitch
            label1="Base"
            checked={showBase}
            onChange={() => setShowBase(!showBase)}
          />
        </div>

        <div className="control-item">
          <ToggleSwitch
            label1="Bastions"
            checked={showBastions}
            onChange={() => setShowBastions(!showBastions)}
          />
        </div>

        <div className="control-item">
          <ToggleSwitch
            label1="Extensions"
            checked={showExtensions}
            onChange={() => setShowExtensions(!showExtensions)}
          />
        </div>

        <div className="control-item">
          <label>Orientation des bastions</label>
          <ToggleSwitch
            label1="Intérieur/Extérieur"
            checked={bastionOrientationOutward}
            onChange={() => setBastionOrientationOutward(!bastionOrientationOutward)}
          />
        </div>
      </div>

      {/* Thème */}
      <div className="controls-group">
        <h3 className="controls-group-title">Thème</h3>
        <div className="control-item">
          <label htmlFor="designStyle">Style visuel</label>
          <select
            id="designStyle"
            className="design-style-select"
            value={designStyle}
            onChange={(e) => setDesignStyle(e.target.value)}
          >
            <option value="neumorphism">Neumorphisme</option>
            <option value="material">Material Design</option>
            <option value="glassmorphism">Glassmorphisme</option>
            <option value="flat">Flat Design</option>
            <option value="skeuomorphism">Skeuomorphisme</option>
            <option value="brutalism">Brutalisme</option>
            <option value="minimalism">Minimalisme</option>
            <option value="organic">Organique</option>
            <option value="retro-computing">Rétro-Computing</option>
            <option value="steampunk">Steampunk</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ControlsPanel;