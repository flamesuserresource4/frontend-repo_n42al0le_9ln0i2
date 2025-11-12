import React from 'react'
import { motion } from 'framer-motion'

export default function CaseStudy({ open, onClose, project }) {
  if (!open || !project) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ borderRadius: 24, scale: 0.96, opacity: 0 }}
        animate={{ borderRadius: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#0b0b0c] text-white overflow-y-auto"
      >
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-4xl font-extrabold">{project.title} — Case Study</h3>
            <button onClick={onClose} className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">Close</button>
          </div>

          <div className="mt-8 grid gap-8">
            <section>
              <h4 className="text-xl font-bold">Challenge</h4>
              <p className="mt-2 text-white/70">Define the problem and outcomes expected. Audience, channel, constraints.</p>
            </section>
            <section>
              <h4 className="text-xl font-bold">Process</h4>
              <div className="mt-2 space-y-3">
                {[1,2,3,4].map(i => (
                  <motion.div key={i} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i*0.1 }} className="origin-left h-1 rounded bg-gradient-to-r from-red-500 to-orange-500" />
                ))}
                <p className="text-white/70">Key steps are literally drawn out as you scroll.</p>
              </div>
            </section>
            <section>
              <h4 className="text-xl font-bold">Outcome</h4>
              <p className="mt-2 text-white/90">The final design achieved its goal: Driving registrations and elevating brand presence.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
