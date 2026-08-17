'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const projectRoutes = [
  '/projects/ritzcredentials',
  '/projects/offline-mesh-messenger',
]

export function ProjectPreloader() {
  const router = useRouter()

  useEffect(() => {
    for (const route of projectRoutes) router.prefetch(route)
  }, [router])

  return null
}
