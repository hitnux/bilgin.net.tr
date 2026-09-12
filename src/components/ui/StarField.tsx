'use client'

import { useEffect, useMemo } from 'react'

interface Star {
  left: string
  top: string
  size: number
  duration: string
  minOpacity: number
  delay: string
}

interface ShootingStar {
  top: string
  left: string
  duration: string
  delay: string
}

function generateStars(count: number, minSize: number, maxSize: number, minOp: number, maxOp: number): Star[] {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * (maxSize - minSize) + minSize,
    duration: `${Math.random() * 3 + 2}s`,
    minOpacity: minOp + Math.random() * (maxOp - minOp),
    delay: `${Math.random() * 5}s`,
  }))
}

export function StarField() {
  // Generate stars once (client-only to avoid hydration mismatch)
  const stars = useMemo(() => ({
    layer1: generateStars(80, 0.5, 1.5, 0.2, 0.5),
    layer2: generateStars(50, 1, 2.5, 0.3, 0.6),
    layer3: generateStars(20, 1.5, 3, 0.4, 0.7),
  }), [])

  const shootingStars: ShootingStar[] = useMemo(() => [
    { top: '15%', left: '10%', duration: '1.2s', delay: '3s' },
    { top: '25%', left: '60%', duration: '0.9s', delay: '8s' },
    { top: '10%', left: '35%', duration: '1.1s', delay: '15s' },
    { top: '30%', left: '75%', duration: '1s', delay: '22s' },
    { top: '8%', left: '50%', duration: '1.3s', delay: '30s' },
    { top: '20%', left: '25%', duration: '1s', delay: '40s' },
    { top: '12%', left: '80%', duration: '1.1s', delay: '52s' },
  ], [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Deep space background — darker than before for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(40,30,80,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(15,25,60,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_80%_20%,rgba(30,15,60,0.08),transparent)]" />

      {/* Star layers */}
      <div className="absolute inset-0">
        {stars.layer1.map((star, i) => (
          <span
            key={`s1-${i}`}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
              ['--min-opacity' as string]: star.minOpacity,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {stars.layer2.map((star, i) => (
          <span
            key={`s2-${i}`}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
              ['--min-opacity' as string]: star.minOpacity,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {stars.layer3.map((star, i) => (
          <span
            key={`s3-${i}`}
            className="absolute rounded-full bg-white animate-star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay,
              ['--min-opacity' as string]: star.minOpacity,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map((s, i) => (
        <span
          key={`shoot-${i}`}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            ['--shoot-duration' as string]: s.duration,
            ['--shoot-delay' as string]: s.delay,
          }}
        />
      ))}
    </div>
  )
}
