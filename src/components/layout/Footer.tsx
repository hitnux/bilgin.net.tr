import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Bilgin
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              Gizlilik
            </Link>
            <Link
              href="#"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              KVKK
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
