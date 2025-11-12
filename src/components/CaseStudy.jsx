import React from 'react'
import { motion } from 'framer-motion'

export default function CaseStudy({ open, onClose, project }) {
  if (!open || !project) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onClose} />
      <motion.div
        initial={{ borderRadius: 24, scale: 0.98, opacity: 0 }}
        animate={{ borderRadius: 12, scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="absolute inset-4 md:inset-8 rounded-xl overflow-hidden"
        style={{ background: 'var(--bg)', color: 'var(--text)', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
      >
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl sm:text-4xl font-extrabold">{project.title} — Case Study</h3>
            <button onClick={onClose} className="rounded-full px-4 py-2 surface-card ring-base hover:opacity-80">Close</button>
          </div>

          <div className="mt-8 grid gap-8">
            <section>
              <h4 className="text-xl font-bold">Challenge</h4>
              <p className="mt-2 opacity-80">Define the problem and outcomes expected. Audience, channel, constraints.</p>
            </section>
            <section>
              <h4 className="text-xl font-bold">Process</h4>
              <div className="mt-2 space-y-3">
                {[1,2,3,4].map(i => (
                  <motion.div key={i} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.08 }} className="origin-left h-1 rounded accent-gradient" />
                ))}
                <p className="opacity-80">Key steps are literally drawn out as you scroll.</p>
              </div>
            </section>
            <section>
              <h4 className="text-xl font-bold">Outcome</h4>
              <p className="mt-2">The final design achieved its goal: Driving registrations and elevating brand presence.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
