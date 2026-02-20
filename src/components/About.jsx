import useReveal from './useReveal'
import styles from './About.module.css'

const highlights = [
  { icon: '🤖', title: 'AI & GenAI Integration', desc: 'LLMs, RAG pipelines, vector databases (pgvector, ChromaDB), Azure OpenAI — building intelligent features that reduce manual work.' },
  { icon: '⚡', title: 'Async Backend Systems', desc: 'FastAPI with asyncio, optimized SQL queries, and I/O-bound API design for high concurrency and responsiveness.' },
  { icon: '🗄️', title: 'Database Architecture', desc: 'Designing scalable schemas, query optimization, vector stores, and audit-proof data models that grow with the product.' },
  { icon: '🌐', title: 'End-to-End Delivery', desc: 'From architecture decisions to cloud deployment — owning full cycles with React (Vite), Docker, and GitHub Actions.' },
]

const awards = [
  { icon: '🏆', label: 'Champion of the Month — TTL' },
  { icon: '🥇', label: 'Best Student Award — LIC' },
  { icon: '🎖️', label: '1st Prize — Embedded Systems Competition' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="section-label">About me</div>
      <h2 className="section-title">Who I Am</h2>

      <div className={styles.grid}>
        <div className={`${styles.bio} reveal`}>
          <p>I'm a full-stack developer with 1.5+ years of experience crafting scalable systems — from async APIs to AI-driven dashboards. I love the intersection of thoughtful engineering and meaningful impact.</p>
          <p>At Tata Technologies, I built FinSight — a finance management platform that reduced manual coordination by 75% and integrated LLMs to surface insights automatically. I care deeply about software that actually helps people.</p>
          <p>My background spans FastAPI backends, React frontends, PostgreSQL databases, and GenAI integrations. I'm comfortable taking projects from idea to production.</p>

          <div className={styles.eduCard}>
            <div>
              <div className={styles.eduName}>Bangalore Institute of Technology</div>
              <div className={styles.eduSub}>B.E – Information Science &amp; Engineering · 2020 – 2024</div>
            </div>
            <div className={styles.cgpaWrap}>
              <div className={styles.cgpa}>9.36</div>
              <div className={styles.cgpaLabel}>CGPA</div>
            </div>
          </div>

          <div className={styles.awardsRow}>
            {awards.map(a => (
              <div key={a.label} className={`${styles.awardPill} award-pill`}>
                <span>{a.icon}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h, i) => (
            <div key={h.title} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <h4>{h.icon} {h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
