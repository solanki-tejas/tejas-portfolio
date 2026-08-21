import { useMemo } from 'react'
import { ArrowUp } from 'lucide-react'
import { Route, Routes } from 'react-router-dom'
import { MobileBar } from '@/components/layout/MobileBar'
import { NotebookShell } from '@/components/layout/NotebookShell'
import { PaperRule } from '@/components/layout/PaperRule'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SideRail } from '@/components/layout/SideRail'
import { Contact } from '@/components/sections/Contact'
import { EducationSection } from '@/components/sections/EducationSection'
import { Hero } from '@/components/sections/Hero'
import { Packages } from '@/components/sections/Packages'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Work } from '@/components/sections/Work'
import { Button } from '@/components/ui/button'
import { SiteProvider } from '@/context/SiteProvider'
import { SoundProvider } from '@/context/SoundProvider'
import { useSite } from '@/context/site-context'
import { scrollToSection } from '@/lib/scroll-to-section'
import { useActiveSection } from '@/lib/use-active-section'
import { useInteractionSounds } from '@/lib/use-interaction-sounds'

function Notebook() {
  const { profile, sections } = useSite()
  const ids = useMemo(() => sections.map((section) => section.id), [sections])
  const active = useActiveSection(ids)

  useInteractionSounds()

  return (
    <>
      <ScrollProgress />
      <SideRail active={active} />
      <MobileBar active={active} />

      <NotebookShell>
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Packages />
        <EducationSection />
        <Contact />

        <footer className="pb-16 pt-12 lg:pb-24">
          <PaperRule className="mb-8" />
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <p className="font-mono text-caption text-ink-faint">
              {profile.name} · Built with React, Vite, and Tailwind CSS.
            </p>
            <Button variant="ghost" onClick={() => scrollToSection('cover')}>
              <ArrowUp aria-hidden />
              Back to top
            </Button>
          </div>
        </footer>
      </NotebookShell>
    </>
  )
}

export default function App() {
  return (
    <SoundProvider>
      <SiteProvider>
        <Routes>
          <Route path="/" element={<Notebook />} />
        </Routes>
      </SiteProvider>
    </SoundProvider>
  )
}
