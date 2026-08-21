import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { playSound, type SoundName } from '@/lib/sound'
import { SoundContext, type SoundControls } from './sound-context'

const STORAGE_KEY = 'tejas-portfolio:sound'

function readPreference(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(STORAGE_KEY) !== 'off'
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(readPreference)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off')
  }, [enabled])

  const play = useCallback(
    (name: SoundName, note = 0) => {
      if (!enabled) return
      playSound(name, note)
    },
    [enabled],
  )

  const toggle = useCallback(() => {
    setEnabled((current) => {
      // Play the confirmation either way, so turning sound off still says goodbye.
      playSound(current ? 'soundOff' : 'soundOn')
      return !current
    })
  }, [])

  const value = useMemo<SoundControls>(
    () => ({ enabled, toggle, play }),
    [enabled, toggle, play],
  )

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}
