'use client'

import { ArrowLeft, ArrowUpRight, LockKeyhole, Radio, Sparkles } from 'lucide-react'

type ProjectKey = 'ritzcredentials' | 'offline-mesh-messenger'

const content = {
  ritzcredentials: {
    title: 'RitzCredentials',
    subtitle: 'A secure document-storage and credential-management project designed to keep important information organized, private, and easy to access.',
    icon: LockKeyhole,
    features: ['Secure document storage', 'Credential organization', 'Private, easy access'],
    technologies: ['Web App', 'Security-focused UX'],
    overview: 'RitzCredentials is being shaped as a focused space for storing and managing documents and credentials with a clear, privacy-conscious experience.',
    status: 'In progress',
  },
  'offline-mesh-messenger': {
    title: 'Offline Mesh Messenger',
    subtitle: 'An offline nearby-device messaging concept exploring communication without internet or centralized servers.',
    icon: Radio,
    features: ['Nearby-device messaging concept', 'Offline-first communication direction', 'Exploration of decentralized connection'],
    technologies: ['Android', 'Nearby connectivity', 'Planned technology'],
    overview: 'This concept looks at how nearby devices could exchange messages directly, creating a communication experience that remains useful when internet access is unavailable.',
    status: 'In progress',
  },
} as const

export function ProjectDetailOverlay({ project, onBack }: { project: ProjectKey; onBack: () => void }) {
  const item = content[project]
  const Icon = item.icon
  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-background/98 px-5 py-6 opacity-100 transition-opacity duration-200 md:px-8 md:py-8">
      <div className="pointer-events-none fixed inset-0 -z-10"><div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" /><div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" /></div>
      <div className="mx-auto max-w-6xl">
        <button type="button" onClick={onBack} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"><ArrowLeft className="size-4" /> Back to Portfolio</button>
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Project introduction</p><h1 className="mt-4 max-w-4xl font-display text-5xl font-bold tracking-tight text-balance md:text-7xl">{item.title}</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{item.subtitle}</p></div><div className="glass relative overflow-hidden rounded-3xl p-6"><Icon className="relative size-8 text-primary" /><p className="relative mt-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">Current status</p><p className="relative mt-2 text-2xl font-semibold">{item.status}</p></div></section>
        <section className="mt-10 grid gap-5 md:grid-cols-2"><div className="glass rounded-3xl p-6 md:p-8"><div className="flex items-center gap-3"><Sparkles className="size-5 text-primary" /><h2 className="font-display text-2xl font-semibold">Project overview</h2></div><p className="mt-5 leading-relaxed text-muted-foreground">{item.overview}</p>{project === 'offline-mesh-messenger' && <><h2 className="mt-8 font-display text-2xl font-semibold">How the concept works</h2><p className="mt-4 leading-relaxed text-muted-foreground">The idea centers on nearby-device communication and a mesh-like approach rather than relying on a centralized online service. The implementation is still being explored.</p></>}</div><div className="glass rounded-3xl p-6 md:p-8"><h2 className="font-display text-2xl font-semibold">Key features</h2><ul className="mt-5 grid gap-3">{item.features.map((feature) => <li key={feature} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-muted-foreground">{feature}</li>)}</ul></div></section>
        <section className="mt-5 grid gap-5 md:grid-cols-[0.8fr_1.2fr]"><div className="glass rounded-3xl p-6 md:p-8"><h2 className="font-display text-2xl font-semibold">Technologies</h2><div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <span key={tech} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">{tech}</span>)}</div>{project === 'ritzcredentials' ? <a href="https://archivio-s-project-oyaa9xbwj-archiviovault-3657s-projects.vercel.app/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground">RitzCredentials <ArrowUpRight className="size-4" /></a> : <button type="button" disabled className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-muted-foreground">Project link coming later <ArrowUpRight className="size-4" /></button>}</div><div className="glass rounded-3xl p-6 md:p-8"><h2 className="font-display text-2xl font-semibold">Screenshots & visuals</h2><div className="mt-5 flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-center text-sm text-muted-foreground">Project screenshots can be added here.</div></div></section>
      </div>
    </div>
  )
}
