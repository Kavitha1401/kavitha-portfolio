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

  return (
    <ThemeProvider>
      <Cursor />
      <NightSky />
      <LightSwitch />

      {/* Intro overlay — shown on first load */}
      {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}

      {/* Main site — always mounted so scroll works */}
      <div style={{ visibility: introDone ? 'visible' : 'hidden' }}>
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Companion — only after intro */}
      {introDone && <CompanionCharacter />}
    </ThemeProvider>
  )
}
