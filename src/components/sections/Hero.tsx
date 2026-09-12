'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Hero({ font = 'quicksand' }: { font?: 'quicksand' | 'comfortaa' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92])

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const glowX = useSpring(0, { stiffness: 50, damping: 20 })
  const glowY = useSpring(0, { stiffness: 50, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    glowX.set(x * 40)
    glowY.set(y * 40)
  }

  const fontClass =
    font === 'quicksand' ? 'font-[family-name:var(--font-quicksand)]' : 'font-[family-name:var(--font-comfortaa)]'

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className={`text-[11px] text-white/40 tracking-[0.25em] uppercase ${fontClass}`}>
            Projelere açığız
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.02em] leading-[0.9] text-white ${fontClass}`}
          >
            Bilgin
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className={`mt-8 text-sm md:text-base text-white/35 font-light ${fontClass}`}
        >
          Yazılım ve tasarım stüdyosu
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex items-center justify-center gap-8"
        >
          <MagneticButton strength={0.15}>
            <a
              href="#hizmetler"
              className={`group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors ${fontClass}`}
            >
              Keşfet
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </MagneticButton>
          <div className="w-px h-4 bg-white/15" />
          <MagneticButton strength={0.15}>
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

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: 'easeOut' }}
        style={{ originY: 0 }}
        className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/30"
      />
    </section>
  )
}
