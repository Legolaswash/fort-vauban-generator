# Fort Vauban Generator

## Description

The Fort Vauban Generator is an interactive web application that allows users to create and customize virtual representations of Vauban-style fortifications (military structures designed by Sébastien Le Prestre de Vauban in the 17th century). The application generates dynamic SVG visualizations based on user input.

Users can adjust various parameters such as size, shape, and design style to generate unique fort configurations.

## Features
- Interactive controls for adjusting fort parameters (bastions, extensions, colors)
- Multiple design themes (including Neumorphism, Glassmorphism, Brutalism, and more).
- Responsive design for optimal viewing on different devices.
- Preset configurations for quick setup and inspiration
- Real-time visual updates as parameters are adjusted

## Installation

1. Clone the repository:
   ```
   git clone [URL]
   ```

2. Navigate to the project directory:
   ```
   cd fort-vauban-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

3. Use the control panel to customize your fort:
   - Adjust the bastion orientation
   - Select from various design styles
   - Apply presets for quick configuration

4. To build for production:
   ```
   npm run build
   ```

## File Structure
```
📦src
 ┣ 📂assets
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┣ 📜brutalism.css
 ┃ ┃ ┃ ┣ 📜flat.css
 ┃ ┃ ┃ ┣ 📜glassmorphism.css
 ┃ ┃ ┃ ┣ 📜material.css
 ┃ ┃ ┃ ┣ 📜minimalism.css
 ┃ ┃ ┃ ┣ 📜neumorphism.css
 ┃ ┃ ┃ ┣ 📜organic.css
 ┃ ┃ ┃ ┣ 📜retro-computing.css
 ┃ ┃ ┃ ┣ 📜skeuomorphism.css
 ┃ ┃ ┃ ┗ 📜steampunk.css
 ┃ ┃ ┣ 📜base.css
 ┃ ┃ ┣ 📜controls.css
 ┃ ┃ ┣ 📜forms.css
 ┃ ┃ ┣ 📜responsive.css
 ┃ ┃ ┗ 📜variables.css
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂controls
 ┃ ┃ ┣ 📜PresetButtons.jsx
 ┃ ┃ ┣ 📜RotationControls.jsx
 ┃ ┃ ┣ 📜SliderControl.jsx
 ┃ ┃ ┗ 📜ToggleSwitch.jsx
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜ControlsPanel.jsx
 ┃ ┗ 📜FortDisplay.jsx
 ┣ 📂constants
 ┣ 📂context
 ┣ 📂hooks
 ┃ ┗ 📜useFortGenerator.js
 ┣ 📂utils
 ┃ ┣ 📜polygonUtils.js
 ┃ ┗ 📜presets.js
 ┣ 📜index.css
 ┗ 📜index.js
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## Future Enhancements
- Save and export fort designs
- Additional fort elements and customization options
- Historical information about Vauban fortifications
- Colors customisations of forts elements
- 3D visualisations

## About This Project

This is my first React project, created as a hands-on learning experience to discover fundamental React concepts. Through this development process, I've explored multiple technologies, frameworks, and development environments while building a practical application.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
