import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Bilgin',
  description:
    'Yazılım ve tasarım çözümleriyle işletmenizin dijital dönüşümünü hızlandırıyoruz.',
}

const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

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
            ? { height: '100vh', overflow: 'hidden', margin: 0 }
            : undefined
        }
      >
        <CustomCursor />
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
