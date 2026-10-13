import ComingSoon from '@/components/sections/ComingSoon'
import { HomeSections } from '@/components/sections/HomeSections'

export default function TrHomePage() {
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'
  if (maintenance) return <ComingSoon />
  return <HomeSections lang="tr" />
}
