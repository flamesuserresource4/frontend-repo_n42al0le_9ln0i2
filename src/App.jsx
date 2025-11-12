import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import CaseStudy from './components/CaseStudy'

export default function App() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState(null)
  const [theme, setTheme] = useState('light')

  // Persist theme in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '')
    localStorage.setItem('theme', theme)
  }, [theme])

  const openCase = (p) => { setProject(p); setOpen(true) }
  const closeCase = () => setOpen(false)

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Top nav with theme toggle */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:supports-[backdrop-filter]:bg-black/20 dark:bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div className="font-semibold">R M Deeraj</div>
          <button onClick={toggleTheme} className="relative rounded-full px-3 py-1 surface-card ring-base text-sm">
            {theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
        </div>
      </header>

      <Hero onCTAClick={scrollToWork} />
      <About />
      <Gallery onOpenCase={openCase} />
      <footer className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h4 className="text-2xl font-bold">Let's talk about your next challenge.</h4>
          <p className="mt-2 opacity-70">Email: you@example.com</p>
        </div>
      </footer>

      <CaseStudy open={open} onClose={closeCase} project={project} />
    </div>
  )
}
