import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    key: 'short-film',
    title: 'Short Film Contest',
    tag: 'Social Media',
    gradient: 'from-sky-400 via-indigo-400 to-fuchsia-400',
  },
  {
    key: 'punjabi-food',
    title: 'Punjabi Dhaba',
    tag: 'Food Promo',
    gradient: 'from-indigo-400 via-violet-400 to-sky-400',
  },
  {
    key: 'saree',
    title: 'Saree E‑Commerce',
    tag: 'E‑Commerce',
    gradient: 'from-fuchsia-400 via-pink-400 to-violet-400',
  },
]

function AnimatedReveal() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 grid place-items-center"
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-center"
        >
          <div className="font-semibold" style={{ color: 'var(--text)' }}>Hover Preview</div>
          <motion.div
            initial={{ width: '20%' }}
            whileHover={{ width: '70%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="mx-auto mt-2 h-1 rounded-full"
            style={{ background: 'var(--text)', opacity: 0.7 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function ProjectCard({ p, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      onClick={() => onOpen(p)}
      className="group relative overflow-hidden rounded-2xl surface-card ring-base backdrop-blur-sm"
    >
      <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${p.gradient}`}> 
        <AnimatedReveal />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="font-semibold" style={{ color: 'var(--text)' }}>{p.title}</div>
          <div className="text-sm opacity-60" style={{ color: 'var(--text)' }}>{p.tag}</div>
        </div>
        <div className={`h-2 w-2 rounded-full`} style={{ background: 'var(--text)', opacity: 0.7 }} />
      </div>
    </motion.button>
  )
}

export default function Gallery({ onOpenCase }) {
  return (
    <section id="work" className="relative w-full py-24" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold">Curated for Impact.</h3>
        <p className="mt-3 max-w-2xl opacity-70">My work isn't just aesthetic; it’s designed to function and deliver results.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.key} p={p} onOpen={onOpenCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
