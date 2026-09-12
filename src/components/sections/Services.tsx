'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const services = [
  {
    num: '01',
    title: 'Web Geliştirme',
    description: 'Modern, hızlı ve ölçeklenebilir web uygulamaları.',
  },
  {
    num: '02',
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için native deneyimler.',
  },
  {
    num: '03',
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı, minimalist arayüz tasarımı.',
  },
  {
    num: '04',
    title: 'Danışmanlık',
    description: 'Dijital dönüşüm stratejisi ve teknik danışmanlık.',
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="py-28 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
                Hizmetler
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Ne yapıyoruz
              </h2>
            </div>
            <span className="text-xs text-white/25 hidden md:block">
              (04)
            </span>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.05}>
              <motion.div
                className="group relative border-b border-white/10 py-10 md:py-14 cursor-default"
                initial="rest"
                whileHover="hover"
              >
                {/* Hover background wipe */}
                <motion.div
                  className="absolute inset-0 bg-white/[0.03]"
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 0 }}
                />

                <div className="relative flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className="text-[11px] text-white/25 font-mono">
                      {service.num}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-8">
                    <p className="hidden md:block text-sm text-white/40 max-w-xs text-right">
                      {service.description}
                    </p>
                    <motion.div
                      variants={{
                        rest: { rotate: 0, opacity: 0.3 },
                        hover: { rotate: 45, opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ArrowUpRight className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Mobile description */}
                <p className="md:hidden relative mt-3 ml-12 text-sm text-white/40">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
