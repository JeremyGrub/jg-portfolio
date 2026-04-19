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

const projects = [
  {
    title: 'Thru',
    subtitle: 'Live Golf Scoring Platform',
    description:
      'A host sets up a tournament in minutes, texts each player a tokenized link, and a public leaderboard updates in real time as scores roll in — hole by hole, no apps, no accounts for players. Features an offline score queue that flushes on reconnect and a Three.js hero on the landing page.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Three.js', 'GSAP'],
    liveUrl: 'https://thru.golf',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
  },
  {
    title: 'Latent Lab Academy',
    subtitle: 'Forensic Education Platform',
    description:
      'React-based web app for side-by-side latent and known fingerprint comparison. Interactive canvas tools built with Fabric.js for placing minutiae points. Currently used in a high school forensics class.',
    tech: ['React', 'Fabric.js', 'JavaScript', 'CSS'],
    liveUrl: 'https://latentlabacademy.com',
    githubUrl: 'https://github.com/JeremyGrub/fingerprint-comparison',
    badge: 'Grüb Forge',
    highlight: 'Used in education',
  },
  {
    title: 'DM Finder',
    subtitle: 'D&D Dungeon Master Matchmaking Platform',
    description:
      'Full-stack matchmaking platform connecting tabletop RPG players with Dungeon Masters. Features advanced filtering, rich DM profiles, a real-time messaging system, full booking and scheduling flows, Stripe payments with authorize-now/capture-later, saved cards for recurring sessions, Stripe Connect payouts, email verification and transactional notifications via Resend, and an admin dashboard for platform management.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Stripe', 'JWT', 'Resend', 'Tailwind CSS', 'Vite', 'Railway'],
    liveUrl: 'https://dmfinder.io',
    githubUrl: null,
    badge: 'Grüb Forge',
    highlight: 'Live product',
  },
  {
    title: 'Ask Winston',
    subtitle: 'Restaurant Decision App',
    description:
      'A Spring Boot web app that solves the age-old problem of deciding where to eat. Features user authentication with BCrypt, full CRUD functionality, random restaurant selection, and relational data modeled with JPA and MySQL.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'JSP'],
    liveUrl: null,
    githubUrl: 'https://github.com/JeremyGrub/solo-project',
    badge: null,
    highlight: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            03 / Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="bg-forge-card border border-forge-border rounded-2xl p-8 hover:border-forge-orange transition-colors duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-forge-text group-hover:text-forge-orange transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full border border-forge-orange text-forge-orange text-xs font-mono">
                          {project.badge}
                        </span>
                      )}
                      {project.highlight && (
                        <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
                          ✓ {project.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-forge-muted text-sm mb-1 font-mono">{project.subtitle}</p>
                    <p className="text-forge-muted leading-relaxed mt-3 mb-5">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md bg-forge-surface border border-forge-border text-forge-muted text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Links */}
                  <div className="flex md:flex-col gap-3 shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-forge-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-500 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-forge-border text-forge-muted text-sm font-semibold rounded-lg hover:border-forge-orange hover:text-forge-orange transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
