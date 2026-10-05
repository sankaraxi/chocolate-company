import React from 'react';

/**
 * Luxury SVG Artwork Components for Maison Éclat Cacao
 * Zero external dependencies, crisp at every display density, zero broken images.
 */

export function ChocolateBarArtwork({ percentage = 75, origin = "Chuao", className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C100B] to-[#120906] ${className}`}>
      {/* Background glow & subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(207,163,86,0.12),transparent_70%)] pointer-events-none" />

      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none transition-transform duration-500 hover:scale-[1.03]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="barBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A2218" />
            <stop offset="45%" stopColor="#25140E" />
            <stop offset="100%" stopColor="#150A06" />
          </linearGradient>

          <linearGradient id="squareHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
          </linearGradient>

          <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5DF9A" />
            <stop offset="30%" stopColor="#D4A753" />
            <stop offset="60%" stopColor="#EAD086" />
            <stop offset="100%" stopColor="#9C7328" />
          </linearGradient>

          <linearGradient id="paperWrap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F7F1E6" />
            <stop offset="50%" stopColor="#EDE3D2" />
            <stop offset="100%" stopColor="#DFD1BD" />
          </linearGradient>

          <filter id="foilTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="200" cy="265" rx="140" ry="18" fill="rgba(0,0,0,0.55)" filter="blur(10px)" />

        {/* Main Chocolate Bar Slab - angled elegant view */}
        <g transform="translate(90, 45)">
          {/* Base bar */}
          <rect x="0" y="0" width="220" height="190" rx="6" fill="url(#barBodyGrad)" stroke="#4A2D20" strokeWidth="1.5" />

          {/* 3x3 Molded Chocolate Squares */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const x = 18 + col * 64;
              const y = 18 + row * 52;
              return (
                <g key={`${row}-${col}`}>
                  {/* Square base recess */}
                  <rect x={x} y={y} width="56" height="44" rx="3" fill="#1E110B" stroke="#0D0604" strokeWidth="1" />
                  {/* Beveled face */}
                  <rect x={x + 3} y={y + 3} width="50" height="38" rx="2" fill="#2C1911" />
                  {/* Top highlight */}
                  <rect x={x + 3} y={y + 3} width="50" height="38" rx="2" fill="url(#squareHighlight)" />

                  {/* Embossed Cacao Pod Monogram in Center Square */}
                  {row === 1 && col === 1 && (
                    <g transform={`translate(${x + 25}, ${y + 22}) scale(0.6)`}>
                      <path
                        d="M0 -15 C8 -10, 12 0, 10 12 C7 20, -7 20, -10 12 C-12 0, -8 -10, 0 -15 Z"
                        fill="none"
                        stroke="#B88746"
                        strokeWidth="2"
                        opacity="0.8"
                      />
                      <line x1="0" y1="-12" x2="0" y2="14" stroke="#B88746" strokeWidth="1" opacity="0.6" />
                    </g>
                  )}

                  {/* Minimal origin initials on other squares */}
                  {!(row === 1 && col === 1) && (
                    <circle cx={x + 25} cy={y + 22} r="2" fill="#42271B" opacity="0.8" />
                  )}
                </g>
              );
            })
          )}

          {/* Golden Foil Peeling Over Lower Portion */}
          <path
            d="M -6 120 Q 30 115, 70 128 T 150 118 T 226 124 L 226 200 L -6 200 Z"
            fill="url(#goldFoil)"
            stroke="#8F6A22"
            strokeWidth="1"
            filter="drop-shadow(0 -3px 4px rgba(0,0,0,0.3))"
          />

          {/* Embossed Paper Sleeve Outer Wrap */}
          <path
            d="M -10 145 L 230 145 L 230 205 L -10 205 Z"
            fill="url(#paperWrap)"
            stroke="#C4B49F"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"
          />

          {/* Botanical Etching & Typography on Wrap */}
          <line x1="10" y1="156" x2="210" y2="156" stroke="#9C7A4A" strokeWidth="1" strokeDasharray="3 2" />
          <text
            x="110"
            y="172"
            fill="#1E110B"
            fontSize="10"
            fontFamily="serif"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="2.5"
          >
            MAISON ÉCLAT
          </text>
          <text
            x="110"
            y="186"
            fill="#694C38"
            fontSize="8"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="1.2"
          >
            {origin.toUpperCase()} · {percentage}% CACAO
          </text>
          <line x1="10" y1="195" x2="210" y2="195" stroke="#9C7A4A" strokeWidth="1" strokeDasharray="3 2" />
        </g>

        {/* Broken Chocolate Shards on Left */}
        <polygon
          points="65,190 85,210 75,225 50,215"
          fill="#2A1710"
          stroke="#3D2319"
          strokeWidth="1"
          filter="drop-shadow(2px 4px 5px rgba(0,0,0,0.5))"
        />
        <polygon
          points="40,225 58,235 48,248 30,238"
          fill="#1C0E08"
          stroke="#321A11"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function BonbonBoxArtwork({ className = "w-full h-full" }) {
  const bonbons = [
    { color: "#E5A93C", specular: "#FFF2C4", name: "Caramel" },
    { color: "#881B2B", specular: "#FFB0BD", name: "Cherry" },
    { color: "#8DA765", specular: "#E2F2C9", name: "Pistachio" },
    { color: "#F4C430", specular: "#FFF5CD", name: "Yuzu" },
    { color: "#2B160F", specular: "#8F5E45", name: "85% Cru", goldLeaf: true },
    { color: "#D8C7A5", specular: "#FFFFFF", name: "Vanilla" },
    { color: "#6D537E", specular: "#E6D4F3", name: "Bergamot" },
    { color: "#E86F2D", specular: "#FFD0B0", name: "Passion" },
    { color: "#B48356", specular: "#FFE7D1", name: "Hazelnut" }
  ];

  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#180E09] to-[#0F0704] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,188,106,0.1),transparent_70%)] pointer-events-none" />

      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none transition-transform duration-500 hover:scale-[1.03]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1C1410" />
            <stop offset="100%" stopColor="#0B0604" />
          </linearGradient>

          <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BC6A" />
            <stop offset="50%" stopColor="#9E762E" />
            <stop offset="100%" stopColor="#E2BC6A" />
          </linearGradient>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="200" cy="265" rx="145" ry="16" fill="rgba(0,0,0,0.5)" filter="blur(8px)" />

        {/* Outer Luxury Rigid Box */}
        <rect
          x="70"
          y="40"
          width="260"
          height="220"
          rx="12"
          fill="url(#boxLidGrad)"
          stroke="url(#goldBorderGrad)"
          strokeWidth="2"
        />

        {/* Inner Velvet Tray Cavity */}
        <rect
          x="80"
          y="50"
          width="240"
          height="200"
          rx="8"
          fill="#130B07"
          stroke="#2A170F"
          strokeWidth="1.5"
        />

        {/* 9 Molded Bonbon Cavities */}
        {bonbons.map((bonbon, idx) => {
          const row = Math.floor(idx / 3);
          const col = idx % 3;
          const cx = 120 + col * 80;
          const cy = 84 + row * 66;

          return (
            <g key={idx}>
              {/* Paper fluted cup / recess */}
              <circle cx={cx} cy={cy + 3} r="27" fill="#0A0503" opacity="0.8" />
              <circle cx={cx} cy={cy} r="25" fill="#1C110C" stroke="#331E15" strokeWidth="1" />

              {/* Dome Bonbon with Mirror Glaze */}
              <circle cx={cx} cy={cy} r="22" fill={bonbon.color} />

              {/* Specular curved light reflection giving glossy finish */}
              <path
                d={`M ${cx - 14} ${cy - 8} Q ${cx - 6} ${cy - 16}, ${cx + 10} ${cy - 12}`}
                fill="none"
                stroke={bonbon.specular}
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.85"
                filter="blur(0.8px)"
              />
              <ellipse cx={cx + 10} cy={cy - 12} rx="2" ry="1.5" fill="#FFFFFF" opacity="0.95" />

              {/* Gold leaf fleck detail if designated */}
              {bonbon.goldLeaf && (
                <polygon
                  points={`${cx - 2},${cy + 2} ${cx + 4},${cy - 1} ${cx + 6},${cy + 5} ${cx},${cy + 6}`}
                  fill="#FBE49D"
                  stroke="#C99B30"
                  strokeWidth="0.5"
                />
              )}
            </g>
          );
        })}

        {/* Signature Gold Hot-Stamping Seal at Top Center */}
        <g transform="translate(200, 32)">
          <circle cx="0" cy="0" r="14" fill="#1B100B" stroke="#CCA04E" strokeWidth="1.5" />
          <text
            x="0"
            y="4"
            fill="#CCA04E"
            fontSize="10"
            fontFamily="serif"
            textAnchor="middle"
            fontWeight="bold"
          >
            É
          </text>
        </g>
      </svg>
    </div>
  );
}

export function DrinkingChocolateArtwork({ className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#180E09] to-[#0D0704] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(207,163,86,0.12),transparent_70%)] pointer-events-none" />

      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none transition-transform duration-500 hover:scale-[1.03]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EDE3D2" />
            <stop offset="60%" stopColor="#DFD1BD" />
            <stop offset="100%" stopColor="#C4B39A" />
          </linearGradient>

          <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A2617" />
            <stop offset="40%" stopColor="#2F160C" />
            <stop offset="100%" stopColor="#190B06" />
          </linearGradient>

          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2BC6A" />
            <stop offset="50%" stopColor="#FFF0C4" />
            <stop offset="100%" stopColor="#9C7328" />
          </linearGradient>
        </defs>

        {/* Ambient shadow */}
        <ellipse cx="200" cy="265" rx="130" ry="16" fill="rgba(0,0,0,0.5)" filter="blur(8px)" />

        {/* Saucer */}
        <ellipse cx="200" cy="245" rx="120" ry="24" fill="#D9CCB7" stroke="#BAAA90" strokeWidth="1.5" />
        <ellipse cx="200" cy="245" rx="80" ry="14" fill="#CBBBA1" />

        {/* Cup Handle */}
        <path
          d="M 270 145 C 315 145, 315 205, 260 215"
          fill="none"
          stroke="url(#cupGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 270 145 C 315 145, 315 205, 260 215"
          fill="none"
          stroke="#A8977F"
          strokeWidth="2"
        />

        {/* Ceramic Cup Body */}
        <path
          d="M 125 125 C 130 220, 160 235, 200 235 C 240 235, 270 220, 275 125 Z"
          fill="url(#cupGrad)"
          stroke="#BAAA90"
          strokeWidth="1.5"
        />

        {/* Cup Lip / Rim */}
        <ellipse cx="200" cy="125" rx="75" ry="22" fill="#D0BFAB" stroke="url(#goldRim)" strokeWidth="2.5" />

        {/* Rich Velvet Hot Chocolate Surface */}
        <ellipse cx="200" cy="127" rx="70" ry="19" fill="url(#liquidGrad)" />

        {/* Liquid reflection swirl */}
        <path
          d="M 160 125 Q 185 133, 215 126 T 255 129"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Chocolate Curls & Nibs on Top */}
        <g transform="translate(190, 122)">
          {/* Curl 1 */}
          <path d="M 0 0 C 8 -4, 14 2, 8 6 C 2 8, -4 4, 0 0" fill="#1C0E07" stroke="#482717" strokeWidth="1" />
          {/* Curl 2 */}
          <path d="M 16 3 C 22 -1, 26 5, 20 8" fill="none" stroke="#2B150A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Salt crystal speckles */}
          <circle cx="-15" cy="4" r="1.2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="28" cy="2" r="1" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Rising Aromatic Steam Spirals */}
        <g stroke="rgba(245,233,218,0.28)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M 175 105 Q 165 75, 185 50 T 175 25" />
          <path d="M 200 100 Q 215 70, 195 45 T 210 20" strokeWidth="2.5" />
          <path d="M 225 105 Q 235 80, 215 55 T 230 30" />
        </g>

        {/* Whole Roasted Cacao Nibs Scatter on Saucer */}
        <ellipse cx="115" cy="240" rx="6" ry="4" fill="#2E170E" />
        <ellipse cx="128" cy="245" rx="5" ry="3.5" fill="#3D1E12" />
        <ellipse cx="265" cy="242" rx="6" ry="4" fill="#25120B" />
      </svg>
    </div>
  );
}

export function CacaoPodArtwork({ className = "w-full h-full" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#180E09] to-[#0E0704] ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-[340px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="podGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9732B" />
            <stop offset="35%" stopColor="#A2461D" />
            <stop offset="70%" stopColor="#6C2314" />
            <stop offset="100%" stopColor="#3C110C" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667C3E" />
            <stop offset="100%" stopColor="#2E3F17" />
          </linearGradient>
        </defs>

        {/* Tree Branch */}
        <path
          d="M 50 70 Q 150 90, 350 65"
          fill="none"
          stroke="#42291C"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Botanical Leaves */}
        <path
          d="M 120 78 C 90 20, 160 0, 200 40 C 210 60, 180 85, 120 78 Z"
          fill="url(#leafGrad)"
          stroke="#1F2A10"
          strokeWidth="1"
        />
        <path d="M 120 78 Q 165 45, 200 40" fill="none" stroke="#879E58" strokeWidth="1.5" />

        <path
          d="M 260 72 C 310 30, 360 50, 340 100 C 310 130, 280 100, 260 72 Z"
          fill="url(#leafGrad)"
          stroke="#1F2A10"
          strokeWidth="1"
        />

        {/* Pod Stem Peduncle */}
        <path d="M 195 85 L 195 115" stroke="#3A2216" strokeWidth="8" strokeLinecap="round" />

        {/* Large Heirloom Cacao Pod */}
        <g transform="translate(195, 190) rotate(12)">
          {/* Main Pod Silhouette */}
          <path
            d="M 0 -75 C 45 -55, 60 0, 40 55 C 20 85, -20 85, -40 55 C -60 0, -45 -55, 0 -75 Z"
            fill="url(#podGrad)"
            stroke="#2E0E0A"
            strokeWidth="2"
            filter="drop-shadow(0 15px 25px rgba(0,0,0,0.6))"
          />

          {/* Deep Vertical Grooves / Ridges */}
          <path d="M 0 -70 Q 30 0, 0 75" fill="none" stroke="#250906" strokeWidth="3" opacity="0.75" />
          <path d="M 0 -70 Q -30 0, 0 75" fill="none" stroke="#250906" strokeWidth="3" opacity="0.75" />
          <path d="M 0 -70 Q 15 0, 0 75" fill="none" stroke="#DCA24C" strokeWidth="2" opacity="0.8" />
          <path d="M 0 -70 Q -15 0, 0 75" fill="none" stroke="#8D3517" strokeWidth="2" opacity="0.8" />

          {/* Golden Texture highlights on pod skin */}
          <circle cx="10" cy="-20" r="3" fill="#EAB65A" opacity="0.6" />
          <circle cx="16" cy="10" r="2.5" fill="#EAB65A" opacity="0.5" />
          <circle cx="-14" cy="-10" r="3" fill="#EAB65A" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Radar / Sensory Flavor Wheel Visual
 */
export function FlavorRadarVisual({ radar = { fruity: 80, floral: 70, roasted: 85, earthy: 60, acidity: 50 }, size = 160 }) {
  const categories = [
    { key: "fruity", label: "Fruity", angle: -90 },
    { key: "floral", label: "Floral", angle: -18 },
    { key: "roasted", label: "Roasted", angle: 54 },
    { key: "earthy", label: "Earthy", angle: 126 },
    { key: "acidity", label: "Bright", angle: 198 }
  ];

  const center = size / 2;
  const maxRadius = size * 0.38;

  const getCoordinates = (value, angleDeg) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angleRad);
    const y = center + r * Math.sin(angleRad);
    return { x, y };
  };

  const polygonPoints = categories
    .map(c => {
      const val = radar[c.key] || 50;
      const { x, y } = getCoordinates(val, c.angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background concentric rings */}
        {[0.33, 0.66, 1].map((scale, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={maxRadius * scale}
            fill="none"
            stroke="#2E1B14"
            strokeWidth="1"
            strokeDasharray={scale === 1 ? "none" : "2 2"}
          />
        ))}

        {/* Axis spokes */}
        {categories.map((c, i) => {
          const { x, y } = getCoordinates(100, c.angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#2E1B14"
              strokeWidth="1"
            />
          );
        })}

        {/* Polygon Area */}
        <polygon
          points={polygonPoints}
          fill="rgba(202, 160, 78, 0.28)"
          stroke="#CCA04E"
          strokeWidth="2"
        />

        {/* Point nodes */}
        {categories.map((c, i) => {
          const val = radar[c.key] || 50;
          const { x, y } = getCoordinates(val, c.angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill="#E2BC6A"
              stroke="#140C08"
              strokeWidth="1"
            />
          );
        })}

        {/* Labels */}
        {categories.map((c, i) => {
          const labelDist = maxRadius + 14;
          const angleRad = (c.angle * Math.PI) / 180;
          const lx = center + labelDist * Math.cos(angleRad);
          const ly = center + labelDist * Math.sin(angleRad);

          return (
            <text
              key={i}
              x={lx}
              y={ly + 3}
              fill="#DAC5B0"
              fontSize="9"
              fontFamily="sans-serif"
              textAnchor="middle"
              className="select-none uppercase tracking-wider"
            >
              {c.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
