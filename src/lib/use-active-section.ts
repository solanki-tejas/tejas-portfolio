import { useEffect, useState } from 'react'
import type { SectionId } from '@/data'

/**
 * Tracks which notebook section is currently being read. Picks the entry
 * closest to the top of the viewport so short sections still register.
 */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        const first = visible[0]
        if (first) {
          setActive(first.target.id as SectionId)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
