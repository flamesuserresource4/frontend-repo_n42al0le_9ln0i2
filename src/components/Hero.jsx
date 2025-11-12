import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function MagneticButton({ children, onClick }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-40, 40], [8, -8])
  const rotateY = useTransform(x, [-40, 40], [-8, 8])

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX / 4)
    y.set(relY / 4)
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
      className="relative px-6 py-3 rounded-full bg-orange-500/90 text-white font-semibold shadow-[0_10px_30px_rgba(249,115,22,0.5)] transition-colors hover:bg-orange-500 focus:outline-none"
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/30 to-red-500/30 blur-md" />
    </motion.button>
  )
}

function KineticHeading({ className = '' }) {
  const controls = useAnimation()
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    async function seq() {
      // kinetic shake on load, then settle
      await controls.start({
        y: [0, -6, 6, -4, 4, -2, 2, 0],
        rotate: [0, -1.5, 1.5, -1, 1, -0.5, 0.5, 0],
        transition: { duration: 1.2, ease: 'easeInOut' }
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
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#0b0b0c] text-white">
      {/* Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-28 sm:pt-36">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          <span className="text-white/90">I turn strategy into sight.</span>{' '}
          <KineticHeading className="inline bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent" />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          className="max-w-2xl text-base sm:text-lg text-white/70"
        >
          Succinctly states the value proposition.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          <MagneticButton onClick={onCTAClick}>Explore My Process</MagneticButton>
        </motion.div>
      </div>

      {/* Subtle particles/liquid motion suggestion: animated blur orbs that fade out on first scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
