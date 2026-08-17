import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rohit — Web Developer & Video Editor',
  description:
    'Portfolio of Rohit, a web developer and video editor building modern websites and crafting engaging, visually striking video edits.',
  generator: 'v0.app',
  keywords: [
    'Rohit',
    'Web Developer',
    'Video Editor',
    'UI/UX',
    'Portfolio',
    'Graphic Design',
  ],
  openGraph: {
    title: 'Rohit — Web Developer & Video Editor',
    description:
      'Modern websites and engaging video edits by Rohit. Explore projects, skills, and creative work.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
