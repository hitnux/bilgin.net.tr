import type { Metadata } from 'next'
import { getLegalContent } from '@/lib/legal-i18n'
import { LegalPage } from '@/components/sections/LegalPage'

export function generateMetadata(): Metadata {
  const content = getLegalContent('en', 'legal')
  return { title: `${content.title} — Bilgin`, description: content.description }
}

export default function EnLegalPage() {
  return <LegalPage lang="en" page="legal" />
}
