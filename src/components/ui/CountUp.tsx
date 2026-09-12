'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  duration?: number
}

export function CountUp({ target, suffix = '', duration = 2 }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Counter target={target} duration={duration} />
          {suffix}
        </motion.span>
      ) : (
        '0' + suffix
      )}
    </span>
  )
}

function Counter({ target, duration }: { target: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  const start = 0
  const end = target
  const range = end - start
  let startTime: number | null = null

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    const current = Math.floor(start + range * eased)

    if (ref.current) {
      ref.current.textContent = String(current)
    }

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)

  return <span ref={ref}>0</span>
}
