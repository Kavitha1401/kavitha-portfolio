import { useState } from 'react'
import useReveal from './useReveal'
import styles from './Projects.module.css'

const projects = [
  {
    emoji: '💰',
    name: 'FinSight',
    desc: 'Enterprise project finance management platform with role-based access, AI-driven insights, forecasting, variance analysis, and 100% audit-logged operations across multiple Lines of Business.',
    highlight: '↓ 75% manual coordination · ↓ 65% analysis effort',
    stack: ['FastAPI', 'Asyncio', 'PostgreSQL', 'React', 'Azure OpenAI'],
    accent: 'linear-gradient(90deg, #C8684A, #D4A843)',
    detail: {
      problem: 'Finance operations across multiple business lines were siloed, requiring heavy manual coordination for forecasting, variance analysis, and audit compliance.',
      solution: 'Built a centralised FastAPI backend with role-based access, async API design, and AI-generated summaries via Azure OpenAI. Reduced manual touchpoints by 75%.',
      tech: 'Python, FastAPI, Asyncio, PostgreSQL, SQLAlchemy, React (Vite), Azure OpenAI, Git',
    },
  },
  {
    emoji: '🏆',
    name: 'RnR Platform DB Architecture',
    desc: 'Designed and built a scalable relational database architecture for an enterprise Rewards & Recognition system — multi-tier approval workflows, audit trails, and role-based data access.',
    highlight: 'Scalable schema · Full audit trail · Multi-tier workflows',
    stack: ['PostgreSQL', 'SQLAlchemy', 'Schema Design', 'Python'],
    accent: 'linear-gradient(90deg, #7A9E7E, #8AABBF)',
    detail: {
      problem: 'The existing recognition process was ad-hoc with no centralized tracking, making it impossible to audit or scale across teams.',
      solution: 'Designed normalized relational schemas supporting multi-tier nomination, approval, and reward tracking with full auditability and role-based data access.',
      tech: 'PostgreSQL, SQLAlchemy, Python, Schema Design',
    },
  },
  {
    emoji: '🧴',
    name: 'Skincare AI Recommender',
    desc: 'Image-based skincare recommendation engine using EfficientNet B0 — upload a photo, get personalized product suggestions. 86% model accuracy with a clean Flask frontend.',
    highlight: '86% model accuracy · Image-based input',
    stack: ['TensorFlow', 'EfficientNet B0', 'Keras', 'Flask'],
    accent: 'linear-gradient(90deg, #E8A0A0, #C8684A)',
    detail: {
      problem: "Skincare product selection is overwhelming, and recommendations from generic quizzes don't account for visible skin characteristics.",
      solution: 'Trained EfficientNet B0 on skin-type image data to classify and recommend products. Wrapped in a friendly Flask UI for easy upload-and-go usage.',
      tech: 'Python, TensorFlow, Keras, EfficientNet B0, Flask, NumPy, Pandas',
    },
  },
  {
    emoji: '🤖',
    name: 'DocChat — RAG Q&A Assistant',
    desc: 'A document-aware chatbot using Retrieval-Augmented Generation — upload any PDF and ask questions in natural language. Chunks, embeds, and retrieves context via pgvector before generating grounded answers.',
    highlight: 'Context-grounded answers · Zero hallucination design',
    stack: ['FastAPI', 'OpenAI', 'pgvector', 'ChromaDB', 'React'],
    accent: 'linear-gradient(90deg, #D4A843, #7A9E7E)',
    detail: {
      problem: "LLMs hallucinate when asked questions about proprietary or niche documents they haven't seen.",
      solution: 'Built a RAG pipeline: PDF chunking → embedding → vector storage in pgvector/ChromaDB → similarity retrieval → LLM answer grounded in retrieved context.',
      tech: 'FastAPI, OpenAI API, pgvector, ChromaDB, React (Vite), Python',
    },
  },
]

export default function Projects() {
  const ref = useReveal()
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className="section-label">Projects</div>
      <h2 className="section-title">Things I've Built</h2>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={p.name}
            className={`${styles.card} project-card reveal`}
            style={{ transitionDelay: `${i * 0.09}s` }}
            onClick={() => setOpen(p)}
          >
            <div className={styles.cardAccent} style={{ background: p.accent }} />
            <span className={styles.emoji}>{p.emoji}</span>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.highlight}>{p.highlight}</div>
            <div className="tech-stack">
              {p.stack.map(s => <span key={s} className="tech-pill">{s}</span>)}
            </div>
            <div className={styles.viewMore}>View details →</div>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setOpen(null)}>✕</button>
            <div className={styles.modalAccent} style={{ background: open.accent }} />
            <span className={styles.modalEmoji}>{open.emoji}</span>
            <h3 className={styles.modalTitle}>{open.name}</h3>

            <div className={styles.modalSection}>
              <div className={styles.modalLabel}>Problem</div>
              <p>{open.detail.problem}</p>
            </div>
            <div className={styles.modalSection}>
              <div className={styles.modalLabel}>Solution</div>
              <p>{open.detail.solution}</p>
            </div>
            <div className={styles.modalSection}>
              <div className={styles.modalLabel}>Tech Stack</div>
              <div className="tech-stack" style={{ marginTop: '8px' }}>
                {open.stack.map(s => <span key={s} className="tech-pill">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
