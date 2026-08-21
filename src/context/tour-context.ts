import { createContext, useContext } from 'react'

export type TourControls = {
  start: () => void
}

export const TourContext = createContext<TourControls | null>(null)

export function useTour(): TourControls {
  const value = useContext(TourContext)
  if (!value) {
    throw new Error('useTour must be used inside <TourProvider>')
  }
  return value
}
