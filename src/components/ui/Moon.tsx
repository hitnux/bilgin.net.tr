'use client'

import { motion } from 'framer-motion'

export function Moon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
      className="absolute pointer-events-none"
      style={{
        top: '12%',
        right: '10%',
        width: 140,
        height: 140,
      }}
    >
      {/* Moon body */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 40%, rgba(220,220,235,0.6) 70%, rgba(200,200,220,0.4) 100%)',
          boxShadow:
            '0 0 60px 20px rgba(255,255,255,0.08), 0 0 120px 40px rgba(255,255,255,0.04), inset -18px -12px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* Craters */}
        <div
          className="absolute rounded-full bg-black/10"
          style={{ width: 22, height: 22, top: '25%', left: '30%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.08]"
          style={{ width: 14, height: 14, top: '55%', left: '55%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.07]"
          style={{ width: 10, height: 10, top: '35%', left: '65%' }}
        />
        <div
          className="absolute rounded-full bg-black/[0.09]"
          style={{ width: 16, height: 16, top: '62%', left: '28%' }}
        />
      </div>
    </motion.div>
  )
}
