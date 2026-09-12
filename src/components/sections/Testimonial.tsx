'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

export function Testimonial() {
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-6 w-6 text-white/20 mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
              &ldquo;Bilgin ile çalışmak, teknoloji projemizi fikirden
              üretime en hızlı ve en keyifli taşıdığımız süreç oldu.
              Her detay düşünülmüş, her satır kod temiz.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-sm font-medium text-white/80">
                Pazarora Ekibi
              </p>
              <p className="text-xs text-white/30 mt-1">
                E-Ticaret Platformu
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
