import type { Metadata } from 'next'
import { RootShell } from '@/components/layout/RootShell'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/layout/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL('https://bilgin.net.tr'),
  title: 'Bilgin',
  description: 'We build our own products — web and mobile apps, UI/UX design and 3D modeling.',
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en">
      <Navbar lang="en" />
      {children}
      <Footer lang="en" />
      <JsonLd lang="en" />
    </RootShell>
  )
}
