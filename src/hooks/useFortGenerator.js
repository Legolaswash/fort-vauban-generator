import { useState, useEffect } from 'react';

const useFortGenerator = () => {
    const [outerSize, setOuterSize] = useState(0.75);
    const [bastionSize, setBastionSize] = useState(0.22);
    const [outerSides, setOuterSides] = useState(5);
    const [bastionSides, setBastionSides] = useState(4);
    const [offsetFactor, setOffsetFactor] = useState(0.15);
    const [rotationAngle, setRotationAngle] = useState(0);

    const [showBase, setShowBase] = useState(true);
    const [showBastions, setShowBastions] = useState(true);
    const [showExtensions, setShowExtensions] = useState(true);
    const [bastionOrientationOutward, setBastionOrientationOutward] = useState(false);

    const [baseColor, setBaseColor] = useState('#6c5ce7');
    const [bastionColor, setBastionColor] = useState('#fd79a8');
    const [extensionColor, setExtensionColor] = useState('#00cec9');
    const [extensionOpacity, setExtensionOpacity] = useState(0.7);
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [designStyle, setDesignStyle] = useState('neumorphism');

    useEffect(() => {
    }, [designStyle]);

    const applyPreset = (preset) => {
        setOuterSize(preset.outerSize);
        setBastionSize(preset.bastionSize);
        setOuterSides(preset.outerSides);
        setBastionSides(preset.bastionSides);
        setOffsetFactor(preset.offsetFactor);
    };

    const generatePolygonPoints = (centerX, centerY, radius, sides, angleOffset = 0) => {
        const points = [];
        for (let i = 0; i < sides; i++) {
            const angle = (i * (2 * Math.PI)) / sides + angleOffset;
            points.push([
                centerX + radius * Math.cos(angle),
                centerY + radius * Math.sin(angle),
            ]);
        }
        return points;
    };

    return {
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
        baseColor,
        setBaseColor,
        bastionColor,
        setBastionColor,
        extensionColor,
        setExtensionColor,
        extensionOpacity,
        setExtensionOpacity,
        strokeWidth,
        setStrokeWidth,
        designStyle,
        setDesignStyle,
        applyPreset,
        generatePolygonPoints,
    };
};

export default useFortGenerator;