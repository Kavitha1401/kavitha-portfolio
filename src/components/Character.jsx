// Character.jsx
// Composites the layered SVG assets:
//   wave.svg     — waving pose (intro only, hidden in hero)
//   focused.svg  — focused/typing pose (base body for hero)
//   specs.svg    — glasses layer (slides in after intro)
//   keyboard.svg — keyboard layer (rises up after specs)
//   platform.svg — desk platform under keyboard
//   bubble.svg   — speech bubble (shows during wave pose)
//
// Phases: 'wave' | 'glasses' | 'keyboard' | 'typing'
// The Hero always renders in 'typing' phase.

export default function Character({ phase = 'typing' }) {
  const isWave    = phase === 'wave'
  const hasGlasses = phase === 'glasses' || phase === 'keyboard' || phase === 'typing'
  const hasKeyboard = phase === 'keyboard' || phase === 'typing'
  const isTyping  = phase === 'typing'

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* ── WAVE POSE (only visible during intro 'wave' phase) ── */}
      <img
        src="/wave.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: isWave ? 1 : 0,
          transform: isWave ? 'scale(1)' : 'scale(0.92)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          pointerEvents: 'none',
        }}
      />

      {/* ── FOCUSED POSE (base body for hero phases) ── */}
      <img
        src="/focused.png"
        alt="Kavitha character — focused at keyboard"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: isWave ? 0 : 1,
          transform: isWave ? 'scale(0.94) translateY(8px)' : 'scale(1) translateY(0)',
          transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          pointerEvents: 'none',
        }}
      />

      {/* ── SPEECH BUBBLE (shown only during wave phase) ── */}
      <img
        src="/bubble.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-8%',
          right: '-12%',
          width: '52%',
          opacity: isWave ? 1 : 0,
          transform: isWave ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(-12px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />
    </div>
  )
}