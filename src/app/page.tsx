'use client'

import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Testimonial } from '@/components/sections/Testimonial'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero font="comfortaa" />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <About />
      <Testimonial />
      <Contact />
    </>
  )
}
