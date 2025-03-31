import React, { useState, useEffect, useMemo } from 'react';
import FortDisplay from './FortDisplay';
import ControlsPanel from './ControlsPanel';

// Import des styles
import '../assets/styles/variables.css';
import '../assets/styles/base.css';
import '../assets/styles/forms.css';
import '../assets/styles/controls.css';
import '../assets/styles/responsive.css';

// Import des thèmes
import '../assets/styles/themes/neumorphism.css';
import '../assets/styles/themes/material.css';
import '../assets/styles/themes/glassmorphism.css';
import '../assets/styles/themes/brutalism.css';
import '../assets/styles/themes/minimalism.css';
import '../assets/styles/themes/organic.css';
import '../assets/styles/themes/retro-computing.css';
import '../assets/styles/themes/steampunk.css';
import '../assets/styles/themes/material.css';
import '../assets/styles/themes/skeuomorphism.css';
import '../assets/styles/themes/flat.css';

const App = () => {
  // Paramètres principaux du fort
  const [outerSize, setOuterSize] = useState(0.75);
  const [bastionSize, setBastionSize] = useState(0.22);
  const [outerSides, setOuterSides] = useState(5);
  const [bastionSides, setBastionSides] = useState(4);
  const [offsetFactor, setOffsetFactor] = useState(0.15);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Visibilité des composants
  const [showBase, setShowBase] = useState(true);
  const [showBastions, setShowBastions] = useState(true);
  const [showExtensions, setShowExtensions] = useState(true);
  const [bastionOrientationOutward, setBastionOrientationOutward] = useState(false);
  const [showControlsOnMobile, setShowControlsOnMobile] = useState(false);

  // Couleurs et styles
  const [baseColor, setBaseColor] = useState('#6c5ce7');
  const [bastionColor, setBastionColor] = useState('#fd79a8');
  const [extensionColor, setExtensionColor] = useState('#00cec9');
  const [extensionOpacity, setExtensionOpacity] = useState(0.7);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [designStyle, setDesignStyle] = useState('neumorphism');

  // Effet pour le style de design
  useEffect(() => {
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
    };
  }, [designStyle]);

  // Préréglages de forts
  const presets = {
    hexagon: { outerSides: 6, bastionSides: 4, outerSize: 0.7, bastionSize: 0.18, offsetFactor: 0.15 },
    square: { outerSides: 4, bastionSides: 5, outerSize: 0.65, bastionSize: 0.25, offsetFactor: 0.2 },
    triangle: { outerSides: 3, bastionSides: 4, outerSize: 0.6, bastionSize: 0.22, offsetFactor: 0.25 },
    pentagone: { outerSides: 5, bastionSides: 4, outerSize: 0.75, bastionSize: 0.22, offsetFactor: 0.15, rotationAngle: 0 }
  };

  const applyPreset = (preset) => {
    setOuterSides(preset.outerSides);
    setBastionSides(preset.bastionSides);
    setOuterSize(preset.outerSize);
    setBastionSize(preset.bastionSize);
    setOffsetFactor(preset.offsetFactor);
  };

  // Génère les points d'un polygone
  const generatePolygonPoints = (centerX, centerY, radius, sides, angleOffset = 0) => {
    return Array.from({ length: sides }, (_, i) => {
      const angle = (Math.PI * 2 * i) / sides + angleOffset - Math.PI / 2 + (rotationAngle * Math.PI / 180);
      return [
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      ];
    });
  };

  // Calcule un point intermédiaire entre deux points
  const calculateIntermediatePoint = (point1, point2, t) => [
    point1[0] + t * (point2[0] - point1[0]),
    point1[1] + t * (point2[1] - point1[1])
  ];

  // Fonction pour convertir des points en chemin SVG
  const pointsToPath = (points) => "M" + points.map(p => p.join(",")).join("L") + "Z";

  // Génère les extensions externes
  const generateExternalExtensions = (outerPolygon) => {
    const extensions = [];
    const sides = outerPolygon.length;

    for (let i = 0; i < sides; i++) {
      const point1 = outerPolygon[i];
      const point2 = outerPolygon[(i + 1) % sides];

      // Calcul du point médian
      const midPoint = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];

      // Vecteur de direction et perpendiculaire
      const dx = point2[0] - point1[0];
      const dy = point2[1] - point1[1];
      const length = Math.sqrt(dx * dx + dy * dy);

      const normalizedX = dx / length;
      const normalizedY = dy / length;
      const perpX = normalizedY;
      const perpY = -normalizedX;

      // Points d'insertion et paramètres
      const marginRatio = 0.3;
      const gapFactor = 0.05;
      const distanceOut = length * 0.2 + length * gapFactor;
      const outwardOffset = length * offsetFactor;

      const insetPoint1 = [
        point1[0] + normalizedX * (length * marginRatio),
        point1[1] + normalizedY * (length * marginRatio)
      ];

      const insetPoint2 = [
        point2[0] - normalizedX * (length * marginRatio),
        point2[1] - normalizedY * (length * marginRatio)
      ];

      // Points décalés pour les extensions
      const shiftedInsetPoint1 = [
        insetPoint1[0] + perpX * outwardOffset,
        insetPoint1[1] + perpY * outwardOffset
      ];

      const shiftedInsetPoint2 = [
        insetPoint2[0] + perpX * outwardOffset,
        insetPoint2[1] + perpY * outwardOffset
      ];

      const shiftedMidPoint = [
        midPoint[0] + perpX * outwardOffset,
        midPoint[1] + perpY * outwardOffset
      ];

      // Point externe pour la demi-lune
      const outerPoint = [
        shiftedMidPoint[0] + perpX * distanceOut,
        shiftedMidPoint[1] + perpY * distanceOut
      ];

      // Créer la demi-lune (triangle)
      const demiLune = [shiftedInsetPoint1, outerPoint, shiftedInsetPoint2];

      // Créer les tenailles (arc)
      const semiCirclePoints = [];
      const numPoints = 5;

      for (let j = 0; j <= numPoints; j++) {
        const t = j / numPoints;
        const bulge = -Math.sin(t * Math.PI) * distanceOut * 0.2;

        semiCirclePoints.push([
          shiftedInsetPoint1[0] + t * (shiftedInsetPoint2[0] - shiftedInsetPoint1[0]) + perpX * bulge,
          shiftedInsetPoint1[1] + t * (shiftedInsetPoint2[1] - shiftedInsetPoint1[1]) + perpY * bulge
        ]);
      }

      const tenaille = [shiftedInsetPoint1, ...semiCirclePoints, shiftedInsetPoint2];

      // Ajouter à la liste d'extensions
      extensions.push({ type: 'demiLune', points: demiLune });
      extensions.push({ type: 'tenaille', points: tenaille });
    }

    return extensions;
  };

  // Génère la structure complète du fort
  const fortData = useMemo(() => {
    const svgSize = 500;
    const center = svgSize / 2;

    const outerRadius = (svgSize * outerSize) / 2;
    const bastionRadius = (svgSize * bastionSize) / 2;

    // Génération du polygone de base
    const outerPolygon = generatePolygonPoints(center, center, outerRadius, outerSides);

    // Génération des bastions
    const bastionPolygons = outerPolygon.map(point => {
      // Calcul de l'angle d'orientation
      const angleToCenter = Math.atan2(center - point[1], center - point[0]);
      const rotationOffset = bastionOrientationOutward
        ? angleToCenter - Math.PI / 2 + Math.PI / bastionSides
        : angleToCenter - Math.PI / 2;

      // Génération du polygone du bastion
      const bastionPoly = generatePolygonPoints(
        point[0], point[1], bastionRadius, bastionSides, rotationOffset
      );

      // Points de connexion entre bastion et base
      const index = outerPolygon.indexOf(point);
      const prevPoint = outerPolygon[(index - 1 + outerSides) % outerSides];
      const nextPoint = outerPolygon[(index + 1) % outerSides];

      const connectionPoints = [
        calculateIntermediatePoint(point, prevPoint, 0.3),
        calculateIntermediatePoint(point, nextPoint, 0.3)
      ];

      return { bastionPoly, connectionPoints };
    });

    // Génération des extensions
    const extensions = generateExternalExtensions(outerPolygon);

    return { outerPolygon, bastionPolygons, extensions, svgSize };
  }, [
    outerSize, bastionSize, outerSides, bastionSides,
    offsetFactor, rotationAngle, bastionOrientationOutward
  ]);

  return (
    <div className={`app-container ${designStyle}`}>
      <h1 className="app-title">Générateur de Fort Vauban</h1>
      <p className="app-subtitle">Créez et personnalisez des fortifications à la Vauban</p>

      <div className="container">
        <FortDisplay
          fortData={fortData}
          showBase={showBase}
          showBastions={showBastions}
          showExtensions={showExtensions}
          pointsToPath={pointsToPath}
          baseColor={baseColor}
          bastionColor={bastionColor}
          extensionColor={extensionColor}
          extensionOpacity={extensionOpacity}
          strokeWidth={strokeWidth}
          showControlsOnMobile={showControlsOnMobile}
          setShowControlsOnMobile={setShowControlsOnMobile}
        />

        <ControlsPanel
          outerSize={outerSize}
          setOuterSize={setOuterSize}
          bastionSize={bastionSize}
          setBastionSize={setBastionSize}
          outerSides={outerSides}
          setOuterSides={setOuterSides}
          bastionSides={bastionSides}
          setBastionSides={setBastionSides}
          offsetFactor={offsetFactor}
          setOffsetFactor={setOffsetFactor}
          rotationAngle={rotationAngle}
          setRotationAngle={setRotationAngle}
          showBase={showBase}
          setShowBase={setShowBase}
          showBastions={showBastions}
          setShowBastions={setShowBastions}
          showExtensions={showExtensions}
          setShowExtensions={setShowExtensions}
          bastionOrientationOutward={bastionOrientationOutward}
          setBastionOrientationOutward={setBastionOrientationOutward}
          designStyle={designStyle}
          setDesignStyle={setDesignStyle}
          showControlsOnMobile={showControlsOnMobile}
          presets={presets}
          applyPreset={applyPreset}
        />
      </div>
    </div>
  );
};

export default App;