'use client'

import { motion } from 'framer-motion'
import { Globe, Code, Smartphone, Palette } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const services = [
  {
    icon: Globe,
    title: 'Web Tasarım',
    description:
      'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. Markanızı dijital dünyada en iyi şekilde temsil ediyoruz.',
  },
  {
    icon: Code,
    title: 'Yazılım Geliştirme',
    description:
      'İhtiyaçlarınıza özel yazılım çözümleri geliştiriyoruz. Web uygulamaları, API\'ler ve entegrasyonlar.',
  },
  {
    icon: Smartphone,
    title: 'Mobil Uygulama',
    description:
      'iOS ve Android için native veya cross-platform mobil uygulamalar geliştiriyoruz.',
  },
  {
    icon: Palette,
    title: 'UI/UX Tasarım',
    description:
      'Kullanıcı deneyimini ön planda tutarak intuitif ve estetik arayüzler tasarlıyoruz.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section id="hizmetler" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Dijital çözümler
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="bg-muted/50 border-border hover:border-muted-foreground/30 transition-colors h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-4 text-foreground" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
