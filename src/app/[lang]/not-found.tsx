'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-6">
          Hata 404
        </p>
        <h1 className="text-7xl md:text-8xl font-semibold tracking-[-0.02em] leading-[0.9] text-white">
          Kayıp yıldız
        </h1>
        <p className="mt-6 text-sm md:text-base text-white/40 max-w-sm">
          Aradığın sayfa bu gökyüzünde değil. Belki taşınmıştır, belki hiç
          parlamamıştır.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-sm text-white/80 hover:bg-white/[0.05] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  )
}
