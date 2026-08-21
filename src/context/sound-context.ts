import { createContext, useContext } from 'react'
import type { SoundName } from '@/lib/sound'

export type SoundControls = {
  enabled: boolean
  toggle: () => void
  play: (name: SoundName, note?: number) => void
}

export const SoundContext = createContext<SoundControls | null>(null)

export function useSound(): SoundControls {
  const value = useContext(SoundContext)
  if (!value) {
    throw new Error('useSound must be used inside <SoundProvider>')
  }
  return value
}
