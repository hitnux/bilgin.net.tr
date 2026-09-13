import { notFound } from 'next/navigation'
import ComingSoon from '@/components/sections/ComingSoon'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Model3D } from '@/components/sections/Model3D'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params
  if (!locales.includes(rawLang as Locale)) notFound()
  const lang: Locale = (rawLang as Locale) || defaultLocale

  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

  if (maintenance) {
    return <ComingSoon />
  }

  return (
    <>
      <Hero font="comfortaa" lang={lang} />
      <Marquee lang={lang} />
      <Services lang={lang} />
      <Projects lang={lang} />
      <Model3D lang={lang} />
      <Process lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
    </>
  )
}
