import React, { useState, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import CaseStudy from './components/CaseStudy'

export default function App() {
  const [open, setOpen] = useState(false)
  const [project, setProject] = useState(null)
  const workRef = useRef(null)

  const openCase = (p) => { setProject(p); setOpen(true) }
  const closeCase = () => setOpen(false)

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <Hero onCTAClick={scrollToWork} />
      <About />
      <Gallery onOpenCase={openCase} />
      <footer className="bg-[#0b0b0c] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h4 className="text-2xl font-bold">Let's talk about your next challenge.</h4>
          <p className="mt-2 text-white/70">Email: you@example.com</p>
        </div>
      </footer>

      <CaseStudy open={open} onClose={closeCase} project={project} />
    </div>
  )
}
