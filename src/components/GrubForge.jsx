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

const products = [
  {
    name: 'Latent Lab Academy',
    url: 'https://latentlabacademy.com',
    badge: 'Live',
    description:
      'An interactive forensic education platform built for learning latent fingerprint analysis. Features side-by-side comparison tools, interactive canvas minutiae marking with Fabric.js, and dynamic subject datasets — currently used in a high school forensics class.',
    tech: ['React', 'Fabric.js', 'JavaScript'],
    icon: '🔬',
    accent: '#f97316',
  },
  {
    name: 'DM Finder',
    url: 'https://dmfinder.io',
    badge: 'Live',
    description:
      'A matchmaking platform connecting tabletop RPG players with Dungeon Masters. Built for the TTRPG community to find the right DM for their campaign style, experience level, and schedule.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🎲',
    accent: '#f97316',
  },
]

export default function GrubForge() {
  return (
    <section id="grubforge" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-forge-orange opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            02 / Grüb Forge LLC
          </span>
        </FadeIn>

        {/* Logo / Brand Block */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-wider leading-none">
                <span className="text-forge-text">GR</span>
                <span className="text-forge-text">Ü</span>
                <span className="text-forge-text">B </span>
                <span className="text-gradient">FORGE</span>
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-forge-orange text-forge-orange text-xs font-mono tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-forge-orange animate-pulse" />
              LLC — Est. 2026
            </span>
          </div>
          <p className="text-forge-muted text-lg max-w-2xl mb-16 leading-relaxed">
            My vehicle for turning ideas into real software. Grüb Forge is where passion projects
            become live products — built, shipped, and maintained by me.
          </p>
        </FadeIn>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={0.15 * (i + 1)}>
              <motion.a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="block bg-forge-card border border-forge-border rounded-2xl p-8 hover:border-forge-orange group transition-colors duration-300 glow-orange-sm hover:glow-orange"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{product.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-500 text-xs font-mono tracking-widest">{product.badge}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-forge-text mb-3 group-hover:text-forge-orange transition-colors">
                  {product.name}
                </h3>
                <p className="text-forge-muted text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-forge-surface border border-forge-border text-forge-muted text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <svg className="w-5 h-5 text-forge-muted group-hover:text-forge-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
