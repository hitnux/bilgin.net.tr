'use client'

import { motion } from 'framer-motion'

export function Moon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
      className="absolute pointer-events-none z-[1] md:left-[14%]"
      style={{
        top: '10%',
        left: '8%',
        width: 90,
        height: 90,
      }}
    >
      {/* Moon body — desktop: rotated 15° for lighting angle */}
      <div
        className="relative w-full h-full rounded-full md:rotate-[15deg]"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.4) 40%, rgba(220,220,235,0.28) 70%, rgba(200,200,220,0.16) 100%)',
          boxShadow:
            '0 0 40px 12px rgba(255,255,255,0.04), 0 0 80px 24px rgba(255,255,255,0.02), inset -12px -8px 28px rgba(0,0,0,0.35)',
        }}
      >
        {/* Craters */}
        <div
          className="absolute rounded-full bg-black/10"
          style={{ width: 14, height: 14, top: '25%', left: '30%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.08]"
          style={{ width: 9, height: 9, top: '55%', left: '55%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.07]"
          style={{ width: 7, height: 7, top: '35%', left: '65%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.09]"
          style={{ width: 10, height: 10, top: '62%', left: '28%' }}
        />
      </div>
    </motion.div>
  )
}
