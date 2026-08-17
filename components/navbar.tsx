'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#creative', label: 'Creative' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] border-b border-transparent transition-all duration-300 max-md:border-white/10 max-md:bg-background/90 max-md:backdrop-blur-2xl',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <nav
        className={cn(
          'relative z-[110] mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 md:px-6',
          scrolled ? 'glass glow-ring mx-4' : 'mx-4 border border-transparent',
        )}
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Rohit<span className="text-primary text-glow-blue">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="glow-ring hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Let&apos;s Talk
        </a>

      </nav>

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="glass absolute right-4 top-3 z-[9999] flex size-11 shrink-0 items-center justify-center rounded-full border-white/20 bg-background/90 text-foreground shadow-lg md:hidden"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && <div className="fixed inset-0 z-[40] bg-background/60 backdrop-blur-sm md:hidden" aria-hidden="true" />}

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-4 bottom-4 top-24 z-[9990] max-h-[calc(100dvh-7.5rem)] overflow-y-auto overscroll-contain md:hidden"
        >
          <ul className="glass glow-ring flex min-h-full flex-col gap-2 rounded-3xl border border-white/15 bg-background/95 p-3 shadow-2xl backdrop-blur-2xl">
            {links.map((link) => (
              <li key={link.href} className="w-full">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 w-full items-center rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/10 active:bg-white/15"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
