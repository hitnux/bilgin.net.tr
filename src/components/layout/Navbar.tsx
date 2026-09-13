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
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl saturate-150 border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-white/70 origin-left"
        style={{ scaleX: progress }}
      />

      <nav
        className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2.5 hover:opacity-70 transition-opacity duration-300"
          aria-label="Bilgin — ana sayfa"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/[0.06] border border-white/30 text-white text-sm font-bold leading-none">
            b
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            bilgin
          </span>
        </Link>

        {/* Desktop — Apple nav: small, evenly weighted */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/60 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} />

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden"
              render={<Button variant="ghost" size="icon" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-black/95 backdrop-blur-xl border-white/10">
              <div className="flex flex-col gap-7 mt-10">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group relative text-lg text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-[10px] text-white/25 mr-3 font-mono">
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
