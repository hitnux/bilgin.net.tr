'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const categories = ['Tümü', 'Web', 'Mobil', 'Tasarım']

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern e-ticaret çözümü, özel tasarım ve ödeme entegrasyonu.',
    category: 'Web',
    year: '2024',
  },
  {
    title: 'Restoran Uygulaması',
    description: 'Sipariş ve rezervasyon yönetimi için mobil uygulama.',
    category: 'Mobil',
    year: '2024',
  },
  {
    title: 'Kurumsal Web Sitesi',
    description: 'Şirket tanıtım sitesi, CMS entegrasyonu ve SEO optimizasyonu.',
    category: 'Web',
    year: '2023',
  },
  {
    title: 'Marka Kimliği',
    description: 'Logo, renk paleti ve kurumsal kimlik tasarımı.',
    category: 'Tasarım',
    year: '2023',
  },
  {
    title: 'Stok Yönetimi',
    description: 'Depo ve stok takip sistemi, barkod entegrasyonu.',
    category: 'Web',
    year: '2023',
  },
  {
    title: 'Eğitim Platformu',
    description: 'Online eğitim ve sertifikasyon sistemi.',
    category: 'Web',
    year: '2024',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered =
    activeCategory === 'Tümü'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projeler" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground tracking-[0.2em] uppercase mb-4">
            Projelerimiz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Sonework</h2>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground'
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background border-border hover:border-muted-foreground/30 transition-colors h-full cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-foreground transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
