import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { StarField } from '@/components/ui/StarField'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { JsonLd } from '@/components/layout/JsonLd'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-sans',
})

const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bilgin.net.tr'),
  title: 'Bilgin',
  description:
    'Kendi ürünlerimizi geliştiriyoruz — web ve mobil uygulamalar, UI/UX tasarım ve 3D modelleme. Seçili modeller Pazarora\'da satışta.',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang?: string }>
}>) {
  const { lang: rawLang } = await params
  const lang: Locale = locales.includes(rawLang as Locale) ? (rawLang as Locale) : defaultLocale

  return (
    <html lang={lang} className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${comfortaa.variable} antialiased`}
        style={
          maintenance
            ? {
                height: '100vh',
                overflow: 'hidden',
                margin: 0,
                touchAction: 'none',
              }
            : undefined
        }
      >
        <CustomCursor />
        {!maintenance && <StarField />}
        {!maintenance && <ScrollToTop />}
        {!maintenance && <Navbar lang={lang} />}
        <main className="min-h-screen">{children}</main>
        {!maintenance && <Footer lang={lang} />}
      </body>
    </html>
  )
}
