import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * A hardware bezel drawn in CSS. Decorative by definition — the screen
 * content passed as children carries all the meaning.
 */
export function PhoneFrame({
  children,
  className,
  notch = true,
}: {
  children: ReactNode
  className?: string
  /**
   * Off when the screen content is a screenshot short enough that the frame
   * has been sized down to it — the cutout would land on the content.
   */
  notch?: boolean
}) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19.5] w-[272px] rounded-[2.75rem] bg-neutral-900 p-2.5 shadow-2xl shadow-neutral-900/25 ring-1 ring-white/10 sm:w-[320px] sm:rounded-[3rem] sm:p-3',
        className,
      )}
    >
      <span aria-hidden="true">
        <span className="absolute -left-[3px] top-[14%] h-8 w-[3px] rounded-l bg-neutral-700" />
        <span className="absolute -left-[3px] top-[21%] h-12 w-[3px] rounded-l bg-neutral-700" />
        <span className="absolute -left-[3px] top-[30%] h-12 w-[3px] rounded-l bg-neutral-700" />
        <span className="absolute -right-[3px] top-[24%] h-16 w-[3px] rounded-r bg-neutral-700" />
      </span>

      <div className="relative h-full w-full overflow-hidden rounded-[2.125rem] bg-white sm:rounded-[2.375rem]">
        {children}
        {notch ? (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-2.5 h-6 w-20 -translate-x-1/2 rounded-full bg-neutral-900 sm:h-7 sm:w-24"
          />
        ) : null}
      </div>
    </div>
  )
}
