'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-float absolute right-[-60px] top-1/3 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[110px]" />
        <div className="animate-float absolute bottom-0 left-[-40px] h-[280px] w-[280px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Web Developer &amp; Video Editor
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
              Hi, I&apos;m{' '}
              <span className="text-gradient text-glow-blue">Rohit</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              I build modern, high-performance websites and craft engaging video
              edits that people remember. Design, code, and motion — brought
              together into experiences that feel premium.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="glow-ring group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: '5+', v: 'Projects Built' },
                { k: '3+', v: 'Years Creating' },
                { k: '100%', v: 'Passion Driven' },
              ].map((stat) => (
                <div key={stat.v}>
                  <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {stat.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground md:text-sm">
                    {stat.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
