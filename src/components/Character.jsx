export default function Character() {
  return (
    <svg viewBox="0 0 320 410" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8AABBF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="blushLeft" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blushRight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Long hair - back layer */}
      <path d="M92 172 Q75 210 78 290 Q86 318 108 322 Q100 275 104 240 Q100 205 100 178 Z" fill="#2C1810"/>
      <path d="M228 172 Q245 210 242 290 Q234 318 212 322 Q220 275 216 240 Q220 205 220 178 Z" fill="#2C1810"/>

      {/* Body – sage sweater */}
      <ellipse cx="160" cy="278" rx="76" ry="82" fill="#7A9E7E"/>
      {/* Ribbing lines */}
      {[252, 263, 274, 285, 296].map((y, i) => (
        <path key={i} d={`M${98+i} ${y} Q160 ${y-2} ${222-i} ${y}`}
          stroke="rgba(255,255,255,0.13)" strokeWidth="2" fill="none"/>
      ))}
      {/* Collar */}
      <ellipse cx="160" cy="232" rx="38" ry="14" fill="#6B9070"/>
      <ellipse cx="160" cy="224" rx="27" ry="10" fill="#D4956A"/>

      {/* Ears */}
      <ellipse cx="101" cy="180" rx="10" ry="14" fill="#D4956A"/>
      <ellipse cx="219" cy="180" rx="10" ry="14" fill="#D4956A"/>

      {/* Head */}
      <ellipse cx="160" cy="178" rx="60" ry="64" fill="#D4956A"/>

      {/* Hair top */}
      <ellipse cx="160" cy="122" rx="64" ry="28" fill="#2C1810"/>
      {/* Bangs */}
      <path d="M96 140 Q108 158 130 150 Q118 132 108 130 Z" fill="#2C1810"/>
      <path d="M224 140 Q212 158 190 150 Q202 132 212 130 Z" fill="#2C1810"/>
      <ellipse cx="148" cy="140" rx="23" ry="13" fill="#2C1810"/>
      <ellipse cx="174" cy="138" rx="21" ry="12" fill="#2C1810"/>
      {/* Hair highlight */}
      <path d="M128 122 Q156 112 178 120" stroke="rgba(107,66,38,0.28)" strokeWidth="3.5"
        fill="none" strokeLinecap="round"/>

      {/* Eyes */}
      <ellipse cx="141" cy="178" rx="12" ry="13" fill="white"/>
      <ellipse cx="179" cy="178" rx="12" ry="13" fill="white"/>
      <ellipse cx="143" cy="180" rx="8" ry="9" fill="#2C1810"/>
      <ellipse cx="181" cy="180" rx="8" ry="9" fill="#2C1810"/>
      {/* Shine */}
      <circle cx="146" cy="176" r="3.2" fill="white"/>
      <circle cx="184" cy="176" r="3.2" fill="white"/>
      {/* Eyelashes */}
      <path d="M129 170 Q132 164 137 167" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M137 165 Q140 158 145 162" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M146 163 Q149 157 153 161" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M168 163 Q171 157 175 161" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M177 164 Q180 157 185 161" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M186 166 Q190 160 193 164" stroke="#2C1810" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

      {/* Blush */}
      <ellipse cx="120" cy="194" rx="16" ry="9" fill="url(#blushLeft)"/>
      <ellipse cx="200" cy="194" rx="16" ry="9" fill="url(#blushRight)"/>

      {/* Nose */}
      <path d="M157 192 Q160 197 163 192" stroke="#A3432B" strokeWidth="1.5"
        strokeLinecap="round" fill="none" opacity="0.45"/>

      {/* Smile */}
      <path d="M147 203 Q160 217 173 203" stroke="#A3432B" strokeWidth="2.5"
        strokeLinecap="round" fill="none"/>
      <ellipse cx="160" cy="205" rx="8" ry="4" fill="#C8684A" opacity="0.2"/>

      {/* Arms */}
      <ellipse cx="88" cy="292" rx="21" ry="50" fill="#7A9E7E" transform="rotate(-10 88 292)"/>
      <ellipse cx="232" cy="292" rx="21" ry="50" fill="#7A9E7E" transform="rotate(10 232 292)"/>
      {/* Cuffs */}
      <ellipse cx="73" cy="334" rx="19" ry="11" fill="#6B9070" transform="rotate(-10 73 334)"/>
      <ellipse cx="247" cy="334" rx="19" ry="11" fill="#6B9070" transform="rotate(10 247 334)"/>
      {/* Hands */}
      <ellipse cx="65" cy="341" rx="16" ry="14" fill="#D4956A" transform="rotate(-10 65 341)"/>
      <ellipse cx="255" cy="341" rx="16" ry="14" fill="#D4956A" transform="rotate(10 255 341)"/>

      {/* Laptop */}
      <rect x="84" y="312" width="152" height="80" rx="12" fill="#2C1810"/>
      <rect x="89" y="317" width="142" height="68" rx="9" fill="#160c06"/>
      <rect x="89" y="317" width="142" height="68" rx="9" fill="url(#screenGlow)" opacity="0.25"/>
      {/* Code lines */}
      <rect x="99" y="326" width="58" height="4" rx="2" fill="#C8684A" opacity="0.9"/>
      <rect x="99" y="334" width="42" height="3" rx="1.5" fill="#7A9E7E" opacity="0.85"/>
      <rect x="105" y="341" width="50" height="3" rx="1.5" fill="#D4A843" opacity="0.8"/>
      <rect x="105" y="348" width="36" height="3" rx="1.5" fill="#8AABBF" opacity="0.8"/>
      <rect x="99" y="355" width="54" height="3" rx="1.5" fill="#C8684A" opacity="0.55"/>
      <rect x="105" y="362" width="40" height="3" rx="1.5" fill="#7A9E7E" opacity="0.55"/>
      {/* Blinking cursor */}
      <rect x="163" y="326" width="6" height="10" rx="1" fill="#C8684A" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite"/>
      </rect>

      {/* Sweater dress hem */}
      <path d="M84 340 Q78 382 100 396 Q130 408 160 408 Q190 408 220 396 Q242 382 236 340 Z"
        fill="#6B9070" opacity="0.65"/>

      {/* Speech bubble */}
      <rect x="210" y="90" width="108" height="62" rx="19" fill="white"
        stroke="rgba(107,66,38,0.1)" strokeWidth="1.5"/>
      <path d="M215 152 L200 170 L238 152" fill="white"
        stroke="rgba(107,66,38,0.1)" strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="226" y="113" fontFamily="DM Sans" fontSize="9" fill="#6B4226" fontWeight="500">
        Hi, I'm B Kavitha!
      </text>
      <text x="226" y="127" fontFamily="DM Sans" fontSize="8" fill="#C8684A">
        Full Stack Dev ✨
      </text>
      <text x="226" y="141" fontFamily="DM Sans" fontSize="8" fill="#7A9E7E" fontWeight="500">
        Let's build! 🌿
      </text>

      {/* Sparkles */}
      <path d="M44 148 L46 141 L48 148 L55 150 L48 152 L46 159 L44 152 L37 150 Z" fill="#D4A843">
        <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2.4s" repeatCount="indefinite"/>
      </path>
      <circle cx="64" cy="116" r="3" fill="#C8684A" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <path d="M269 122 L271 115 L273 122 L280 124 L273 126 L271 133 L269 126 L262 124 Z" fill="#7A9E7E">
        <animate attributeName="opacity" values="0.75;0.1;0.75" dur="3s" repeatCount="indefinite"/>
      </path>
      <circle cx="54" cy="88" r="2.2" fill="#E8A0A0" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="280" cy="158" r="2.5" fill="#D4A843" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.6s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}
