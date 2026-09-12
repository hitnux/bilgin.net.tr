'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// SVG rocket pointing up (original vertical design)
function RocketSvg() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 64 64"
      fill="none"
      className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] md:w-[220px] md:h-[220px]"
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

  // Desktop: mouse-follow offset (layered on top of float animation)
  const offsetX = useMotionValue(0)
  const offsetY = useMotionValue(0)
  const mx = useSpring(offsetX, { stiffness: 60, damping: 15 })
  const my = useSpring(offsetY, { stiffness: 60, damping: 15 })

  useEffect(() => {
    if (isMobile) return

    const handleMouse = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      offsetX.set(nx * 60)
      offsetY.set(ny * 40)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [isMobile, offsetX, offsetY])

  if (isMobile) {
    // Mobile: gentle float, pointing up
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{
            y: [0, -14, 4, -10, 0],
            x: [0, 4, -3, 2, 0],
            rotate: [-20, -18, -22, -19, -20],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex flex-col items-center"
        >
          <RocketSvg />
          <Flame />
          <Smoke direction="down" />
        </motion.div>
      </motion.div>
    )
  }

  // Desktop: static tilt (15°), gentle float, mouse-follow
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={{ x: mx, y: my }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [0, -10, 4, -8, 0],
            rotate: [-20, -18, -22, -19, -20],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex flex-col items-center"
        >
          <RocketSvg />
          <Flame />
          <Smoke direction="down" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function Flame() {
  return (
    <motion.div
      className="w-4 -mt-1 origin-top md:w-6"
      animate={{
        scaleY: [1, 1.4, 0.8, 1.2, 1],
        scaleX: [1, 0.85, 1.1, 0.9, 1],
        opacity: [0.9, 1, 0.85, 1, 0.9],
      }}
      transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="md:w-5 md:h-10">
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
  )
}

function Smoke({ direction }: { direction: 'down' | 'left' }) {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/[0.12] blur-[3px]"
          style={{
            left: direction === 'down' ? '50%' : 'auto',
            right: direction === 'left' ? '60%' : 'auto',
            top: direction === 'down' ? '95%' : '50%',
            translateX: direction === 'down' ? '-50%' : 0,
            width: 14 + i * 5,
            height: 14 + i * 5,
          }}
          animate={
            direction === 'down'
              ? {
                  y: [0, 40 + i * 15],
                  x: [(i - 2) * 6, (i - 2) * 14],
                  opacity: [0.5, 0],
                  scale: [1, 2.2],
                }
              : {
                  x: [0, -(60 + i * 25)],
                  y: [(i - 2) * 8, (i - 2) * 20],
                  opacity: [0.5, 0],
                  scale: [1, 2.5],
                }
          }
          transition={{
            duration: 2.2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  )
}
