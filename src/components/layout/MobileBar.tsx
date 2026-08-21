import { useEffect, useRef } from 'react'
import { useSite } from '@/context/site-context'
import { scrollToSection } from '@/lib/scroll-to-section'
import { cn } from '@/lib/utils'
import { SoundToggle } from './SoundToggle'
import { TourToggle } from './TourToggle'
import type { SectionId } from '@/data'

/** The small-screen version of the index column: a name row and a strip of tabs. */
export function MobileBar({ active }: { active: SectionId }) {
  const { sections } = useSite()
  const stripRef = useRef<HTMLUListElement>(null)

  // The strip overflows on a phone, so keep the current tab in view while reading.
  useEffect(() => {
    const strip = stripRef.current
    const tab = strip?.querySelector<HTMLElement>(`[data-tab="${active}"]`)
    if (!strip || !tab) return

    const offset = tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2
    strip.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' })
  }, [active])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/12 bg-paper/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-between gap-4 px-5 pt-2.5">
        <button
          type="button"
          onClick={() => scrollToSection('cover')}
          data-sound-note="0"
          className="font-display text-[0.9375rem] font-semibold leading-none tracking-tight"
        >
          Tejas Solanki
        </button>
        <div className="flex shrink-0 items-center gap-3">
          <TourToggle compact />
          <SoundToggle className="shrink-0" />
        </div>
      </div>

      <nav aria-label="Sections" data-tour="nav">
        <ul
          ref={stripRef}
          className="flex gap-3.5 overflow-x-auto px-5 pb-2 pt-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((section, index) => {
            const isActive = active === section.id
            return (
              <li key={section.id} className="shrink-0">
                <button
                  type="button"
                  data-tab={section.id}
                  data-sound-note={index}
                  onClick={() => scrollToSection(section.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className="flex items-center gap-1.5 pb-1"
                >
                  <span
                    className={cn(
                      'font-mono text-[0.5625rem] tabular-nums',
                      isActive ? 'text-margin' : 'text-ink-faint',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'font-display text-[0.875rem] transition-colors',
                      isActive
                        ? 'font-semibold text-ink shadow-[inset_0_-0.45em_0_rgba(226,155,18,0.35)]'
                        : 'text-ink-faint',
                    )}
                  >
                    {section.tab}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
