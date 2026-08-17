'use client'

import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Film,
  GitBranch,
  Camera,
  Layers3,
  Mail,
  MessageCircle,
  Palette,
  Play,
  Smartphone,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const skills = [
  { label: 'Web Development', icon: Code2 },
  { label: 'Android Development', icon: Smartphone },
  { label: 'UI / UX Design', icon: Layers3 },
  { label: 'AI Tools', icon: WandSparkles },
  { label: 'Video Editing', icon: Film },
  { label: 'Graphic Design', icon: Palette },
  { label: 'GitHub', icon: GitBranch },
  { label: 'Firebase', icon: Database },
  { label: 'Supabase', icon: Cpu },
]

const projects = [
  {
    title: 'RitzCredentials',
    description: 'A secure document-storage experience designed to keep important credentials organized, private, and easy to access.',
    tags: ['Security', 'Web App'],
    status: 'In progress',
    href: '/projects/ritzcredentials',
    tone: 'from-blue-500/20 via-transparent to-purple-500/20',
  },
  {
    title: 'Offline Mesh Messenger',
    description: 'An offline nearby-device messaging concept exploring communication without internet or centralized servers.',
    tags: ['Android', 'Connectivity'],
    status: 'In progress',
    href: '/projects/offline-mesh-messenger',
    tone: 'from-purple-500/20 via-transparent to-blue-500/20',
  },
  {
    title: 'More Projects',
    description: 'A growing collection of experiments, interfaces, edits, and ideas currently taking shape in the lab.',
    tags: ['Coming soon'],
    status: 'Next up',
    tone: 'from-white/10 via-transparent to-blue-500/10',
  },
]

const creative = [
  { title: 'Video Edits', type: 'Motion & storytelling', image: '/creative/video-edit.png', icon: Play },
  { title: 'Graphic Design', type: 'Visual systems', image: '/creative/graphic-design.png', icon: Palette },
  { title: 'Social Content', type: 'Content that connects', image: '/creative/social-media.png', icon: Sparkles },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background pt-24 md:pt-0">
      <Navbar />
      <Hero />

      <section id="about" className="scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:items-end md:px-6">
          <Reveal><SectionHeading eyebrow="About me" title="Building with intent." /></Reveal>
          <Reveal delay={120}>
            <div className="glass rounded-3xl p-6 md:p-8">
              <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                I&apos;m Rohit — a web developer and video editor who enjoys turning ideas into polished digital experiences. I build modern websites with thoughtful interfaces, and create engaging edits with rhythm, clarity, and personality.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Whether it&apos;s code, motion, or visual design, I care about the details that make something feel effortless to use and impossible to ignore.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <Reveal><SectionHeading eyebrow="Capabilities" title="Tools for the work." /></Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {skills.map(({ label, icon: Icon }, index) => (
              <Reveal key={label} delay={index * 45} as="article" className="glass group rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5">
                <Icon className="size-5 text-primary transition-transform group-hover:scale-110" />
                <p className="mt-8 text-sm font-medium text-foreground">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <Reveal><SectionHeading eyebrow="Selected work" title="Ideas in motion." /></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100} as="article" className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_70px_-30px_oklch(0.65_0.19_258_/_0.7)]">
                {project.href ? (
                  <a href={project.href} className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={`View ${project.title} project introduction`}>
                    <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${project.tone} opacity-60`} />
                    <div className="relative z-10 flex min-h-64 flex-col">
                      <div className="flex items-center justify-between"><span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary">{project.status}</span><ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div>
                      <div className="mt-auto"><div className="mb-4 h-px w-12 bg-primary" /><h3 className="font-display text-2xl font-bold">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs text-foreground/60">#{tag}</span>)}</div></div>
                    </div>
                  </a>
                ) : (
                  <div className="relative z-10 flex min-h-64 flex-col">
                    <div className="flex items-center justify-between"><span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary">{project.status}</span><ArrowUpRight className="size-5 text-muted-foreground" /></div>
                    <div className="mt-auto"><div className="mb-4 h-px w-12 bg-primary" /><h3 className="font-display text-2xl font-bold">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs text-foreground/60">#{tag}</span>)}</div></div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="creative" className="scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-6"><Reveal><SectionHeading eyebrow="Creative work" title="Beyond the browser." /></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{creative.map(({ title, type, image, icon: Icon }, index) => <Reveal key={title} delay={index * 100} as="article" className="group overflow-hidden rounded-3xl border border-border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><img src={image} alt={`${title} showcase`} className="size-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-full bg-background/70 text-primary backdrop-blur"><Icon className="size-4" /></div></div><div className="p-5"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{type}</p></div></Reveal>)}</div></div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 py-24 md:px-6 md:py-32"><Reveal className="mx-auto max-w-6xl"><div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card p-8 md:p-14"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" /><div className="relative"><p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Let&apos;s create</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">Have an idea? Let&apos;s make it real.</h2><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">I&apos;m always open to interesting projects, creative collaborations, and conversations about the web.</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><a href="mailto:ritzpvt3@gmail.com" className="glass group rounded-2xl p-4 transition-transform hover:-translate-y-1" aria-label="Email Rohit at ritzpvt3@gmail.com"><span className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-primary shadow-lg backdrop-blur-xl transition-colors group-hover:bg-primary/15"><Mail className="size-5" /></span><span className="mt-4 block text-sm font-semibold">Email</span><span className="mt-1 block truncate text-xs text-muted-foreground">ritzpvt3@gmail.com</span></a><a href="https://instagram.com/rohitt_sharma5" target="_blank" rel="noreferrer" className="glass group rounded-2xl p-4 transition-transform hover:-translate-y-1" aria-label="Open Rohit's Instagram profile"><span className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-primary shadow-lg backdrop-blur-xl transition-colors group-hover:bg-primary/15"><Camera className="size-5" /></span><span className="mt-4 block text-sm font-semibold">Instagram</span><span className="mt-1 block text-xs text-muted-foreground">rohitt_sharma5</span></a><a href="https://github.com/RohittSharma4" target="_blank" rel="noreferrer" className="glass group rounded-2xl p-4 transition-transform hover:-translate-y-1" aria-label="Open Rohit's GitHub profile"><span className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-primary shadow-lg backdrop-blur-xl transition-colors group-hover:bg-primary/15"><GitBranch className="size-5" /></span><span className="mt-4 block text-sm font-semibold">GitHub</span><span className="mt-1 block text-xs text-muted-foreground">RohittSharma4</span></a><div className="glass rounded-2xl p-4"><span className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-primary shadow-lg backdrop-blur-xl"><MessageCircle className="size-5" /></span><span className="mt-4 block text-sm font-semibold">WhatsApp</span><span className="mt-1 block text-xs text-muted-foreground">@rohitt_sharma45</span><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Search @rohitt_sharma45 in WhatsApp to chat with me.</p></div></div></div></div></Reveal></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-6"><p>© {new Date().getFullYear()} Rohit. Built with intent.</p><div className="flex items-center gap-5"><a href="mailto:ritzpvt3@gmail.com" aria-label="Email Rohit" className="transition-colors hover:text-primary"><Mail className="size-4" /></a><a href="https://instagram.com/rohitt_sharma5" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-primary"><Camera className="size-4" /></a><a href="https://github.com/RohittSharma4" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><GitBranch className="size-4" /></a></div></div></footer>
    </main>
  )
}
