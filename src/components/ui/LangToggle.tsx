'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LangToggle({ lang }: { lang: 'tr' | 'en' }) {
  const pathname = usePathname()
  // /tr/... <-> /en/... ; default (no prefix) treated as tr
  const target = lang === 'tr' ? 'en' : 'tr'
  const rest = pathname.replace(/^\/(tr|en)/, '') || ''
  const href = target === 'tr' ? (rest || '/') : `/${target}${rest}`

  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-md text-xs font-medium tracking-wider uppercase border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
      aria-label="Switch language"
    >
      {lang === 'tr' ? 'EN' : 'TR'}
    </Link>
  )
}
