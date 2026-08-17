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
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 max-md:border-white/10 max-md:bg-background/85 max-md:backdrop-blur-2xl',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 md:px-6',
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

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass relative z-[80] flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && <div className="fixed inset-0 z-[40] bg-background/60 backdrop-blur-sm md:hidden" aria-hidden="true" />}

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-4 bottom-4 top-24 z-[70] max-h-[calc(100dvh-7.5rem)] origin-top overflow-y-auto overscroll-contain transition-all duration-300 md:hidden',
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0',
        )}
      >
        <ul className="glass glow-ring flex min-h-full flex-col gap-2 rounded-3xl border-white/15 bg-background/90 p-3 shadow-2xl backdrop-blur-2xl">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-foreground transition-colors hover:bg-white/5"
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
      </div>
    </header>
  )
}
