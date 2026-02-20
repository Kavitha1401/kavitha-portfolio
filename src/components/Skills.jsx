import useReveal from './useReveal'
import styles from './Skills.module.css'

const categories = [
  {
    icon: '⚙️',
    color: 'rgba(200,104,74,0.11)',
    title: 'Backend & Frameworks',
    textColor: 'var(--rust)',
    border: 'rgba(200,104,74,0.18)',
    items: ['FastAPI', 'Flask', 'Django', 'Asyncio', 'RESTful APIs', 'Python', 'C#', 'Java'],
  },
  {
    icon: '🎨',
    color: 'rgba(122,158,126,0.14)',
    title: 'Frontend',
    textColor: 'var(--sage)',
    border: 'rgba(122,158,126,0.22)',
    items: ['React (Vite)', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: '🗄️',
    color: 'rgba(212,168,67,0.14)',
    title: 'Database',
    textColor: '#8a6a1a',
    border: 'rgba(212,168,67,0.22)',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'pgvector', 'ChromaDB', 'Schema Design', 'Query Optimization'],
  },
  {
    icon: '🤖',
    color: 'rgba(138,171,191,0.14)',
    title: 'AI / ML & GenAI',
    textColor: '#4a7a9b',
    border: 'rgba(138,171,191,0.26)',
    items: ['Azure OpenAI', 'LLMs', 'RAG', 'Prompt Engineering', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    icon: '☁️',
    color: 'rgba(232,160,160,0.18)',
    title: 'DevOps & Cloud',
    textColor: '#a35050',
    border: 'rgba(232,160,160,0.28)',
    items: ['Docker', 'GitHub Actions', 'AWS', 'Azure', 'Git', 'Postman', 'Pytest'],
  },
  {
    icon: '📊',
    color: 'rgba(107,66,38,0.09)',
    title: 'Data & Analytics',
    textColor: 'var(--brown)',
    border: 'rgba(107,66,38,0.14)',
    items: ['Power BI', 'Tableau', 'Excel / DAX', 'Jupyter', 'SQL'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className="section-label">Technical Skills</div>
      <h2 className="section-title">What I Work With</h2>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`${styles.category} skill-category reveal`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className={styles.catHeader}>
              <div className={styles.catIcon} style={{ background: cat.color }}>
                {cat.icon}
              </div>
              <div className={styles.catTitle}>{cat.title}</div>
            </div>
            <div className={styles.items}>
              {cat.items.map(item => (
                <span
                  key={item}
                  className={styles.item}
                  style={{
                    background: cat.color,
                    color: cat.textColor,
                    border: `1px solid ${cat.border}`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
