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
    <section id="projeler" className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-4">
                {t.projects.label}
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
                {t.projects.title}
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block font-mono">
              ({projects.length.toString().padStart(2, '0')})
            </span>
          </div>
        </Reveal>

        {/* 3-column tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/${lang}/projeler/${project.slug}`}
                className="group relative block overflow-hidden rounded-[24px] border border-white/[0.06]"
                aria-label={`${project.title} detayları`}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {/* Ambient glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 120%, rgba(255,255,255,0.10) 0%, transparent 55%)',
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] text-white/40 tracking-[0.25em] uppercase">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-white/30 font-mono">
                          {project.year}
                        </span>
                        <motion.div
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-white/50 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] rounded-full bg-white/[0.08] text-white/60 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
