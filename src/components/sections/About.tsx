'use client'

import { motion } from 'framer-motion'
import { Award, Users, Coffee, Zap } from 'lucide-react'

const stats = [
  { icon: Award, value: '5+', label: 'Yıl Deneyim' },
  { icon: Users, value: '50+', label: 'Mutlu Müşteri' },
  { icon: Coffee, value: '100+', label: 'Tamamlanan Proje' },
  { icon: Zap, value: '7/24', label: 'Destek' },
]

export function About() {
  return (
    <section id="hakkinda" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">
              Hakkımızda
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Teknolojiyi sanata dönüştürüyoruz
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bilgin Yazılım ve Tasarım olarak, işletmelerin dijital
              ihtiyaçlarını modern ve yenilikçi çözümlerle karşılıyoruz.
              Deneyimli ekibimizle her projede mükemmelliği hedefliyoruz.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Müşterilerimizin başarısı bizim başarımızdır. Her projede
              yakın iş birliği, şeffaf iletişim ve zamanında teslimat
              prensiplerine bağlı kalıyoruz.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-6 border border-border rounded-lg hover:border-muted-foreground/30 transition-colors"
              >
                <stat.icon className="h-6 w-6 mb-3 text-muted-foreground" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
