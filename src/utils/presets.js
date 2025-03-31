const presets = {
  default: {
    rotationAngle: 0,
    outerSize: 200,
    bastionSize: 50,
    outerSides: 5,
    bastionSides: 3,
    offsetFactor: 1,
    showBase: true,
    showBastions: true,
    showExtensions: true,
    bastionOrientationOutward: true
  },
  triangular: {
    rotationAngle: 0,
    outerSize: 250,
    bastionSize: 70,
    outerSides: 3,
    bastionSides: 5,
    offsetFactor: 1.2,
    showBase: true,
    showBastions: true,
    showExtensions: false,
    bastionOrientationOutward: true
  },
  hexagonal: {
    rotationAngle: 0,
    outerSize: 180,
    bastionSize: 40,
    outerSides: 6,
    bastionSides: 3,
    offsetFactor: 0.8,
    showBase: true,
    showBastions: true,
    showExtensions: true,
    bastionOrientationOutward: true
  },
  star: {
    rotationAngle: 0,
    outerSize: 220,
    bastionSize: 100,
    outerSides: 8,
    bastionSides: 3,
    offsetFactor: 1.5,
    showBase: true,
    showBastions: true,
    showExtensions: false,
    bastionOrientationOutward: true
  }
};

export default presets;