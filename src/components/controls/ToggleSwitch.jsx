import React from 'react';

const ToggleSwitch = ({ label1, label2, checked, onChange }) => (
  <div className="toggle-container">
    <span>{label1}</span>
    <label className="toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="toggle-slider"></span>
    </label>
    <span>{label2}</span>
  </div>
);

export default ToggleSwitch;