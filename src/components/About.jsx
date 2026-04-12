import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

const stats = [
  { value: '3+', label: 'Years Engineering' },
  { value: '5+', label: 'Years in Forensics' },
  { value: 'M.S.', label: 'Computer Science' },
  { value: '2', label: 'Live Products' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            01 / About
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight">
            Two Worlds,<br />
            <span className="text-gradient">One Engineer.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-forge-muted text-lg leading-relaxed">
                Before I wrote a single line of production code, I spent five years as a
                <span className="text-forge-text font-semibold"> Latent Print Examiner</span> at
                the King County Sheriff's Office — analyzing fingerprint evidence for criminal
                investigations, operating in high-stakes legal environments where precision
                wasn't optional.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-forge-muted text-lg leading-relaxed">
                That background — pattern recognition, meticulous documentation, peer review,
                and a forensic eye for detail — didn't disappear when I transitioned into software.
                It became my edge. I debug production issues the same way I'd work a crime scene:
                methodically, without assumptions, following the evidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-forge-muted text-lg leading-relaxed">
                Most recently I was a <span className="text-forge-text font-semibold">Software Engineer II at IDEMIA</span>,
                building secure biometric identification systems used by law enforcement agencies — a
                full-circle intersection of both worlds. Outside of work, I run{' '}
                <span className="text-forge-orange font-semibold">Grüb Forge LLC</span>, turning
                ideas into live software products.
              </p>
            </FadeIn>
          </div>

          {/* Stats + Tags */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-forge-card border border-forge-border rounded-xl p-6 text-center hover:border-forge-orange transition-colors duration-300"
                  >
                    <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-forge-muted font-mono uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-forge-card border border-forge-border rounded-xl p-6">
                <div className="font-mono text-xs text-forge-orange tracking-widest uppercase mb-3">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Linux', 'REST APIs'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-forge-surface border border-forge-border text-forge-muted text-sm font-mono hover:border-forge-orange hover:text-forge-orange transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-3 text-forge-muted text-sm">
                <svg className="w-4 h-4 text-forge-orange shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Covington, WA — Open to remote opportunities
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
