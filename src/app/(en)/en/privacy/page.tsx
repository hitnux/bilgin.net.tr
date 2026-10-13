import type { Metadata } from 'next'
import { getLegalContent } from '@/lib/legal-i18n'
import { LegalPage } from '@/components/sections/LegalPage'

export function generateMetadata(): Metadata {
  const content = getLegalContent('en', 'privacy')
  return { title: `${content.title} — Bilgin`, description: content.description }
}

export default function EnPrivacyPage() {
  return <LegalPage lang="en" page="privacy" />
}
