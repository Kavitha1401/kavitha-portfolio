// IntroOverlay.jsx
// Phase flow: 'enter' → 'wave' → (user clicks/scrolls) → 'exit'
// On exit: fires onDone(phase) so App can sequence glasses/keyboard transitions
//
// Uses wave.svg + bubble.svg directly as <img> for the intro character.

import { useEffect, useState } from 'react'
import styles from './IntroOverlay.module.css'

export default function IntroOverlay({ onDone }) {
  const [phase, setPhase] = useState('enter')

  // Fade in
  useEffect(() => {
    const t = setTimeout(() => setPhase('wave'), 80)
    return () => clearTimeout(t)
  }, [])

  // Dismiss handler
  const dismiss = () => {
    if (phase !== 'wave') return
    setPhase('exit')
    setTimeout(() => onDone(), 700)
  }

  // Scroll dismisses too
  useEffect(() => {
    if (phase !== 'wave') return
    window.addEventListener('scroll', dismiss, { once: true, passive: true })
    return () => window.removeEventListener('scroll', dismiss)
  }, [phase])

  return (
    <div
      className={`${styles.overlay} ${styles[phase]}`}
      onClick={dismiss}
      role="button"
      aria-label="Click to enter portfolio"
    >
      {/* Atmosphere blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.content}>

        {/* Character area — wave pose + speech bubble */}
        <div className={`${styles.charWrap} ${phase === 'wave' ? styles.waving : ''}`}>

          {/* Speech bubble — positioned above/right of character */}
          <img
            src="/bubble.svg"
            alt=""
            aria-hidden="true"
            className={styles.bubble}
            style={{
              opacity: phase === 'wave' ? 1 : 0,
              transform: phase === 'wave' ? 'scale(1) translateY(0)' : 'scale(0.75) translateY(-10px)',
              transition: 'opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s',
            }}
          />

          {/* Wave character */}
          <img
            src="/wave.svg"
            alt="Kavitha waving hello"
            className={styles.charImg}
          />
        </div>

        {/* Text */}
        <div className={styles.textWrap}>
          <p className={styles.greeting}>Hi there! 👋</p>
          <h1 className={styles.name}>I'm <em>B Kavitha</em></h1>
          <p className={styles.sub}>Full Stack &amp; Financial Systems Engineer</p>
        </div>

        {/* Hint */}
        <div className={styles.hint}>
          <span>Click or scroll to explore</span>
          <div className={styles.hintArrow} />
        </div>
      </div>
    </div>
  )
}