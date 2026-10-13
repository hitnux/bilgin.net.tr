import type { Metadata } from 'next'
import { getLegalContent } from '@/lib/legal-i18n'
import { LegalPage } from '@/components/sections/LegalPage'

export function generateMetadata(): Metadata {
  const content = getLegalContent('tr', 'privacy')
  return { title: `${content.title} — Bilgin`, description: content.description }
}

export default function TrPrivacyPage() {
  return <LegalPage lang="tr" page="privacy" />
}
