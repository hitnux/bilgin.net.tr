'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import { getDictionary, type Locale } from '@/lib/i18n'

const statValues = [
  { value: 5, suffix: '+' },
  { value: 3, suffix: '' },
  { value: 12, suffix: '+' },
]

export function About({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Apple-style statement: word-by-word highlight, slower and softer
  const words = t.about.text.split(' ')
  const totalWords = words.length

  return (
    <section ref={ref} id="hakkinda" className="py-28 md:py-40 border-t border-white/[0.06]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase text-center mb-14">
              {t.about.label}
            </p>
          </Reveal>

          {/* Scroll-driven word highlight */}
          <p className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-[-0.02em] text-center">
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

          {/* Stats — quiet, hairline separated */}
          <div className="mt-24 grid grid-cols-3 border-t border-white/[0.06]">
            {statValues.map((stat, i) => (
              <Reveal key={t.about.stats[i].label} delay={0.2 + i * 0.12}>
                <div
                  className={`pt-8 text-center ${i > 0 ? 'border-l border-white/[0.06]' : ''}`}
                >
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-xs text-white/30 tracking-wide">
                    {t.about.stats[i].label}
                  </div>
                </div>
              </Reveal>
            ))}
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
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.12, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  )
}
