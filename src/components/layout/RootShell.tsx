import { Comfortaa } from 'next/font/google'
import '@/app/globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { StarField } from '@/components/ui/StarField'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import type { Locale } from '@/lib/i18n'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-sans',
})

const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

export function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className="dark">
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
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
