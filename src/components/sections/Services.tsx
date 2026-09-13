'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Services({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const services = t.services.items
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="hizmetler" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-4">
                {t.services.label}
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em]">
                {t.services.title}
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block font-mono">
              ({services.length.toString().padStart(2, '0')})
            </span>
          </div>
        </Reveal>

        <div className="border-t border-white/[0.06]">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="group relative w-full text-left py-9 md:py-11 cursor-none"
                >
                  <div className="relative flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-8 md:gap-16">
                      <span className="text-[11px] text-white/25 font-mono">
                        0{i + 1}
                      </span>
                      <h3
                        className={`text-2xl md:text-4xl font-medium tracking-[-0.02em] transition-colors duration-300 ${
                          openIndex === i
                            ? 'text-white'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300"
                    >
                      <Plus className="h-4 w-4 text-white/60" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 md:pl-24 pr-6">
                        <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 text-[11px] rounded-full border border-white/10 text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
