import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-mono text-[0.7rem] tracking-wide transition-colors',
  {
    variants: {
      variant: {
        sage: 'border border-tag-sage/35 bg-tag-sage/10 px-2 py-0.5 text-tag-sage',
        blue: 'border border-tag-blue/35 bg-tag-blue/10 px-2 py-0.5 text-tag-blue',
      },
    },
    defaultVariants: {
      variant: 'sage',
    },
  },
)

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
