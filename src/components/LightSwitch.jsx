import { useTheme } from '../ThemeContext'
import styles from './LightSwitch.module.css'

export default function LightSwitch() {
  const { isDark, setIsDark } = useTheme()

  return (
    <div className={styles.wrap}>

      {/* Outer wall plate — recessed mounting box */}
      <div className={`${styles.plate} ${isDark ? styles.plateNight : styles.plateDay}`}>

        <div className={styles.screwTop} />

        {/* Switch aperture — the hole in the plate the paddle sits in */}
        <div className={styles.aperture}>

          {/* The raised paddle — pivots on its centre axis */}
          <button
            className={`${styles.paddle} ${isDark ? styles.paddleOff : styles.paddleOn}`}
            onClick={() => setIsDark(d => !d)}
            aria-label={isDark ? 'Turn lights on' : 'Turn lights off'}
          >
            {/* Top face of paddle */}
            <span className={styles.paddleTop} />
            {/* Bottom face of paddle */}
            <span className={styles.paddleBottom} />
            {/* Left bevel side */}
            <span className={styles.bevelLeft} />
            {/* Right bevel side */}
            <span className={styles.bevelRight} />

            {/* Gloss sheen that shifts on pivot */}
            <span className={`${styles.sheen} ${isDark ? styles.sheenOff : styles.sheenOn}`} />

            {/* Tiny LED dot */}
            <span className={`${styles.led} ${isDark ? styles.ledOff : styles.ledOn}`} />
          </button>
        </div>

        <div className={styles.screwBottom} />
      </div>

      {/* Ambient wall glow when ON */}
      <div className={`${styles.wallGlow} ${isDark ? '' : styles.wallGlowVisible}`} />

      {/* Tiny label below */}
      <p className={styles.label}>{isDark ? 'off' : 'on'}</p>
    </div>
  )
}
