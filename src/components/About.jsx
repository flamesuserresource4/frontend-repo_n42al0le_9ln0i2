import React from 'react'
import { motion } from 'framer-motion'
import { PenTool, Image as ImageIcon, Film, Sparkles, Palette, Layers } from 'lucide-react'

const skills = [
  { name: 'Illustrator', Icon: PenTool, color: '#FF9A00' },
  { name: 'Photoshop', Icon: ImageIcon, color: '#31A8FF' },
  { name: 'Premiere Pro', Icon: Film, color: '#9999FF' },
  { name: 'After Effects', Icon: Sparkles, color: '#9999FF' },
  { name: 'CorelDraw', Icon: Palette, color: '#00C853' },
  { name: 'Canva', Icon: Layers, color: '#00C4CC' }
]

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const item = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.45 } }
  }

  return (
    <section className="relative w-full py-24" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold"
        >
          The Designer Behind the Work
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.035 } }
          }}
          className="mt-6 max-w-3xl leading-relaxed opacity-80"
        >
          {"I am a highly self-motivated team player with a mature, positive attitude and a passion to meet challenges in the ever-growing graphic design service industry.".split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: i * 0.028 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 opacity-80"
        >
          Design is how it works. My fluency across the Adobe Suite and more means I execute with precision.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {skills.map(({ name, Icon, color }, idx) => (
            <motion.div
              key={name}
              variants={item}
              className="group relative flex flex-col items-center justify-center rounded-xl surface-card p-6 backdrop-blur-sm ring-base"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 180, damping: 22, delay: idx * 0.08 }}
                className="grid place-items-center h-12 w-12 rounded-full"
                style={{ background: `${color}22` }}
              >
                <Icon size={28} color={color} />
              </motion.div>
              <div className="mt-3 text-sm opacity-80">{name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
