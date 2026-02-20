import useReveal from './useReveal'
import styles from './Experience.module.css'

const projects = [
  {
    icon: '💼',
    title: 'FinSight – Project Finance Management Platform',
    bullets: [
      'Designed role-based FastAPI backend for project finance, forecasting, variance analysis & audit logging — centralizing finance ops across multiple Lines of Business, reducing manual coordination by ~75%.',
      'Implemented async I/O-bound APIs and optimized SQL queries for concurrent multi-LOB usage.',
      'Integrated AI-driven insights using LLMs to generate automated summaries, trends & risk indicators — reducing manual analysis effort by ~65%.',
      'Built activity tracking, email notifications, and freeze-period controls ensuring 100% auditability.',
    ],
    stack: ['Python', 'FastAPI', 'Asyncio', 'PostgreSQL', 'SQLAlchemy', 'React (Vite)', 'Azure OpenAI'],
  },
  {
    icon: '🏆',
    title: 'RnR System – Rewards & Recognition Platform',
    bullets: [
      'Designed and developed a scalable database architecture for an enterprise Rewards & Recognition system, supporting multi-tier recognition workflows across the organization.',
      'Modelled normalized schemas with audit trails, role-based data access, and efficient relational structures to handle high-volume nominations, approvals, and reward tracking.',
    ],
    stack: ['PostgreSQL', 'SQLAlchemy', 'Schema Design', 'Python'],
  },
  {
    icon: '🔒',
    title: 'Server Migration Project',
    bullets: [
      'Led FTP → SFTP migration and developed C# utilities for secure file handling — 100% secure data transfer compliance.',
      'Optimized SQL queries and validated migrated data with zero data integrity issues.',
    ],
    stack: ['C#', 'SQL', 'SFTP'],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className="section-label">Experience</div>
      <h2 className="section-title">Where I've Worked</h2>

      <div className={styles.card + ' reveal'}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.role}>Solution Developer</div>
            <div className={styles.company}>Tata Technologies Limited · Bangalore, India</div>
          </div>
          <div className={styles.date}>Aug 2024 – Present</div>
        </div>

        {projects.map((p) => (
          <div key={p.title} className={styles.project}>
            <h4>{p.icon} {p.title}</h4>
            <ul>
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tech-stack" style={{ marginTop: '12px' }}>
              {p.stack.map(s => <span key={s} className="tech-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
