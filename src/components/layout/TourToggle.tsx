import { Map } from 'lucide-react'
import { useTour } from '@/context/tour-context'
import { cn } from '@/lib/utils'

/** Opens the page tour again after it has been skipped or finished. */
export function TourToggle({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  const { start } = useTour()

  return (
    <button
      type="button"
      onClick={start}
      title="Take a tour of the page"
      className={cn(
        'group inline-flex items-center gap-2.5 font-mono text-micro uppercase text-ink-faint transition-colors hover:text-ink',
        className,
      )}
    >
      <span className="flex size-7 items-center justify-center rounded-full border border-ink/20 text-ink-faint transition-colors group-hover:border-ink/35 group-hover:text-ink">
        <Map className="size-3.5" />
      </span>
      <span className={compact ? 'sr-only' : undefined}>Tour</span>
    </button>
  )
}
