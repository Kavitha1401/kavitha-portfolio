import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './CompanionCharacter.module.css'

const KAVITHA_CONTEXT = `
You are a friendly AI assistant representing B Kavitha's portfolio. Answer questions about her as if you know her well, in a warm and conversational tone. Keep answers concise (2-4 sentences). Use "she" pronouns.

ABOUT B KAVITHA:
- Full Stack Engineer at Tata Technologies Limited (TTL), Bangalore, since Aug 2024
- 1.5+ years of experience building scalable systems
- CGPA: 9.36 from Bangalore Institute of Technology, B.E. in Information Science & Engineering (2020-2024)
- Tagline: "I build systems that scale and make sense."
- Available for opportunities

SKILLS:
- Backend: Python, FastAPI, Flask, Django, Asyncio, RESTful APIs, C#, Java
- Frontend: React (Vite), JavaScript, HTML, CSS
- Databases: PostgreSQL, MySQL, SQLite, SQLAlchemy, pgvector, ChromaDB, Schema Design
- AI/ML: Azure OpenAI, LLMs, RAG, Prompt Engineering, TensorFlow, scikit-learn, Pandas, NumPy
- DevOps: Docker, GitHub Actions, AWS, Azure, Git
- Data: Power BI, Tableau, Excel/DAX, Jupyter

PROJECTS:
1. FinSight - Enterprise project finance platform with role-based FastAPI backend, LLM insights via Azure OpenAI, reduced manual coordination by 75% and analysis effort by 65%
2. RnR Platform DB Architecture - Designed scalable relational database for Rewards & Recognition system with multi-tier workflows and audit trails
3. Skincare AI Recommender - Image-based recommendation using EfficientNet B0, 86% accuracy
4. DocChat RAG Assistant - Document Q&A chatbot using RAG pipeline with pgvector/ChromaDB
5. Server Migration - Led FTP to SFTP migration with C# utilities, 100% secure data transfer

AWARDS:
- Champion of the Month at TTL
- Best Student Award - LIC
- 1st Prize - Embedded Systems Competition

CONTACT:
- Email: kavithareddy1401@gmail.com
- GitHub: github.com/B-Kavitha
- LinkedIn: linkedin.com/in/b-kavitha
- Phone: +91 86183 63350

Languages: English (Professional), Telugu (Native), Kannada (Fluent), Hindi (Conversational)

If asked something you don't know about her, say you're not sure but suggest they reach out via email. Stay friendly and enthusiastic about her work!
`

// ── CHATBOT PANEL ──────────────────────────────────
function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Kavitha's assistant 🌿 Ask me anything about her experience, projects, or skills!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = useCallback(async () => {
    const q = input.trim()
    if (!q || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: q }])
    setLoading(true)

    try {
      const history = messages.map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text
      }))
      history.push({ role: 'user', content: q })

      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: KAVITHA_CONTEXT,
          messages: history,
        }),
      })
      const data = await res.json()
      const text = data.content?.map(b => b.text || '').join('') || "Hmm, I'm not sure about that! Try reaching out to Kavitha directly at kavithareddy1401@gmail.com 🌿"
      setMessages(prev => [...prev, { role: 'assistant', text }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: "Oops! Something went wrong. Please try asking again 🌿" }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, messages])

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }

  const suggestions = ["What are her top skills?", "Tell me about FinSight", "Is she open to work?"]

  return (
    <div className={styles.chatPanel}>
      <div className={styles.chatHeader}>
        <div className={styles.chatHeaderLeft}>
          <div className={styles.chatDot} />
          <span>Ask about Kavitha</span>
        </div>
        <button className={styles.chatClose} onClick={onClose}>✕</button>
      </div>

      <div className={styles.chatMessages}>
        {messages.map((m, i) => (
          <div key={i} className={`${styles.msg} ${m.role === 'user' ? styles.msgUser : styles.msgBot}`}>
            {m.text}
          </div>
        ))}
        {loading && (
          <div className={`${styles.msg} ${styles.msgBot} ${styles.msgThinking}`}>
            <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {messages.length === 1 && (
        <div className={styles.suggestions}>
          {suggestions.map(s => (
            <button key={s} className={styles.suggestion} onClick={() => setInput(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className={styles.chatInput}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Ask anything about Kavitha..."
          disabled={loading}
        />
        <button onClick={send} disabled={loading || !input.trim()} className={styles.sendBtn}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

// ── MAIN COMPANION ──────────────────────────────────
export default function CompanionCharacter() {
  const [mode, setMode] = useState('hidden')
  const [chatOpen, setChatOpen] = useState(false)
  const [waving, setWaving] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    heroRef.current = document.getElementById('hero')

    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const heroBottom = hero.getBoundingClientRect().bottom
      if (heroBottom > 80) {
        setMode('hidden')
      } else {
        setMode('corner')
      }
    }

    const t = setTimeout(() => {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }, 200)

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Brief wave when companion first appears
  useEffect(() => {
    if (mode !== 'corner' || chatOpen) return
    setWaving(true)
    const t = setTimeout(() => setWaving(false), 2200)
    return () => clearTimeout(t)
  }, [mode, chatOpen])

  const handleCornerClick = () => {
    if (mode !== 'corner') return
    setChatOpen(o => !o)
  }

  if (mode === 'hidden') return null

  // Show wave.svg briefly on appear, then focused.png
  const imgSrc = waving ? '/wave.svg' : '/focused.png'

  return (
    <div className={styles.corner}>
      {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}

      <button
        className={`${styles.companionBtn} ${chatOpen ? styles.companionBtnActive : ''}`}
        onClick={handleCornerClick}
        aria-label="Open chat with Kavitha's assistant"
      >
        {/* Bubble sits above/beside the character */}
        {!chatOpen && (
          <div className={styles.companionBubble}>
            Ask me anything!
          </div>
        )}

        <div className={styles.companionChar}>
          <img
            src={imgSrc}
            alt="Kavitha character"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </button>
    </div>
  )
}