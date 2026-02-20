import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(id => document.getElementById(id)).filter(Boolean)
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>BK.</div>
      <ul className={styles.links}>
        {links.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? styles.active : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
