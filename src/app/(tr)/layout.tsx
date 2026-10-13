import type { Metadata } from 'next'
import { RootShell } from '@/components/layout/RootShell'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/layout/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://bilgin.net.tr'),
  title: 'Bilgin',
  description:
    'Kendi ürünlerimizi geliştiriyoruz — web ve mobil uygulamalar, UI/UX tasarım ve 3D modelleme. Seçili modeller Pazarora\'da satışta.',
}

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="tr">
      <Navbar lang="tr" />
      {children}
      <Footer lang="tr" />
      <JsonLd lang="tr" />
    </RootShell>
  )
}
