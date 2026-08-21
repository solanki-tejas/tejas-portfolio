import { useEffect, useState } from 'react'
import type { SectionId } from '@/data'

/**
 * Tracks which notebook section is currently being read. Uses a line a little
 * below the top of the viewport: the last section whose heading has crossed
 * that line is the active one. That works the same scrolling up or down, so a
 * shorter section like School cannot be skipped.
 */
export function useActiveSection(ids: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    if (ids.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
      if (elements.length === 0) return

      const line = window.innerHeight * 0.28
      let current = elements[0].id as SectionId

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= line) {
          current = element.id as SectionId
        }
      }

      const scrolledToEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      if (scrolledToEnd) {
        current = elements[elements.length - 1].id as SectionId
      }

      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
