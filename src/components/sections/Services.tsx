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
    <section id="hizmetler" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
                {t.services.label}
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                {t.services.title}
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block">
              ({services.length.toString().padStart(2, '0')})
            </span>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="group relative w-full text-left py-8 md:py-10 cursor-none"
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/[0.02]"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: openIndex === i ? 1 : 0,
                    }}
                    whileHover={{ scaleX: openIndex === i ? 1 : 0.5 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                  />

                  <div className="relative flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span className="text-[11px] text-white/25 font-mono">
                        0{i + 1}
                      </span>
                      <h3
                        className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors ${
                          openIndex === i
                            ? 'text-white'
                            : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors"
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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-12 md:pl-24 pr-6">
                        <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-[11px] rounded-full border border-white/10 text-white/40"
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
