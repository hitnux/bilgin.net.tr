import type { Metadata, Viewport } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { StarField } from '@/components/ui/StarField'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-sans',
})

const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

export const metadata: Metadata = {
  metadataBase: new URL('https://bilgin.net.tr'),
  title: 'Bilgin',
  description:
    'Kendi ürünlerimizi geliştiriyoruz — web ve mobil uygulamalar, UI/UX tasarım ve 3D modelleme. Seçili modeller Pazarora\'da satışta.',
}

export const viewport: Viewport = maintenance
  ? {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    }
  : {}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
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
        {!maintenance && (
          <>
            <Navbar />
            <Footer />
          </>
        )}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
