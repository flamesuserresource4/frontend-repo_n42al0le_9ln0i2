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
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }
  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } }
  }

  return (
    <section className="relative w-full bg-[#0b0b0c] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
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
            show: {
              transition: { staggerChildren: 0.04 }
            }
          }}
          className="mt-6 max-w-3xl leading-relaxed text-white/70"
        >
          {"I am a highly self-motivated team player with a mature, positive attitude and a passion to meet challenges in the ever-growing graphic design service industry.".split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-white/80"
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
              className="group relative flex flex-col items-center justify-center rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 220, damping: 18, delay: idx * 0.08 }}
                className="grid place-items-center h-12 w-12 rounded-full"
                style={{ background: `${color}22` }}
              >
                <Icon size={28} color={color} />
              </motion.div>
              <div className="mt-3 text-sm text-white/80">{name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
