import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  hizmetler: [
    { label: 'Web Tasarım', href: '#hizmetler' },
    { label: 'Yazılım Geliştirme', href: '#hizmetler' },
    { label: 'Mobil Uygulama', href: '#hizmetler' },
    { label: 'UI/UX Tasarım', href: '#hizmetler' },
  ],
  sirket: [
    { label: 'Hakkımızda', href: '#hakkinda' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'İletişim', href: '#iletisim' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              bilgin<span className="text-muted-foreground">.net.tr</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Yazılım ve tasarım çözümleriyle işletmenizin dijital dönüşümünü
              hızlandırıyoruz.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2">
              {footerLinks.sirket.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bilgin Yazılım ve Tasarım. Tüm
            hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              KVKK Aydınlatma
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
