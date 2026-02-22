import { useState } from 'react'
import useReveal from './useReveal'
import styles from './Contact.module.css'

const FORMSPREE_URL = 'https://formspree.io/f/xdalwpqg'

const links = [
  { icon: '✉️', label: 'kavithareddy1401@gmail.com', href: 'mailto:kavithareddy1401@gmail.com' },
  { icon: '🐙', label: 'github.com/', href: 'https://github.com/Kavitha1401' },
  { icon: '💼', label: 'linkedin.com/', href: 'https://linkedin.com/in/b-kavitha' },
  { icon: '📱', label: '+91 86183 63350', href: 'tel:+918618363350' },
]

export default function Contact() {
  const ref = useReveal()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        e.target.reset()
        // Reset back to idle after 4 seconds
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.bg1} />
      <div className={styles.bg2} />

      <div className="section-label" style={{ '--sl-color': 'var(--mustard)' }}>
        <span style={{ color: 'var(--mustard)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--mustard)', borderRadius: '2px' }}/>
          Get in touch
        </span>
      </div>
      <h2 className="section-title" style={{ color: 'var(--warm-white)' }}>Let's Build Something</h2>

      <div className={styles.grid}>
        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Ada Lovelace" required />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="ada@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Tell me about your project or idea..." required />
          </div>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'idle'    && 'Send Message ✨'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent'    && '✓ Message Sent!'}
            {status === 'error'   && 'Something went wrong — try again'}
          </button>
        </form>

        <div className={`${styles.info} reveal`}>
          <p className={styles.intro}>
            "I build systems that scale and make sense — and I love collaborating with people who care about craft."
          </p>
          <div className={styles.links}>
            {links.map(l => (
              <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                <div className={styles.linkIcon}>{l.icon}</div>
                <span>{l.label}</span>
              </a>
            ))}
          </div>
          <div className={styles.lang}>
            <span className={styles.langLabel}>Languages</span>
            <span className={styles.langList}>English · Telugu · Kannada · Hindi</span>
          </div>
        </div>
      </div>
    </section>
  )
}