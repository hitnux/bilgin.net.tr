'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Process({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const steps = t.process.steps

  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-4">
              {t.process.label}
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
              {t.process.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <motion.div
                className="group relative pt-8 border-t border-white/[0.08]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Hover line highlight */}
                <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-700 ease-out" />

                <span className="text-[11px] text-white/25 font-mono">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-white/90">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
