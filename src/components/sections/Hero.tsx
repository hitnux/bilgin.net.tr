'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { getDictionary, type Locale } from '@/lib/i18n'

// Letter-by-letter reveal for the main title
function AnimatedTitle({ text }: { text: string }) {
  const letters = text.split('')
  return (
    <span className="inline-flex">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.2 + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block will-change-transform"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero({ font = 'comfortaa', lang }: { font?: 'quicksand' | 'comfortaa'; lang: 'tr' | 'en' }) {
  const t = getDictionary(lang)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Apple-style: content scales down and fades as you scroll away
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94])
  const blur = useTransform(scrollYProgress, [0, 0.6], ['blur(0px)', 'blur(6px)'])
  const filter = useTransform(blur, (b) => b)

  const fontClass =
    font === 'quicksand'
      ? 'font-[family-name:var(--font-quicksand)]'
      : 'font-[family-name:var(--font-comfortaa)]'

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Mouse-follow glow — extremely subtle */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 65%)',
        }}
      />

      <motion.div
        style={{ y, opacity, scale, filter }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Small overline — Apple eyebrow style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className={`text-[13px] md:text-[15px] font-medium tracking-[0.01em] text-white/60 ${fontClass}`}
        >
          {t.hero.badge}
        </motion.p>

        {/* Title — massive, tight, confident */}
        <h1
          className={`mt-4 text-[17vw] md:text-[11rem] lg:text-[13rem] font-semibold tracking-[-0.045em] leading-[0.95] text-white ${fontClass}`}
        >
          <AnimatedTitle text="Bilgin" />
        </h1>

        {/* Subtitle — single quiet line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className={`mt-6 text-lg md:text-2xl text-white/50 font-light tracking-[-0.01em] ${fontClass}`}
        >
          <RotatingWords words={t.hero.words} />
        </motion.div>

        {/* CTAs — pill links, Apple style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex items-center justify-center gap-10"
        >
          <MagneticButton strength={0.15}>
            <a
              href="#hizmetler"
              className={`group inline-flex items-center gap-2 text-[15px] md:text-base text-white/90 hover:text-white transition-colors ${fontClass}`}
            >
              {t.hero.explore}
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <a
              href="#iletisim"
              className={`inline-flex items-center text-[15px] md:text-base text-[#2997ff] hover:underline underline-offset-4 ${fontClass}`}
            >
              {t.hero.contact}
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom hairline fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"
      />
    </section>
  )
}

// Rotating subtitle words
function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="relative h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

import { AnimatePresence } from 'framer-motion'
