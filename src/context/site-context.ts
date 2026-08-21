import { createContext, useContext } from 'react'
import type {
  Education,
  Experience,
  PackageItem,
  Profile,
  Project,
  SectionMeta,
  SkillGroup,
} from '@/data'

export type SiteContent = {
  profile: Profile
  skills: SkillGroup[]
  experience: Experience[]
  education: Education[]
  projects: Project[]
  packages: PackageItem[]
  sections: SectionMeta[]
}

export const SiteContext = createContext<SiteContent | null>(null)

export function useSite(): SiteContent {
  const value = useContext(SiteContext)
  if (!value) {
    throw new Error('useSite must be used inside <SiteProvider>')
  }
  return value
}
