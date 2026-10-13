import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getDictionary, type Locale } from '@/lib/i18n'

export function NotFoundContent({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const home = lang === 'tr' ? '/' : '/en'

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[11px] text-white/30 tracking-[0.3em] uppercase mb-6">
          {t.notFound.label}
        </p>
        <h1 className="text-7xl md:text-8xl font-semibold tracking-[-0.02em] leading-[0.9] text-white">
          {t.notFound.title}
        </h1>
        <p className="mt-6 text-sm md:text-base text-white/40 max-w-sm">
          {t.notFound.text}
        </p>
        <Link
          href={home}
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-sm text-white/80 hover:bg-white/[0.05] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.notFound.back}
        </Link>
      </div>
    </main>
  )
}
