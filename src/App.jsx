// App.jsx
// After intro dismisses, hero immediately shows the focused/typing character.
// No wave → glasses → keyboard sequence needed.

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
  const [introDone, setIntroDone] = useState(false)

  const handleIntroDone = () => {
    setIntroDone(true)
  }

  return (
    <ThemeProvider>
      <Cursor />
      <NightSky />
      <LightSwitch />

      {/* Intro overlay — shown before hero */}
      {!introDone && <IntroOverlay onDone={handleIntroDone} />}

      {/* Main site — always mounted so scroll/layout is ready. */}
      <div style={{ visibility: introDone ? 'visible' : 'hidden' }}>
        <Nav />
        {/* Always show focused/typing character in hero */}
        <Hero charPhase="typing" />
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