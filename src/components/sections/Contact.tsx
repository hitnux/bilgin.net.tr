'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])

  return (
    <section ref={ref} id="iletisim" className="py-32 md:py-40 border-t border-white/10 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
          scale: useTransform(scrollYProgress, [0.3, 0.8], [0.5, 1.2]),
        }}
      />

      <motion.div style={{ scale, opacity }} className="container mx-auto px-6 text-center relative">
        <Reveal>
          <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-6">
            İletişim
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white/90 max-w-2xl mx-auto leading-tight">
            Bir projeniz mi var?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-white/40 max-w-md mx-auto">
            Fikrinizi dinleyelim. Genellikle 24 saat içinde dönüş yapıyoruz.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <MagneticButton strength={0.15}>
              <motion.a
                href="mailto:mail@bilgin.net.tr"
                className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full border border-white/15 transition-colors duration-300 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shine sweep on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                <span className="relative text-base md:text-lg font-medium">
                  mail@bilgin.net.tr
                </span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.a>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 text-[11px] text-white/25 tracking-[0.2em] uppercase">
            Burdur, Türkiye
          </p>
        </Reveal>
      </motion.div>
    </section>
  )
}
