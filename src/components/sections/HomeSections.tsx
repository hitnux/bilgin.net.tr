'use client'

import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Model3D } from '@/components/sections/Model3D'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import type { Locale } from '@/lib/i18n'

export function HomeSections({ lang }: { lang: Locale }) {
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
