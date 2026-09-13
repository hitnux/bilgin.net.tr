import Link from 'next/link'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Footer({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href={`/${lang}`}
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Bilgin
          </Link>

          <div className="flex items-center gap-8">
            <a
              href="https://github.com/hitnux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/hitnux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              X
            </a>
            <Link
              href={`/${lang}/gizlilik`}
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={`/${lang}/kvkk`}
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              {t.footer.kvkk}
            </Link>
            <a
              href="mailto:mail@bilgin.net.tr"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              mail@bilgin.net.tr
            </a>
          </div>

          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Bilgin
          </p>
        </div>
      </div>
    </footer>
  )
}
