import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { EVENTS, useJoyride } from 'react-joyride'
import { TourTooltip } from '@/components/layout/TourTooltip'
import { TourContext } from '@/context/tour-context'
import { getTourSteps, hasSeenTour, markTourSeen } from '@/lib/tour'

export function TourProvider({ children }: { children: ReactNode }) {
  const [run, setRun] = useState(false)
  const steps = useMemo(() => getTourSteps(), [])

  const { Tour, controls } = useJoyride({
    steps,
    run,
    continuous: true,
    scrollToFirstStep: false,
    tooltipComponent: TourTooltip,
    locale: {
      back: 'Back',
      close: 'Skip',
      last: 'Done',
      next: 'Next',
      skip: 'Skip',
      nextWithProgress: 'Next',
    },
    options: {
      skipBeacon: true,
      showProgress: true,
      buttons: ['skip', 'back', 'primary'],
      closeButtonAction: 'skip',
      overlayClickAction: false,
      dismissKeyAction: false,
      blockTargetInteraction: true,
      spotlightRadius: 0,
      spotlightPadding: 8,
      scrollDuration: 280,
      scrollOffset: 96,
      offset: 16,
      overlayColor: 'rgba(38, 34, 31, 0.38)',
      backgroundColor: '#fbf7ee',
      arrowColor: '#fbf7ee',
      textColor: '#26221f',
      primaryColor: '#26221f',
      zIndex: 80,
      width: 320,
    },
    onEvent: (event) => {
      if (event.type === EVENTS.SCROLL_END || event.type === EVENTS.TOOLTIP) {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new Event('resize'))
        })
      }
      if (event.type === EVENTS.TOUR_END) {
        markTourSeen()
        setRun(false)
      }
    },
  })

  const start = useCallback(() => {
    setRun(true)
    controls.reset(true)
  }, [controls])

  useEffect(() => {
    document.documentElement.classList.toggle('tour-running', run)
    return () => document.documentElement.classList.remove('tour-running')
  }, [run])

  useEffect(() => {
    if (hasSeenTour()) return
    const timer = window.setTimeout(() => setRun(true), 600)
    return () => window.clearTimeout(timer)
  }, [])

  const value = useMemo(() => ({ start }), [start])

  return (
    <TourContext.Provider value={value}>
      {children}
      {Tour}
    </TourContext.Provider>
  )
}
