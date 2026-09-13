'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Box } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Model3D({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)

  return (
    <section id="3d" className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-4">
                {t.model3d.label}
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
                {t.model3d.title1}
                <br />
                <span className="text-white/40">{t.model3d.title2}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-white/50 leading-relaxed max-w-xl font-light">
                {t.model3d.description1}{' '}
                <a
                  href="https://pazarora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white underline decoration-white/25 underline-offset-4 transition-colors"
                >
                  Pazarora
                </a>{' '}
                {t.model3d.description2}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {t.model3d.chips.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-xs rounded-full border border-white/10 text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <motion.a
                href="https://pazarora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-[28px] border border-white/[0.06]"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="aspect-[4/3] flex flex-col justify-between p-8 md:p-10"
                  style={{
                    background:
                      'linear-gradient(135deg, #1f1c2c 0%, #2c3e50 100%)',
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl border border-white/15 flex items-center justify-center bg-white/[0.04]">
                      <Box className="h-5 w-5 text-white/70" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.02em] text-white">
                      {t.model3d.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      {t.model3d.cardSub}
                    </p>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
