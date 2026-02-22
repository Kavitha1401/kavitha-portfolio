// App.jsx
// Coordinates the character phase transitions:
//   'wave'     → shown during IntroOverlay
//   'glasses'  → immediately after intro dismisses (glasses drop in)
//   'keyboard' → 750ms later (keyboard + platform rise up)
//   'typing'   → 1250ms later (settle, start glow animation)
// heroReady (true after 1600ms) reveals the hero content.

import { useState } from 'react'
import { ThemeProvider } from './ThemeContext'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LightSwitch from './components/LightSwitch'
import NightSky from './components/NightSky'
import IntroOverlay from './components/IntroOverlay'
import CompanionCharacter from './components/CompanionCharacter'

export default function App() {
  const [introDone, setIntroDone]       = useState(false)
  const [charPhase, setCharPhase]       = useState('wave')

  const handleIntroDone = () => {
    // Step 1: glasses fall in
    setCharPhase('glasses')

    // Step 2: keyboard + platform rise
    setTimeout(() => setCharPhase('keyboard'), 750)

    // Step 3: settle into typing
    setTimeout(() => setCharPhase('typing'),   1250)

    // Step 4: reveal the rest of the hero
    setTimeout(() => setIntroDone(true),        1600)
  }

  return (
    <ThemeProvider>
      <Cursor />
      <NightSky />
      <LightSwitch />

      {/* Intro overlay — shown before hero */}
      {!introDone && <IntroOverlay onDone={handleIntroDone} />}

      {/* Main site — always mounted so scroll/layout is ready.
          Hero is visible as soon as charPhase advances (overlay fading out),
          rest of page reveals after introDone */}
      <div style={{ visibility: charPhase !== 'wave' ? 'visible' : 'hidden' }}>
        <Nav />
        {/* Pass charPhase so Hero can relay it to Character */}
        <Hero charPhase={charPhase} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Companion — only after full intro */}
      {introDone && <CompanionCharacter />}
    </ThemeProvider>
  )
}