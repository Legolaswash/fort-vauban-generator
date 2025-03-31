const generatePolygonPoints = (centerX, centerY, radius, sides, angleOffset = 0) => {
    const points = [];
    const angleStep = (2 * Math.PI) / sides;

    for (let i = 0; i < sides; i++) {
        const angle = angleStep * i + angleOffset;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push([x, y]);
    }

    return points;
};

const calculateIntermediatePoint = (point1, point2, t) => {
    const x = point1[0] + (point2[0] - point1[0]) * t;
    const y = point1[1] + (point2[1] - point1[1]) * t;
    return [x, y];
};

const pointsToPath = (points) => {
    return "M" + points.map(p => p.join(",")).join("L") + "Z";
};

export { generatePolygonPoints, calculateIntermediatePoint, pointsToPath };