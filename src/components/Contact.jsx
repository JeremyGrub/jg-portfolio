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

const links = [
  {
    label: 'Email',
    value: 'jkgrub@gmail.com',
    href: 'mailto:jkgrub@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'jeremy-grub',
    href: 'https://linkedin.com/in/jeremy-grub',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'JeremyGrub',
    href: 'https://github.com/JeremyGrub',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forge-orange opacity-[0.04] blur-[80px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <span className="font-mono text-forge-orange text-sm tracking-[0.3em] uppercase block mb-4">
            07 / Contact
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-forge-muted text-lg max-w-lg mb-16 leading-relaxed">
            Open to new opportunities, collaborations, or just a good conversation about
            software, forensics, or tabletop RPGs.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={0.1 * (i + 1)}>
              <motion.a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="flex flex-col gap-3 bg-forge-card border border-forge-border rounded-2xl p-6 hover:border-forge-orange group transition-colors duration-300"
              >
                <span className="text-forge-muted group-hover:text-forge-orange transition-colors">
                  {link.icon}
                </span>
                <div>
                  <div className="font-mono text-xs text-forge-muted tracking-widest uppercase mb-1">{link.label}</div>
                  <div className="text-forge-text font-semibold text-sm group-hover:text-forge-orange transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div className="border-t border-forge-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-forge-muted text-sm font-mono">
            <span>© 2026 Jeremy Grub. Built with React.</span>
            <span className="text-xs">
              <span className="text-forge-orange">GRÜB</span>{' '}
              <span className="text-forge-orange">FORGE</span> LLC
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
