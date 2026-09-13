import ComingSoon from '@/components/sections/ComingSoon'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Model3D } from '@/components/sections/Model3D'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Page() {
  const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true'

  if (maintenance) {
    return <ComingSoon />
  }

  return (
    <>
      <Hero font="comfortaa" />
      <Marquee />
      <Services />
      <Projects />
      <Model3D />
      <Process />
      <About />
      <Contact />
    </>
  )
}
