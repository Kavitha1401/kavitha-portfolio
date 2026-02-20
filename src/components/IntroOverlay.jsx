import { useEffect, useState } from 'react'
import styles from './IntroOverlay.module.css'

// Waving character SVG (simpler, expressive, wave pose)
function WavingCharacter() {
  return (
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" width="240" height="280">
      <defs>
        <radialGradient id="iBlushL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="iBlushR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Hair back */}
      <path d="M78 155 Q62 190 65 255 Q72 278 92 282 Q84 248 88 218 Q85 185 86 160 Z" fill="#2C1810"/>
      <path d="M202 155 Q218 190 215 255 Q208 278 188 282 Q196 248 192 218 Q195 185 194 160 Z" fill="#2C1810"/>

      {/* Body */}
      <ellipse cx="140" cy="248" rx="66" ry="72" fill="#7A9E7E"/>
      {[226,236,246,256,266].map((y,i)=>(
        <path key={i} d={`M${80+i} ${y} Q140 ${y-2} ${200-i} ${y}`} stroke="rgba(255,255,255,0.13)" strokeWidth="1.8" fill="none"/>
      ))}
      <ellipse cx="140" cy="206" rx="32" ry="12" fill="#6B9070"/>
      <ellipse cx="140" cy="200" rx="22" ry="9" fill="#D4956A"/>

      {/* Ears */}
      <ellipse cx="87" cy="162" rx="9" ry="12" fill="#D4956A"/>
      <ellipse cx="193" cy="162" rx="9" ry="12" fill="#D4956A"/>

      {/* Head */}
      <ellipse cx="140" cy="160" rx="54" ry="58" fill="#D4956A"/>

      {/* Hair top */}
      <ellipse cx="140" cy="108" rx="58" ry="26" fill="#2C1810"/>
      <path d="M84 126 Q96 142 116 135 Q104 118 94 116 Z" fill="#2C1810"/>
      <path d="M196 126 Q184 142 164 135 Q176 118 186 116 Z" fill="#2C1810"/>
      <ellipse cx="130" cy="124" rx="20" ry="12" fill="#2C1810"/>
      <ellipse cx="152" cy="122" rx="18" ry="11" fill="#2C1810"/>
      <path d="M110 108 Q136 98 158 106" stroke="rgba(107,66,38,0.28)" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Eyes — happy / squinting */}
      <path d="M120 160 Q128 153 136 160" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M148 160 Q156 153 164 160" stroke="#2C1810" strokeWidth="3" strokeLinecap="round" fill="none"/>

      {/* Blush */}
      <ellipse cx="105" cy="174" rx="14" ry="8" fill="url(#iBlushL)"/>
      <ellipse cx="175" cy="174" rx="14" ry="8" fill="url(#iBlushR)"/>

      {/* Big smile */}
      <path d="M122 183 Q140 200 158 183" stroke="#A3432B" strokeWidth="3" strokeLinecap="round" fill="none"/>

      {/* Left arm — raised and waving */}
      <g className="waveArm">
        <ellipse cx="218" cy="210" rx="18" ry="44" fill="#7A9E7E" transform="rotate(-55 218 210)"/>
        <ellipse cx="248" cy="178" rx="16" ry="12" fill="#D4956A" transform="rotate(-55 248 178)"/>
        {/* hand fingers hint */}
        <ellipse cx="255" cy="170" rx="8" ry="6" fill="#D4956A" transform="rotate(-60 255 170)"/>
        <ellipse cx="260" cy="178" rx="7" ry="5" fill="#D4956A" transform="rotate(-45 260 178)"/>
      </g>

      {/* Right arm — relaxed down */}
      <ellipse cx="62" cy="262" rx="17" ry="44" fill="#7A9E7E" transform="rotate(8 62 262)"/>
      <ellipse cx="55" cy="302" rx="14" ry="12" fill="#D4956A" transform="rotate(8 55 302)"/>

      {/* Dress hem */}
      <path d="M74 298 Q70 330 90 342 Q112 352 140 352 Q168 352 190 342 Q210 330 206 298 Z" fill="#6B9070" opacity="0.6"/>

      {/* Sparkles */}
      <path d="M30 80 L32 73 L34 80 L41 82 L34 84 L32 91 L30 84 L23 82 Z" fill="#D4A843">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.2s" repeatCount="indefinite"/>
      </path>
      <circle cx="52" cy="55" r="3" fill="#C8684A" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.7s" repeatCount="indefinite"/>
      </circle>
      <path d="M230 60 L232 53 L234 60 L241 62 L234 64 L232 71 L230 64 L223 62 Z" fill="#7A9E7E">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2.8s" repeatCount="indefinite"/>
      </path>
      <circle cx="215" cy="42" r="2.5" fill="#E8A0A0" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.9s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

export default function IntroOverlay({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter → wave → exit

  useEffect(() => {
    // After entering, wait, then allow dismiss
    const t1 = setTimeout(() => setPhase('wave'), 600)
    return () => clearTimeout(t1)
  }, [])

  // Scroll or click to dismiss
  useEffect(() => {
    const dismiss = () => {
      if (phase === 'wave') {
        setPhase('exit')
        setTimeout(onDone, 700)
      }
    }
    window.addEventListener('scroll', dismiss, { once: true })
    return () => window.removeEventListener('scroll', dismiss)
  }, [phase, onDone])

  const handleClick = () => {
    if (phase === 'wave') {
      setPhase('exit')
      setTimeout(onDone, 700)
    }
  }

  return (
    <div
      className={`${styles.overlay} ${styles[phase]}`}
      onClick={handleClick}
      role="button"
      aria-label="Click to enter"
    >
      {/* Blobs for atmosphere */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.content}>
        <div className={`${styles.charWrap} ${phase === 'wave' ? styles.waving : ''}`}>
          <WavingCharacter />
        </div>

        <div className={styles.textWrap}>
          <p className={styles.greeting}>Hi there! 👋</p>
          <h1 className={styles.name}>I'm <em>B Kavitha</em></h1>
          <p className={styles.sub}>Full Stack & Financial Systems Engineer</p>
        </div>

        <div className={styles.hint}>
          <span>Click or scroll to explore</span>
          <div className={styles.hintArrow} />
        </div>
      </div>
    </div>
  )
}
