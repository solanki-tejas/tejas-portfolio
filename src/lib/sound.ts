/**
 * Tiny synthesised UI sounds. Everything is generated with the Web Audio API,
 * so there are no audio files to load. Tones are quiet, filtered, and decay
 * quickly — closer to a soft wooden click than a notification chime.
 */

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
}

const SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5] // C major pentatonic

export type SoundName = 'tap' | 'link' | 'copy' | 'soundOn' | 'soundOff'

let context: AudioContext | null = null
let master: GainNode | null = null

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null

  if (!context) {
    const Ctor = window.AudioContext ?? window.webkitAudioContext
    if (!Ctor) return null

    context = new Ctor()
    master = context.createGain()
    master.gain.value = 0.09

    // Roll off the highs so nothing ever sounds sharp.
    const softener = context.createBiquadFilter()
    softener.type = 'lowpass'
    softener.frequency.value = 2200
    softener.Q.value = 0.4

    master.connect(softener)
    softener.connect(context.destination)
  }

  if (context.state === 'suspended') {
    void context.resume()
  }

  return context
}

type ToneOptions = {
  freq: number
  at?: number
  duration?: number
  gain?: number
  type?: OscillatorType
}

function tone({ freq, at = 0, duration = 0.5, gain = 1, type = 'triangle' }: ToneOptions) {
  const ctx = getContext()
  if (!ctx || !master) return

  const start = ctx.currentTime + at
  const osc = ctx.createOscillator()
  const envelope = ctx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, start)

  envelope.gain.setValueAtTime(0.0001, start)
  envelope.gain.exponentialRampToValueAtTime(gain, start + 0.012)
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration)

  osc.connect(envelope)
  envelope.connect(master)
  osc.start(start)
  osc.stop(start + duration + 0.02)
}

/**
 * Plays a sound. `note` picks a step of the pentatonic scale, so walking down
 * the navigation plays a rising phrase instead of the same blip each time.
 */
export function playSound(name: SoundName, note = 0) {
  switch (name) {
    case 'tap': {
      const freq = SCALE[Math.abs(note) % SCALE.length]
      tone({ freq, duration: 0.42, gain: 0.5 })
      tone({ freq: freq * 2, duration: 0.24, gain: 0.12, type: 'sine' })
      break
    }
    case 'link':
      tone({ freq: SCALE[2], duration: 0.34, gain: 0.34 })
      break
    case 'copy':
      tone({ freq: SCALE[1], duration: 0.22, gain: 0.34 })
      tone({ freq: SCALE[4], at: 0.07, duration: 0.3, gain: 0.28 })
      break
    case 'soundOn':
      tone({ freq: SCALE[0], duration: 0.32, gain: 0.36 })
      tone({ freq: SCALE[3], at: 0.09, duration: 0.42, gain: 0.34 })
      break
    case 'soundOff':
      tone({ freq: SCALE[3], duration: 0.3, gain: 0.32 })
      tone({ freq: SCALE[0], at: 0.09, duration: 0.4, gain: 0.28 })
      break
  }
}
