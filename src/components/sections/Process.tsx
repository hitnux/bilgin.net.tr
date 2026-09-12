'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'

const steps = [
  {
    num: '01',
    title: 'Keşif',
    description:
      'İhtiyaçlarınızı dinliyor, hedeflerinizi ve kısıtlarınızı anlıyoruz.',
  },
  {
    num: '02',
    title: 'Tasarım',
    description:
      'Wireframe ve prototiplerle vizyonu somutlaştırıyor, sizinle birlikte şekillendiriyoruz.',
  },
  {
    num: '03',
    title: 'Geliştirme',
    description:
      'Modern teknolojilerle temiz, test edilebilir kod yazıyoruz. Süreç boyunca şeffafız.',
  },
  {
    num: '04',
    title: 'Teslim & Destek',
    description:
      'Zamanında teslim ediyor, yayından sonraki süreçte yanınızda kalıyoruz.',
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
              Süreç
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Nasıl çalışıyoruz
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <motion.div
                className="group relative pt-8 border-t border-white/15"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover line highlight */}
                <div className="absolute top-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-500" />

                <span className="text-[11px] text-white/25 font-mono">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-medium text-white/90">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
