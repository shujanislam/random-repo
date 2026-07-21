'use client'

import { useEffect } from 'react'

/**
 * Freezes background scrolling while an overlay is open, compensating for the
 * scrollbar width so the page doesn't shift sideways as it locks.
 */
export function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight
    const scrollbar = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
    }
  }, [active])
}
