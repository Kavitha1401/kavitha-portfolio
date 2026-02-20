import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 90)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
