import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './CompanionCharacter.module.css'

// Kavitha's full context for the chatbot
const KAVITHA_CONTEXT = `
You are a friendly AI assistant representing B Kavitha's portfolio. Answer questions about her as if you know her well, in a warm and conversational tone. Keep answers concise (2-4 sentences). Use "she" pronouns.

ABOUT B KAVITHA:
- Full Stack & Financial Systems Engineer at Tata Technologies Limited (TTL), Bangalore, since Aug 2024
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

// Mini character for companion mode
function MiniCharacter({ mood }) {
  // mood: 'idle' | 'thinking' | 'talking' | 'wave'
  const eyeY = mood === 'thinking' ? 138 : 140
  const mouthPath = mood === 'talking'
    ? 'M118 158 Q130 170 142 158'
    : mood === 'thinking'
    ? 'M118 158 Q130 162 142 160'
    : 'M118 158 Q130 168 142 158'

  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="mBlushL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="mBlushR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8A0A0" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#E8A0A0" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Hair back */}
      <path d="M62 115 Q50 138 52 185 Q58 200 72 203 Q66 178 68 160 Q66 138 66 118Z" fill="#2C1810"/>
      <path d="M138 115 Q150 138 148 185 Q142 200 128 203 Q134 178 132 160 Q134 138 134 118Z" fill="#2C1810"/>

      {/* Body */}
      <ellipse cx="100" cy="190" rx="48" ry="52" fill="#7A9E7E"/>
      <ellipse cx="100" cy="162" rx="24" ry="10" fill="#6B9070"/>
      <ellipse cx="100" cy="157" rx="17" ry="7" fill="#D4956A"/>

      {/* Ears */}
      <ellipse cx="63" cy="120" rx="7" ry="10" fill="#D4956A"/>
      <ellipse cx="137" cy="120" rx="7" ry="10" fill="#D4956A"/>

      {/* Head */}
      <ellipse cx="100" cy="120" rx="40" ry="43" fill="#D4956A"/>

      {/* Hair */}
      <ellipse cx="100" cy="83" rx="43" ry="20" fill="#2C1810"/>
      <ellipse cx="88" cy="90" rx="16" ry="9" fill="#2C1810"/>
      <ellipse cx="113" cy="88" rx="14" ry="8" fill="#2C1810"/>

      {/* Eyes */}
      {mood === 'thinking' ? (
        <>
          <ellipse cx="86" cy={eyeY} rx="8" ry="9" fill="white"/>
          <ellipse cx="114" cy={eyeY} rx="8" ry="9" fill="white"/>
          <ellipse cx="88" cy={eyeY+1} rx="5" ry="6" fill="#2C1810"/>
          <ellipse cx="116" cy={eyeY+1} rx="5" ry="6" fill="#2C1810"/>
          <circle cx="90" cy={eyeY-1} r="2" fill="white"/>
          <circle cx="118" cy={eyeY-1} r="2" fill="white"/>
          {/* thinking eyebrow */}
          <path d="M80 130 Q87 125 94 128" stroke="#2C1810" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </>
      ) : (
        <>
          <ellipse cx="86" cy={eyeY} rx="8" ry="9" fill="white"/>
          <ellipse cx="114" cy={eyeY} rx="8" ry="9" fill="white"/>
          <ellipse cx="88" cy={eyeY+1} rx="5" ry="6" fill="#2C1810"/>
          <ellipse cx="116" cy={eyeY+1} rx="5" ry="6" fill="#2C1810"/>
          <circle cx="90" cy={eyeY-1} r="2" fill="white"/>
          <circle cx="118" cy={eyeY-1} r="2" fill="white"/>
        </>
      )}

      {/* Eyelashes */}
      <path d="M78 132 Q80 127 84 130" stroke="#2C1810" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M84 130 Q86 124 90 128" stroke="#2C1810" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M112 130 Q115 124 118 128" stroke="#2C1810" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M119 131 Q122 126 125 130" stroke="#2C1810" strokeWidth="1.4" strokeLinecap="round" fill="none"/>

      {/* Blush */}
      <ellipse cx="74" cy="150" rx="11" ry="7" fill="url(#mBlushL)"/>
      <ellipse cx="126" cy="150" rx="11" ry="7" fill="url(#mBlushR)"/>

      {/* Mouth */}
      <path d={mouthPath} stroke="#A3432B" strokeWidth="2.2" strokeLinecap="round" fill="none"/>

      {/* Arms */}
      {mood === 'wave' ? (
        // waving arm raised
        <>
          <ellipse cx="48" cy="190" rx="14" ry="34" fill="#7A9E7E" transform="rotate(10 48 190)"/>
          <ellipse cx="43" cy="222" rx="12" ry="10" fill="#D4956A" transform="rotate(10 43 222)"/>
          <ellipse cx="148" cy="180" rx="14" ry="32" fill="#7A9E7E" transform="rotate(-50 148 180)"/>
          <ellipse cx="170" cy="158" rx="12" ry="9" fill="#D4956A" transform="rotate(-50 170 158)"/>
        </>
      ) : (
        <>
          <ellipse cx="48" cy="190" rx="14" ry="34" fill="#7A9E7E" transform="rotate(8 48 190)"/>
          <ellipse cx="43" cy="222" rx="12" ry="10" fill="#D4956A" transform="rotate(8 43 222)"/>
          <ellipse cx="152" cy="190" rx="14" ry="34" fill="#7A9E7E" transform="rotate(-8 152 190)"/>
          <ellipse cx="157" cy="222" rx="12" ry="10" fill="#D4956A" transform="rotate(-8 157 222)"/>
        </>
      )}

      {/* Dress hem */}
      <path d="M52 222 Q48 242 64 250 Q82 258 100 258 Q118 258 136 250 Q152 242 148 222 Z" fill="#6B9070" opacity="0.6"/>

      {/* Thinking dots */}
      {mood === 'thinking' && (
        <g>
          <circle cx="155" cy="100" r="4" fill="var(--terracotta, #C8684A)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0s" repeatCount="indefinite"/>
          </circle>
          <circle cx="168" cy="90" r="4" fill="var(--terracotta, #C8684A)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0.27s" repeatCount="indefinite"/>
          </circle>
          <circle cx="181" cy="80" r="4" fill="var(--terracotta, #C8684A)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.8s" begin="0.54s" repeatCount="indefinite"/>
          </circle>
        </g>
      )}
    </svg>
  )
}

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
            <button key={s} className={styles.suggestion} onClick={() => { setInput(s); }}>
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
  const [mode, setMode] = useState('hidden') // hidden | hero | corner
  const [chatOpen, setChatOpen] = useState(false)
  const [mood, setMood] = useState('idle')
  const heroRef = useRef(null)

  useEffect(() => {
    // Find hero section
    heroRef.current = document.getElementById('hero')

    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const heroBottom = hero.getBoundingClientRect().bottom
      const heroTop = hero.getBoundingClientRect().top

      if (heroTop > 100) {
        setMode('hidden')
      } else if (heroBottom > 80) {
        setMode('hero')
      } else {
        setMode('corner')
      }
    }

    // Delay so intro overlay has time to go
    const t = setTimeout(() => {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }, 200)

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Mood cycling when corner idle
  useEffect(() => {
    if (mode !== 'corner' || chatOpen) return
    setMood('wave')
    const t1 = setTimeout(() => setMood('idle'), 2000)
    return () => clearTimeout(t1)
  }, [mode, chatOpen])

  const handleCornerClick = () => {
    if (mode !== 'corner') return
    setChatOpen(o => !o)
    setMood(chatOpen ? 'idle' : 'wave')
  }

  if (mode === 'hidden') return null

  return (
    <>
      {/* Corner companion */}
      {mode === 'corner' && (
        <div className={styles.corner}>
          {chatOpen && <ChatPanel onClose={() => { setChatOpen(false); setMood('idle') }} />}

          <button
            className={`${styles.companionBtn} ${chatOpen ? styles.companionBtnActive : ''}`}
            onClick={handleCornerClick}
            aria-label="Open chat with Kavitha's assistant"
          >
            <div className={styles.companionChar}>
              <MiniCharacter mood={chatOpen ? 'talking' : mood} />
            </div>
            {!chatOpen && (
              <div className={styles.bubble}>
                <span>Ask me anything!</span>
                <div className={styles.bubbleTail} />
              </div>
            )}
          </button>
        </div>
      )}
    </>
  )
}
