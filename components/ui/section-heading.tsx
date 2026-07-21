import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode
  onDark?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.16em] uppercase',
        onDark ? 'text-white/70' : 'text-neutral-500',
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  )
}

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  onDark?: boolean
  align?: 'left' | 'center'
  /** `lg` is reserved for the two or three moments that should feel bigger. */
  size?: 'md' | 'lg'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  onDark = false,
  align = 'left',
  size = 'md',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          'font-semibold tracking-[-0.02em] text-balance',
          size === 'lg'
            ? 'text-[2.125rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]'
            : 'text-3xl leading-[1.12] sm:text-4xl',
          onDark ? 'text-white' : 'text-neutral-900',
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed text-pretty sm:text-lg',
            onDark ? 'text-white/70' : 'text-neutral-600',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}
