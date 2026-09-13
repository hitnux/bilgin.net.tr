'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'

// Letter-by-letter reveal for the main title
function AnimatedTitle({ text }: { text: string }) {
  const letters = text.split('')
  return (
    <span className="inline-flex">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3 + i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block will-change-transform"
          style={{ originY: 1 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero({ font = 'comfortaa' }: { font?: 'quicksand' | 'comfortaa' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92])

  // Mouse-follow glow with springs
  const glowX = useSpring(0, { stiffness: 50, damping: 20 })
  const glowY = useSpring(0, { stiffness: 50, damping: 20 })

  // Title magnetic tilt following mouse
  const titleRotateX = useSpring(0, { stiffness: 100, damping: 20 })
  const titleRotateY = useSpring(0, { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    glowX.set(x * 60)
    glowY.set(y * 60)
    titleRotateY.set(x * 6) // subtle 3D tilt
    titleRotateX.set(-y * 4)
  }

  const fontClass =
    font === 'quicksand'
      ? 'font-[family-name:var(--font-quicksand)]'
      : 'font-[family-name:var(--font-comfortaa)]'

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse-follow glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Fine grid with subtle pulse */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${10 + (i * 7.3) % 80}%`,
            top: `${15 + (i * 11.7) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Status badge with pulse */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-12"
        >
          <div className="relative flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <span className={`text-[11px] text-white/50 tracking-[0.2em] uppercase ${fontClass}`}>
            Kendi ürünlerimizi geliştiriyoruz
          </span>
        </motion.div>

        {/* Title with 3D tilt + letter reveal */}
        <motion.div
          style={{ rotateX: titleRotateX, rotateY: titleRotateY }}
          className="perspective-1000"
        >
          <h1
            className={`text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.02em] leading-[0.9] text-white ${fontClass}`}
          >
            <AnimatedTitle text="Bilgin" />
          </h1>
        </motion.div>

        {/* Rotating word subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={`mt-8 text-sm md:text-base text-white/35 ${fontClass}`}
        >
          <RotatingWords />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-14 flex items-center justify-center gap-8"
        >
          <MagneticButton strength={0.2}>
            <a
              href="#hizmetler"
              className={`group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors ${fontClass}`}
            >
              Keşfet
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </a>
          </MagneticButton>
          <div className="w-px h-4 bg-white/15" />
          <MagneticButton strength={0.2}>
            <a
              href="#iletisim"
              className={`group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors ${fontClass}`}
            >
              İletişim
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
        style={{ originY: 0 }}
        className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/30"
      />
    </section>
  )
}

// Rotating subtitle words
function RotatingWords() {
  const words = ['Kendi ürünlerimizi geliştiriyoruz', 'Yazılım ve tasarım stüdyosu', 'Fikirleri ürüne dönüştürüyoruz']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

import { AnimatePresence } from 'framer-motion'
