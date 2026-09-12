'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const projects = [
  { title: 'Teknikenerji', category: 'Web Platform', year: '2025' },
  { title: 'Filamify', category: 'SaaS Ürün', year: '2025' },
  { title: 'Pazarora', category: 'E-Ticaret', year: '2024' },
  { title: 'E-Cüzdan', category: 'FinTech', year: '2026' },
]

export function Projects() {
  return (
    <section id="projeler" className="py-28 md:py-40 border-t border-white/10">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
                Seçilmiş İşler
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Projeler
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block">
              ({projects.length.toString().padStart(2, '0')})
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <motion.a
                href="#"
                className="group relative block bg-black aspect-[4/3] overflow-hidden"
                whileHover="hover"
                initial="rest"
              >
                {/* Subtle hover gradient */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.06) 0%, transparent 70%)',
                  }}
                />

                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] text-white/30 tracking-[0.2em] uppercase">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-white/25 font-mono">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -4 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="mt-3 overflow-hidden h-4">
                      <motion.p
                        className="text-xs text-white/40"
                        variants={{
                          rest: { y: 20, opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        Detayları gör →
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-8 right-8"
                    variants={{
                      rest: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-5 w-5 text-white/60" />
                  </motion.div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
