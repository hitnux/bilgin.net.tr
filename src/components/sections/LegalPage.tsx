import { getLegalContent } from '@/lib/legal-i18n'
import type { Locale } from '@/lib/i18n'

export function LegalPage({ lang, page }: { lang: Locale; page: 'privacy' | 'legal' }) {
  const content = getLegalContent(lang, page)

  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
        <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">{content.label}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">{content.title}</h1>
        <p className="mt-4 text-sm text-white/30">
          {lang === 'tr' ? 'Son güncelleme: Eylül 2026' : 'Last updated: September 2026'}
        </p>
        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-medium text-white/90">{section.title}</h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
