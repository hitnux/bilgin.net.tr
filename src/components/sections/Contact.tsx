'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="iletisim" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">
            İletişim
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Birlikte çalışalım
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Bir projeniz mi var? Fikirlerinizi hayata geçirmek için
            bize ulaşın.
          </p>

          <motion.a
            href="mailto:mail@bilgin.net.tr"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-lg font-medium">mail@bilgin.net.tr</span>
          </motion.a>

          <p className="mt-6 text-sm text-muted-foreground">
            Burdur, Türkiye
          </p>
        </motion.div>
      </div>
    </section>
  )
}
