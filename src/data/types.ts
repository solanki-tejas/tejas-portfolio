export type Link = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: string
  location: string
  intro: string
  languages: string[]
  email: string
  phone: string
  linkedin: Link
  resumeUrl: string
  resumeFileName: string
}

export type SkillGroup = {
  id: string
  label: string
  items: string[]
}

export type Experience = {
  id: string
  company: string
  title: string
  location: string
  start: string
  end: string
  current: boolean
  bullets: string[]
}

export type Education = {
  id: string
  institution: string
  degree: string
  location: string
  /** Left out for school entries, where only the year it finished is meaningful. */
  start?: string
  end: string
  gradeLabel: string
  grade: string
}

export type Project = {
  id: string
  name: string
  kind: 'personal' | 'client'
  tags: string[]
  summary: string
  highlights: string[]
  stack: string[]
  links: Link[]
}

export type PackageItem = {
  id: string
  name: string
  install: string
  description: string
  points: string[]
  npmUrl: string
}

export type SectionId =
  | 'cover'
  | 'work'
  | 'built'
  | 'packages'
  | 'school'
  | 'notes'
  | 'hello'

export type SectionMeta = {
  id: SectionId
  tab: string
  title: string
  note: string
}
