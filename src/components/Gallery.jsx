import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    key: 'short-film',
    title: 'Short Film Contest',
    tag: 'Social Media',
    gradient: 'from-red-600 via-rose-600 to-orange-500',
  },
  {
    key: 'punjabi-food',
    title: 'Punjabi Dhaba',
    tag: 'Food Promo',
    gradient: 'from-orange-500 via-amber-500 to-red-500',
  },
  {
    key: 'saree',
    title: 'Saree E‑Commerce',
    tag: 'E‑Commerce',
    gradient: 'from-pink-600 via-fuchsia-600 to-rose-600',
  },
]

function AnimatedReveal() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 grid place-items-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="text-center"
        >
          <div className="text-white font-semibold">Hover Preview</div>
          <motion.div
            initial={{ width: '20%' }}
            whileHover={{ width: '70%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="mx-auto mt-2 h-1 rounded-full bg-white/80"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function ProjectCard({ p, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      onClick={() => onOpen(p)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
    >
      <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${p.gradient}`}> 
        <AnimatedReveal />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <div className="text-white font-semibold">{p.title}</div>
          <div className="text-white/60 text-sm">{p.tag}</div>
        </div>
        <div className={`h-2 w-2 rounded-full bg-white/70`} />
      </div>
    </motion.button>
  )
}

export default function Gallery({ onOpenCase }) {
  return (
    <section id="work" className="relative w-full bg-[#0b0b0c] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-3xl sm:text-5xl font-extrabold">Curated for Impact.</h3>
        <p className="mt-3 text-white/70 max-w-2xl">My work isn't just aesthetic; it’s designed to function and deliver results.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.key} p={p} onOpen={onOpenCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
