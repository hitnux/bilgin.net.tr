'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Box } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

export function Model3D() {
  return (
    <section id="3d" className="py-20 md:py-28 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] text-white/30 tracking-[0.25em] uppercase mb-4">
                3D Modelleme
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Fikirden modele,
                <br />
                modelden satışa
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
                Ürün görselleştirme, prototip ve baskıya hazır 3D model
                çalışmaları yapıyoruz. Seçtiğimiz modelleri kendi e-ticaret
                altyapımız{' '}
                <a
                  href="https://pazarora.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors"
                >
                  Pazarora
                </a>{' '}
                üzerinden satışa sunuyoruz — ödeme sisteminden teslimata kadar
                altyapı tamamen bizim.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  'Ürün Görselleştirme',
                  'Baskıya Hazır Model',
                  'Prototip',
                  'Pazarora\'da Satışta',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-xs rounded-full border border-white/10 text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <motion.a
                href="https://pazarora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="aspect-[4/3] flex flex-col justify-between p-8"
                  style={{
                    background:
                      'linear-gradient(135deg, #1f1c2c 0%, #2c3e50 100%)',
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">
                      <Box className="h-5 w-5 text-white/70" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white">
                      Pazarora
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      Kıyafet kalıpları ve 3D modeller satışta
                    </p>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
