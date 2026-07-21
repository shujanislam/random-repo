'use client'

import { useEffect, useState, type RefObject } from 'react'

/**
 * One IntersectionObserver shared by every subscriber on the page, rather than
 * one per element. With ~30 reveal targets that is 30 observers saved, and the
 * callback map is a WeakMap so nothing leaks when a node unmounts.
 */
const callbacks = new WeakMap<Element, () => void>()
let observer: IntersectionObserver | null = null

function sharedObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        // Reveal is a one-shot effect — stop watching once it has fired.
        observer?.unobserve(entry.target)
        callbacks.delete(entry.target)
      }
    },
    // threshold 0 (any pixel) rather than a ratio: a ratio can never be met by
    // an element taller than the viewport, which would strand it hidden. The
    // negative bottom margin is what delays the trigger until it is properly
    // in view.
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  )
  return observer
}

/** True once `ref`'s element has scrolled into view. Never flips back. */
export function useInView(ref: RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    // Effects only run in the browser, and IntersectionObserver has been
    // universally supported there for years — no feature test needed. Clients
    // without JavaScript are handled in CSS (`scripting: enabled`).
    callbacks.set(element, () => setInView(true))
    const io = sharedObserver()
    io.observe(element)

    return () => {
      io.unobserve(element)
      callbacks.delete(element)
    }
  }, [ref, inView])

  return inView
}
