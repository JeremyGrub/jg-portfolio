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

const experiences = [
  {
    company: 'IDEMIA',
    role: 'Software Engineer II',
    period: '2023 — 2026',
    location: 'Remote',
    type: 'Engineering',
    color: 'forge-orange',
    bullets: [
      'Built and customized secure applications used in biometric identification systems for law enforcement agencies',
      'Developed and implemented frontend configurations using JavaScript and XML, improving usability and workflows',
      'Integrated RESTful services and developed end-to-end tests for validating system behavior in secure environments',
      'Troubleshot deployment logs and runtime issues in Linux environments, improving system reliability',
      'Delivered demos, testing, and training, translating complex technical systems into user-friendly workflows',
    ],
    tags: ['JavaScript', 'React', 'Java', 'REST APIs', 'Linux'],
  },
  {
    company: "King County Sheriff's Office",
    role: 'Latent Print Examiner',
    period: '2018 — 2023',
    location: 'Renton, WA',
    type: 'Forensics',
    color: 'blue-400',
    bullets: [
      'Analyzed and compared latent fingerprint evidence for criminal investigations',
      'Conducted peer review and quality assurance to ensure accuracy and integrity of results',
      'Maintained strict procedural standards in high-stakes legal environments',
      'Applied advanced pattern recognition to interpret complex forensic data',
    ],
    tags: ['Pattern Recognition', 'QA', 'Forensic Analysis', 'Legal Standards'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forge-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            04 / Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-forge-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={0.15 * (i + 1)}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full bg-forge-orange -translate-x-1.5 md:-translate-x-1.5 border-2 border-forge-dark z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-forge-card border border-forge-border rounded-2xl p-6 hover:border-forge-orange transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <span className={`font-mono text-xs tracking-widest uppercase ${exp.type === 'Engineering' ? 'text-forge-orange' : 'text-blue-400'}`}>
                            {exp.type}
                          </span>
                          <h3 className="text-lg font-bold text-forge-text mt-1">{exp.role}</h3>
                          <p className="text-forge-muted font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-xs text-forge-muted">{exp.period}</div>
                          <div className="font-mono text-xs text-forge-muted mt-0.5">{exp.location}</div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {exp.bullets.map((b, bi) => (
                          <div key={bi} className="flex gap-3 text-sm text-forge-muted leading-relaxed">
                            <span className="text-forge-orange shrink-0 mt-0.5">▹</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-forge-surface border border-forge-border text-forge-muted text-xs font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
