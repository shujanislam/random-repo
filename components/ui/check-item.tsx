import { Check } from 'lucide-react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * A tick and a line of text. The tick sits in a filled blue disc rather than
 * being a bare glyph — a gold or pale-blue outline icon on white would fall
 * below the 3:1 contrast floor for meaningful graphics.
 */
export function CheckItem({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode
  onDark?: boolean
  className?: string
}) {
  return (
    <li className={cn('flex items-start gap-3', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
          onDark ? 'bg-accent text-neutral-950' : 'bg-brand-500 text-white',
        )}
      >
        <Check className="size-3" strokeWidth={3} />
      </span>
      <span className={cn('leading-relaxed', onDark ? 'text-white/80' : 'text-neutral-700')}>
        {children}
      </span>
    </li>
  )
}
