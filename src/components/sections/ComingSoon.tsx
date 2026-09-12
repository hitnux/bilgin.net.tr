'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarField } from '@/components/ui/StarField'

export default function ComingSoon() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr')

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <StarField />

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
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6">
        <div>
          {/* Domain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] text-white/30 tracking-[0.4em] uppercase mb-8"
          >
            bilgin.net.tr
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.02em] leading-[0.9] text-white font-[family-name:var(--font-comfortaa)]"
            >
              Bilgin
            </motion.h1>
          </div>

          {/* Coming soon text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm md:text-base text-white/40 font-light font-[family-name:var(--font-comfortaa)]"
              >
                {lang === 'tr' ? 'Yakında' : 'Coming Soon'}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer spacer to balance layout */}
      <div className="h-16" />
    </main>
  )
}
