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

const stats = [
  { value: '3', label: 'Live Products' },
  { value: '2026', label: 'Founded' },
  { value: '∞', label: 'Ideas in the Queue' },
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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Brand */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-5xl md:text-6xl font-black tracking-wider leading-none">
                  <span className="text-forge-text">GR</span>
                  <span className="text-forge-text">Ü</span>
                  <span className="text-forge-text">B </span>
                  <span className="text-gradient">FORGE</span>
                </h2>
                <span className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-forge-orange text-forge-orange text-xs font-mono tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-forge-orange animate-pulse" />
                  LLC — Est. 2026
                </span>
              </div>
              <p className="text-forge-muted text-lg leading-relaxed mb-6">
                My LLC for turning ideas into real software. Grüb Forge is where passion
                projects become live products — built, shipped, and maintained by me.
                Every project under the Grüb Forge banner starts as something I genuinely
                wanted to exist in the world.
              </p>
              <a
                href="https://grubforge.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-forge-orange font-mono text-sm hover:underline"
              >
                grubforge.com
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </FadeIn>
          </div>

          {/* Right: Stats + note */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-forge-card border border-forge-border rounded-xl p-5 text-center hover:border-forge-orange transition-colors duration-300"
                  >
                    <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-forge-muted font-mono uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-forge-card border border-forge-border rounded-xl p-6">
                <div className="font-mono text-xs text-forge-orange tracking-widest uppercase mb-3">Mission</div>
                <p className="text-forge-muted text-sm leading-relaxed">
                  Ship software that solves real problems — whether that's helping students
                  learn forensic science, connecting TTRPG communities, or making Saturday
                  golf tournaments more fun. If it's useful and I can build it, it goes
                  under the Forge.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
