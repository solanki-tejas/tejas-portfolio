import { Volume2, VolumeX } from 'lucide-react'
import { useSound } from '@/context/sound-context'
import { cn } from '@/lib/utils'

export function SoundToggle({ className }: { className?: string }) {
  const { enabled, toggle } = useSound()

  return (
    <button
      type="button"
      data-sound="none"
      onClick={toggle}
      aria-pressed={enabled}
      title={enabled ? 'Turn interface sound off' : 'Turn interface sound on'}
      className={cn(
        'group inline-flex items-center gap-2.5 font-mono text-micro uppercase transition-colors',
        enabled ? 'text-ink' : 'text-ink-faint hover:text-ink-soft',
        className,
      )}
    >
      <span
        className={cn(
          'flex size-7 items-center justify-center rounded-full border transition-colors',
          enabled
            ? 'border-highlight/60 bg-highlight/12 text-ink'
            : 'border-ink/20 text-ink-faint group-hover:border-ink/35',
        )}
      >
        {enabled ? <Volume2 className="size-3.5" /> : <VolumeX className="size-3.5" />}
      </span>
      <span>Sound {enabled ? 'on' : 'off'}</span>
    </button>
  )
}
