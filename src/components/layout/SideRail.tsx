import { Download } from 'lucide-react'
import { useSite } from '@/context/site-context'
import { scrollToSection } from '@/lib/scroll-to-section'
import { cn } from '@/lib/utils'
import { SoundToggle } from './SoundToggle'
import type { SectionId } from '@/data'

/** The notebook's index column: name, numbered tabs, and the two things worth clicking. */
export function SideRail({ active }: { active: SectionId }) {
  const { profile, sections } = useSite()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-rail flex-col gap-10 overflow-y-auto border-r border-ink/12 px-8 py-9 2xl:px-10 lg:flex">
      <div className="shrink-0">
        <button
          type="button"
          onClick={() => scrollToSection('cover')}
          data-sound-note="0"
          className="text-left"
        >
          <span className="block font-display text-[1.4375rem] font-semibold leading-[0.98] tracking-tight">
            Tejas
          </span>
          <span className="block font-display text-[1.4375rem] font-semibold leading-[0.98] tracking-tight">
            Solanki
          </span>
        </button>
        <p className="mt-2.5 font-mono text-micro uppercase text-ink-faint">{profile.role}</p>
      </div>

      <nav aria-label="Sections" className="my-auto shrink-0">
        <ul className="space-y-0.5">
          {sections.map((section, index) => {
            const isActive = active === section.id
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  data-sound-note={index}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex w-full items-center gap-3 py-1.5 text-left"
                >
                  <span
                    className={cn(
                      'font-mono text-micro tabular-nums transition-colors',
                      isActive ? 'text-margin' : 'text-ink-faint group-hover:text-ink-soft',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-display text-[0.9375rem] transition-colors',
                      isActive
                        ? 'font-semibold text-ink'
                        : 'text-ink-soft group-hover:text-ink',
                    )}
                  >
                    {section.tab}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      'ml-auto h-px flex-1 transition-colors',
                      isActive ? 'bg-highlight' : 'bg-ink/12 group-hover:bg-ink/25',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Both children are inline-flex, so this has to be a flex column to space them */}
      <div className="flex shrink-0 flex-col items-start gap-4">
        <SoundToggle />
        <a href={profile.resumeUrl} download={profile.resumeFileName} className="stamp-button">
          <Download aria-hidden className="size-3.5" />
          Resume
        </a>
      </div>
    </aside>
  )
}
