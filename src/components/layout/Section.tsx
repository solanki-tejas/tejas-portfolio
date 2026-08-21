import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'
import type { SectionId } from '@/data'

type SectionProps = {
  id: SectionId
  index: number
  title: string
  note?: string
  children: ReactNode
  className?: string
}

/**
 * One page of the notebook. The heading runs the full width as a magazine-style
 * opener with a rule trailing off to the right, leaving the whole column for
 * content underneath.
 */
export function Section({ id, index, title, note, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        'scroll-mt-28 border-t border-ink/12 py-11 sm:py-14 lg:scroll-mt-10 lg:py-16',
        className,
      )}
    >
      <Reveal>
        <header className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 lg:mb-10">
          <span className="font-mono text-micro tabular-nums text-margin">
            {String(index).padStart(2, '0')}
          </span>
          <h2 id={`${id}-title`} className="text-display font-semibold">
            {title}
          </h2>
          {note ? (
            <p className="font-hand text-lg text-ink-faint" aria-hidden>
              {note}
            </p>
          ) : null}
          <span aria-hidden className="ml-auto hidden h-px min-w-16 flex-1 bg-ink/15 sm:block" />
        </header>
      </Reveal>

      {children}
    </section>
  )
}
