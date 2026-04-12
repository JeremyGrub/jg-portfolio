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

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Spring Boot', 'Fabric.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Linux', 'Git', 'GitHub', 'GitLab', 'Maven', 'Postman'],
  },
  {
    category: 'Concepts',
    skills: ['REST APIs', 'OOP', 'Agile', 'Debugging', 'End-to-End Testing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            05 / Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            My <span className="text-gradient">Toolkit</span>
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={0.1 * (gi + 1)}>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs text-forge-orange tracking-widest uppercase">
                    {group.category}
                  </span>
                  <div className="flex-1 h-px bg-forge-border" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: '#f97316', color: '#f97316' }}
                      className="px-4 py-2 rounded-lg bg-forge-card border border-forge-border text-forge-muted font-mono text-sm cursor-default transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
