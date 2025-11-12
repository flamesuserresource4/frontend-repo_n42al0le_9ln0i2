import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function MagneticButton({ children, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-30, 30], [6, -6])
  const rotateY = useTransform(x, [-30, 30], [-6, 6])

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX / 6)
    y.set(relY / 6)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x, y, rotateX, rotateY }}
      className="relative px-6 py-3 rounded-full text-white font-semibold transition-colors focus:outline-none surface-card ring-base"
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full accent-gradient opacity-80 blur-md" />
    </motion.button>
  )
}

function KineticHeading({ className = '' }) {
  const controls = useAnimation()
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    async function seq() {
      // softer kinetic shake on load
      await controls.start({
        y: [0, -3, 3, -2, 2, -1, 1, 0],
        rotate: [0, -0.8, 0.8, -0.5, 0.5, -0.2, 0.2, 0],
        transition: { duration: 0.9, ease: 'easeInOut' }
      })
      setPlayed(true)
    }
    seq()
  }, [controls])

  return (
    <motion.span
      animate={controls}
      className={className}
      data-played={played}
    >
      R M Deeraj
    </motion.span>
  )
}

export default function Hero({ onCTAClick }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 14, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to improve contrast based on theme vars */}
      <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(to bottom, var(--veil-from), var(--veil-to))` }} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-28 sm:pt-36">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="opacity-90">I turn strategy into sight.</span>{' '}
          <KineticHeading className="inline accent-text" />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-base sm:text-lg opacity-70"
        >
          Succinctly states the value proposition.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          <MagneticButton onClick={onCTAClick}>Explore My Process</MagneticButton>
        </motion.div>
      </div>

      {/* Subtle particles/liquid motion suggestion: animated blur orbs (softened) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-10 h-24 w-24 rounded-full blur-3xl" style={{ background: 'rgba(124,152,255,0.15)' }} />
        <div className="absolute bottom-10 right-20 h-32 w-32 rounded-full blur-3xl" style={{ background: 'rgba(244,114,182,0.15)' }} />
      </div>
    </section>
  )
}
