'use client'

import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero font="comfortaa" />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
