import { cn } from '@/lib/utils'

/** Hand-drawn looking divider used between notebook pages. */
export function PaperRule({ className }: { className?: string }) {
  return <hr aria-hidden className={cn('rule-hand my-2', className)} />
}
