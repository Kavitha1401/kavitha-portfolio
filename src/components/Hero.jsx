// Hero.jsx — accepts charPhase and passes it to Character for layered SVG transitions

import Character from './Character'
import styles from './Hero.module.css'

export default function Hero({ charPhase = 'typing' }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.left}>
        <div className={styles.charWrap}>
          {/* Character composites wave/focused/specs/keyboard/platform SVGs */}
          <Character phase={charPhase} />
          <div className={styles.shadow} />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.tag} style={{ animationDelay: '0.2s' }}>
          ✦ Available for opportunities
        </div>
        <h1 className={styles.name} style={{ animationDelay: '0.35s' }}>
        <em>B Kavitha</em>
        </h1>
        <p className={styles.title} style={{ animationDelay: '0.5s' }}>
          Full Stack &amp; Financial Systems Engineer
        </p>
        <p className={styles.tagline} style={{ animationDelay: '0.65s' }}>
          "I build systems that scale and make sense."
        </p>
        <a href="#projects" className={styles.cta} style={{ animationDelay: '0.8s' }}>
          View My Work
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <div className={styles.stats} style={{ animationDelay: '1s' }}>
          {[
            { num: '1.5+', label: 'Years Exp' },
            { num: '4+',   label: 'Projects' },
            { num: '9.36', label: 'CGPA' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  )
}