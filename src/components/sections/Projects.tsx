'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/lib/projects'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Projects({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)

  return (
    <section id="projeler" className="py-20 md:py-28 border-t border-white/10">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
                {t.projects.label}
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                {t.projects.title}
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block">
              ({projects.length.toString().padStart(2, '0')})
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.05}>
              <Link
                href={`/${lang}/projeler/${project.slug}`}
                className="group relative block bg-black aspect-[4/3] overflow-hidden"
                aria-label={`${project.title} detayları`}
              >
                {/* Gradient tile */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: project.gradient }}
                />

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08) 0%, transparent 70%)',
                  }}
                />

                <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] text-white/40 tracking-[0.2em] uppercase">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-white/30 font-mono">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-medium tracking-tight text-white"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -4 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="mt-3 text-sm text-white/50 leading-relaxed max-w-md"
                      variants={{
                        rest: { opacity: 0.7 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] rounded-full bg-white/[0.06] text-white/50 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-8 right-8 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center"
                    variants={{
                      rest: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </motion.div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
