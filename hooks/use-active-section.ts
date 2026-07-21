'use client'

import { useEffect, useState } from 'react'

/**
 * Scroll-spy built on IntersectionObserver rather than a scroll listener, so
 * nothing reads layout on the main thread while the user scrolls.
 *
 * The root margin collapses the viewport to a thin band around the upper
 * third; whichever section crosses that band is "current". Returns null while
 * the user is above the first tracked section (i.e. in the hero).
 *
 * @param ids Must be referentially stable — hoist it to a module constant.
 */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const intersecting = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id)
          else intersecting.delete(entry.target.id)
        }
        // Document order wins when two sections straddle the band.
        setActive(ids.find((id) => intersecting.has(id)) ?? null)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, enabled])

  // Derived rather than stored, so disabling the hook doesn't need an effect
  // to reset state.
  return enabled ? active : null
}
