import { useMemo, type ReactNode } from 'react'
import {
  education,
  experience,
  packages,
  profile,
  projects,
  sections,
  skills,
} from '@/data'
import { SiteContext, type SiteContent } from './site-context'

export function SiteProvider({ children }: { children: ReactNode }) {
  const value = useMemo<SiteContent>(
    () => ({
      profile,
      skills,
      experience,
      education,
      projects,
      packages,
      sections,
    }),
    [],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}
