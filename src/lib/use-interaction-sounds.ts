import { useEffect } from 'react'
import { useSound } from '@/context/sound-context'

/**
 * Gives every link and button a click sound without wiring a handler into each
 * one. Elements can opt out with `data-sound="none"`, or pick a scale step with
 * `data-sound-note`.
 */
export function useInteractionSounds() {
  const { play } = useSound()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const trigger = target?.closest<HTMLElement>('a, button, [data-sound]')
      if (!trigger) return

      const kind = trigger.dataset.sound
      if (kind === 'none') return

      const note = Number(trigger.dataset.soundNote ?? 0)
      play(kind === 'link' ? 'link' : 'tap', Number.isFinite(note) ? note : 0)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [play])
}
