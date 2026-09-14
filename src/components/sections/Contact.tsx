'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Reveal } from '@/components/ui/Reveal'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Contact({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1])

  return (
    <section ref={ref} id="iletisim" className="py-36 md:py-48 border-t border-white/[0.06] relative overflow-hidden">
      {/* Soft centered glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
        }}
      />

      <motion.div style={{ opacity }} className="container mx-auto px-6 text-center relative">
        <Reveal>
          <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-8">
            {t.contact.label}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-white max-w-3xl mx-auto leading-[1.05]">
            {t.contact.title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-base md:text-lg text-white/40 max-w-md mx-auto font-light">
            {t.contact.text}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14">
            <MagneticButton strength={0.12}>
              <motion.a
                href="mailto:mail@bilgin.net.tr"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black text-base md:text-lg font-medium tracking-tight transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative">mail@bilgin.net.tr</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.a>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-20 text-[11px] text-white/25 tracking-[0.25em] uppercase">
            {t.contact.location}
          </p>
        </Reveal>
      </motion.div>
    </section>
  )
}
