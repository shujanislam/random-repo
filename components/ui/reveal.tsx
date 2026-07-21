'use client'

import { useRef, type CSSProperties, type ReactNode } from 'react'

import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  /** Milliseconds of stagger. Keep under ~240ms so nothing feels sluggish. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. The animation lives entirely in CSS (`.reveal` in globals.css) — this
 * component only flips a data attribute, and honours prefers-reduced-motion
 * and no-JS clients through that stylesheet.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={cn('reveal', className)}
      data-visible={inView}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
