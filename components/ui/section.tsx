import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Tone = 'white' | 'muted' | 'dark'

const tones: Record<Tone, string> = {
  white: 'bg-white text-neutral-900',
  muted: 'bg-neutral-50 text-neutral-900',
  dark: 'bg-neutral-950 text-white',
}

type SectionProps = {
  id?: string
  tone?: Tone
  /** Vertical rhythm. Varying this stops the page reading as a stack of equal boxes. */
  spacing?: 'sm' | 'md' | 'lg'
  divider?: boolean
  className?: string
  containerClassName?: string
  'aria-labelledby'?: string
  children: ReactNode
}

const spacings = {
  sm: 'py-16 sm:py-20',
  md: 'py-20 sm:py-28',
  lg: 'py-24 sm:py-36',
} as const

export function Section({
  id,
  tone = 'white',
  spacing = 'md',
  divider = false,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        tones[tone],
        spacings[spacing],
        divider && 'border-t border-neutral-200',
        className,
      )}
      {...rest}
    >
      <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
