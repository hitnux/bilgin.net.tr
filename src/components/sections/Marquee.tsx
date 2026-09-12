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
    <div className="relative border-y border-white/10 py-6 overflow-hidden group">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <motion.span
              className="text-sm text-white/40 tracking-wide group-hover:text-white/70 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.span>
            <motion.span
              className="w-1 h-1 rounded-full bg-white/20"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i % 8) * 0.25,
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
