import type { Metadata } from 'next'
import ComingSoon from '@/components/sections/ComingSoon'
import { HomeSections } from '@/components/sections/HomeSections'

export const metadata: Metadata = {
  title: 'Bilgin',
  description: 'We build our own products — web and mobile apps, UI/UX design and 3D modeling.',
}

export default function EnHomePage() {
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'
  if (maintenance) return <ComingSoon />
  return <HomeSections lang="en" />
}
