'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  return (
    <section
      id="iletisim"
      className="py-32 md:py-48 border-t border-white/10"
    >
      <div className="container mx-auto px-6 text-center">
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
            <MagneticButton strength={0.1}>
              <motion.a
                href="mailto:mail@bilgin.net.tr"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border border-white/15 hover:border-white/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base md:text-lg font-medium">
                  mail@bilgin.net.tr
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition-colors" />
              </motion.a>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 text-[11px] text-white/25 tracking-[0.2em] uppercase">
            Burdur, Türkiye
          </p>
        </Reveal>
      </div>
    </section>
  )
}
