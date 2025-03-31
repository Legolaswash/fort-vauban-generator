import React from 'react';

const FortDisplay = ({
  fortData,
  showBase,
  showBastions,
  showExtensions,
  pointsToPath,
  baseColor,
  bastionColor,
  extensionColor,
  extensionOpacity,
  strokeWidth,
  showControlsOnMobile,
  setShowControlsOnMobile
}) => {
  return (
    <div className="fort-display">
      <div className="svg-container">
        {/* <svg width={fortData.svgSize} height={fortData.svgSize}> */}
        <svg 
          viewBox={`0 0 ${fortData.svgSize} ${fortData.svgSize}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="bastionMask">
              <rect x="-20%" y="-20%" width="140%" height="140%" fill="white" />
              <path d={pointsToPath(fortData.outerPolygon)} fill="black" />
            </mask>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#a3b1c6" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Extensions */}
          {showExtensions && fortData.extensions.map((ext, i) => (
            <path
              key={`external-${i}`}
              d={pointsToPath(ext.points)}
              fill={`${extensionColor}${Math.floor(extensionOpacity * 255).toString(16).padStart(2, "0")}`}
              stroke={extensionColor}
              strokeWidth={strokeWidth}
              filter="url(#shadow)"
            />
          ))}

          {/* Base du fort */}
          {showBase && (
            <path
              d={pointsToPath(fortData.outerPolygon)}
              fill={baseColor}
              stroke={baseColor}
              strokeWidth={strokeWidth}
              filter="url(#shadow)"
            />
          )}

          {/* Bastions */}
          {showBastions && (
            <g mask="url(#bastionMask)">
              {fortData.bastionPolygons.map(({ bastionPoly, connectionPoints }, i) => (
                <g key={i}>
                  <path
                    d={pointsToPath(bastionPoly)}
                    fill={bastionColor}
                    stroke={bastionColor}
                    strokeWidth={strokeWidth}
                    filter="url(#shadow)"
                  />
                  <path
                    d={`M${connectionPoints[0].join(",")} L${connectionPoints[1].join(",")}`}
                    fill="none"
                    stroke={bastionColor}
                    strokeWidth={strokeWidth}
                    filter="url(#shadow)"
                  />
                </g>
              ))}
            </g>
          )}
        </svg>

        {/* Bouton d'affichage des contrôles sur mobile */}
        <button
          className="controls-btn"
          onClick={() => setShowControlsOnMobile(!showControlsOnMobile)}
          aria-label="Afficher/masquer les contrôles"
        >
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default FortDisplay;