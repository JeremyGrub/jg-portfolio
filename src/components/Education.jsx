import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'City University of Seattle',
    year: '2024',
    icon: '🎓',
  },
  {
    degree: 'Java Full Stack Program',
    school: 'Coding Dojo',
    year: '2021',
    icon: '💻',
  },
  {
    degree: 'B.S. Forensic Science',
    school: 'Grand Canyon University',
    year: '2017',
    icon: '🔬',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-border to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            06 / Education
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            How I Got <span className="text-gradient">Here</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <FadeIn key={item.degree} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-forge-card border border-forge-border rounded-2xl p-6 hover:border-forge-orange transition-colors duration-300 group"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="font-mono text-xs text-forge-orange tracking-widest uppercase mb-2">{item.year}</div>
                <h3 className="text-lg font-bold text-forge-text group-hover:text-forge-orange transition-colors mb-1">
                  {item.degree}
                </h3>
                <p className="text-forge-muted text-sm">{item.school}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
