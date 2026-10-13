'use client'

import { motion } from 'framer-motion'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Marquee({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const items = t.marquee

  return (
    <div className="relative border-y border-white/[0.06] py-5 overflow-hidden group">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-14">
            <motion.span
              className="text-[13px] text-white/35 tracking-wide group-hover:text-white/60 transition-colors duration-500"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/15" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
