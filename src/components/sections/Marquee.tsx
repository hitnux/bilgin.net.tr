'use client'

import { motion } from 'framer-motion'

const items = [
  'Web Geliştirme',
  'Mobil Uygulama',
  'UI/UX Tasarım',
  'E-Ticaret',
  'Danışmanlık',
  'Next.js',
  'React',
  'TypeScript',
]

export function Marquee() {
  return (
    <div className="relative border-y border-white/10 py-6 overflow-hidden">
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-sm text-white/40 tracking-wide">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
