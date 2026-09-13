'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const stats = [
  { value: 5, suffix: '+', label: 'Yıl' },
  { value: 50, suffix: '+', label: 'Müşteri' },
  { value: 100, suffix: '+', label: 'Proje' },
]

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Word-by-word highlight on scroll (like Apple)
  const words =
    'Kendi ürünlerimizi tasarlıyor, geliştiriyor ve satıyoruz. Basitlik karmaşıklığın en yüksek hâlidir — işimizi bu inançla yapıyoruz.'.split(
      ' '
    )
  const totalWords = words.length

  return (
    <section ref={ref} id="hakkinda" className="py-20 md:py-28 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase">
                Hakkında
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            {/* Scroll-driven word highlight */}
            <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight max-w-3xl">
              {words.map((word, i) => (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[i / totalWords, (i + 1) / totalWords]}
                >
                  {word}
                </Word>
              ))}
            </p>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-white/30">
                      {stat.label}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: any
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  const color = useTransform(
    progress,
    range,
    ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.95)']
  )

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {children}
    </motion.span>
  )
}
