import { useTheme } from '../ThemeContext'

const STARS = Array.from({ length: 130 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.4 + 0.5,
  duration: (Math.random() * 3 + 1.8).toFixed(1),
  delay: (Math.random() * 5).toFixed(1),
}))

const SHOOTING = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  x: 15 + Math.random() * 55,
  y: 4 + Math.random() * 28,
  delay: (6 + i * 5 + Math.random() * 3).toFixed(1),
}))

export default function NightSky() {
  return (
    <div className="stars-layer">
      {STARS.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
      {SHOOTING.map(s => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            '--delay': `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
