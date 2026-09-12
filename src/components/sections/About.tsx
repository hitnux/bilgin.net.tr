'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const stats = [
  { value: 5, suffix: '+', label: 'Yıl' },
  { value: 50, suffix: '+', label: 'Müşteri' },
  { value: 100, suffix: '+', label: 'Proje' },
]

export function About() {
  return (
    <section id="hakkinda" className="py-28 md:py-40 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - label */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase">
                Hakkında
              </p>
            </Reveal>
          </div>

          {/* Right - content */}
          <div className="lg:col-span-9">
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white/90 max-w-3xl">
                Dijital ürünler tasarlıyor ve geliştiriyoruz.
                <span className="text-white/40">
                  {' '}
                  Basitlik karmaşıklığın en yüksek hâlidir — işimizi bu
                  inançla yapıyoruz.
                </span>
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-white/30">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
