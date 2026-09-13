'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LangToggle } from '@/components/ui/LangToggle'
import { getDictionary, type Locale } from '@/lib/i18n'

export function Navbar({ lang }: { lang: Locale }) {
  const t = getDictionary(lang)
  const navLinks = [
    { href: '#hizmetler', label: t.nav.services },
    { href: '#projeler', label: t.nav.projects },
    { href: '#hakkinda', label: t.nav.about },
    { href: '#iletisim', label: t.nav.contact },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-white origin-left"
        style={{ scaleX: progress }}
      />

      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          Bilgin
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[13px] text-white/50 hover:text-white transition-colors"
            >
              <span className="text-[10px] text-white/25 mr-1">
                0{i + 1}
              </span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Language toggle */}
        <div className="flex items-center gap-4">
          <LangToggle lang={lang} />

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" />}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-black border-white/10">
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group relative text-base text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-[10px] text-white/25 mr-2">
                    0{i + 1}
                  </span>
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:mail@bilgin.net.tr"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                mail@bilgin.net.tr
              </a>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  )
}
