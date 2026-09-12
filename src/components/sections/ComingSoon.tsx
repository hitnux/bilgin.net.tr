'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarField } from '@/components/ui/StarField'
import { Moon } from '@/components/ui/Moon'
import { Rocket } from '@/components/ui/Rocket'

export default function ComingSoon() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr')

  return (
    <main
      className="relative flex flex-col bg-black"
      style={{ height: 'calc(100vh)', overflow: 'hidden' }}
    >
      <StarField />
      <Moon />

      {/* Header */}
      <header className="relative z-10">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-end">
          {/* Language toggle */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-0.5 rounded-lg bg-white/[0.04] border border-white/10 p-1 backdrop-blur-sm"
          >
            {(['tr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wider uppercase transition-all duration-200 cursor-none ${
                  lang === l
                    ? 'bg-white/[0.1] text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {l}
              </button>
            ))}
          </motion.div>
        </nav>
      </header>

      {/* Center content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-16">
        {/* Rocket — mobile: top-center 25% down; desktop: right ~18%, both tilted -20° */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          {/* Mobile: top-center, 20% down, shifted right */}
          <div className="md:hidden absolute" style={{ top: '20%', left: '55%' }}>
            <Rocket />
          </div>
          {/* Desktop: right side, higher up */}
          <div className="hidden md:block absolute -translate-y-1/2" style={{ right: '14%', top: '35%' }}>
            <Rocket />
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10">
          {/* Title */}
          <div className="overflow-hidden mt-4">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.02em] leading-[0.9] text-white font-[family-name:var(--font-comfortaa)]"
            >
              Bilgin
            </motion.h1>
          </div>

          {/* Coming soon text — larger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl text-white/70 font-light font-[family-name:var(--font-comfortaa)]"
              >
                {lang === 'tr' ? 'Yakında' : 'Coming Soon'}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-16" />
    </main>
  )
}
