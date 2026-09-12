'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// SVG rocket with exhaust flame and smoke
function RocketSvg() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 64 64"
      fill="none"
      className="drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
    >
      {/* Body */}
      <path
        d="M32 4C38 10 42 20 42 30C42 36 40 42 38 46H26C24 42 22 36 22 30C22 20 26 10 32 4Z"
        fill="white"
        fillOpacity="0.92"
      />
      {/* Window */}
      <circle cx="32" cy="24" r="5" fill="#0a0a0a" />
      <circle cx="32" cy="24" r="3" fill="rgba(255,255,255,0.25)" />
      {/* Fins */}
      <path d="M22 34L14 46L22 44Z" fill="white" fillOpacity="0.5" />
      <path d="M42 34L50 46L42 44Z" fill="white" fillOpacity="0.5" />
      {/* Bottom nozzle */}
      <path d="M26 46H38L36 50H28L26 46Z" fill="white" fillOpacity="0.7" />
    </svg>
  )
}

export function Rocket() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Desktop: mouse-follow with springs
  const rocketX = useMotionValue(0)
  const rocketY = useMotionValue(0)
  const x = useSpring(rocketX, { stiffness: 60, damping: 15 })
  const y = useSpring(rocketY, { stiffness: 60, damping: 15 })
  const rotate = useSpring(0, { stiffness: 80, damping: 15 })

  useEffect(() => {
    if (isMobile) return

    const handleMouse = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      rocketX.set(nx * 80)
      rocketY.set(ny * 50)
      // Tilt rocket toward movement direction
      rotate.set(nx * 12)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [isMobile, rocketX, rocketY, rotate])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={isMobile ? undefined : { x, y, rotate }}
        animate={
          isMobile
            ? {
                y: [0, -12, 4, -8, 0],
                x: [0, 4, -3, 2, 0],
                rotate: [0, 2, -2, 1, 0],
              }
            : undefined
        }
        transition={
          isMobile
            ? { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
        className="relative flex flex-col items-center"
      >
        {/* Rocket body */}
        <RocketSvg />

        {/* Flame */}
        <motion.div
          className="w-3 -mt-1 origin-top"
          animate={{
            scaleY: [1, 1.4, 0.8, 1.2, 1],
            scaleX: [1, 0.85, 1.1, 0.9, 1],
            opacity: [0.9, 1, 0.85, 1, 0.9],
          }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path
              d="M6 0C8 6 10 10 6 24C2 10 4 6 6 0Z"
              fill="url(#flame)"
            />
            <defs>
              <linearGradient id="flame" x1="6" y1="0" x2="6" y2="24">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="40%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Smoke puffs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/[0.12] blur-[2px]"
            style={{ top: '100%', width: 10 + i * 4, height: 10 + i * 4 }}
            animate={{
              y: [0, 30 + i * 12],
              x: [(i - 2) * 4, (i - 2) * 10],
              opacity: [0.5, 0],
              scale: [1, 2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: 'easeOut',
              delay: i * 0.35,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
