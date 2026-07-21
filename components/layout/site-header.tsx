'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { LogoMark } from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/use-active-section'
import { useFocusTrap } from '@/hooks/use-focus-trap'
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll'
import { navSections } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Hoisted so the observer effect isn't torn down on every render. */
const SECTION_IDS = navSections.map((section) => section.id)

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  const activeSection = useActiveSection(SECTION_IDS, isHome)

  useLockBodyScroll(menuOpen)
  useFocusTrap(menuRef, menuOpen)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Escape closes; a resize past the md breakpoint closes it too, otherwise
  // the scroll lock would survive into a layout that has no menu button.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      closeMenu()
      // Escape should always land the user back on the control they opened,
      // regardless of what had focus inside the panel.
      toggleRef.current?.focus()
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && closeMenu()

    document.addEventListener('keydown', onKeyDown)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      mq.removeEventListener('change', onChange)
    }
  }, [menuOpen, closeMenu])

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link
          href="/"
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm transition-colors hover:bg-neutral-50"
        >
          <LogoMark className="h-7 w-auto" priority />
          <span className="sr-only">TruTag — home</span>
        </Link>

        {/* Desktop */}
        <nav
          aria-label="Primary"
          className="pointer-events-auto hidden items-center gap-0.5 rounded-full border border-neutral-200/80 bg-white/90 p-1.5 shadow-sm backdrop-blur-md md:flex"
        >
          {navSections.map((section) => {
            const current = isHome && activeSection === section.id
            return (
              <Link
                key={section.id}
                href={hrefFor(section.id)}
                aria-current={current ? 'true' : undefined}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
                  current
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
                )}
              >
                {section.label}
              </Link>
            )
          })}
          <Button href={hrefFor('pricing')} size="sm" className="ml-1.5">
            Get TruTag
          </Button>
        </nav>

        {/* Mobile */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-sm md:hidden"
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <>
          <div
            className="pointer-events-auto fixed inset-0 -z-10 bg-neutral-950/25 backdrop-blur-[2px] md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            ref={menuRef}
            id={menuId}
            className="pointer-events-auto mx-auto mt-3 max-w-6xl rounded-3xl border border-neutral-200 bg-white p-2 shadow-xl md:hidden"
          >
            <nav aria-label="Primary" className="flex flex-col">
              {navSections.map((section) => {
                const current = isHome && activeSection === section.id
                return (
                  <Link
                    key={section.id}
                    href={hrefFor(section.id)}
                    onClick={closeMenu}
                    aria-current={current ? 'true' : undefined}
                    className={cn(
                      'rounded-2xl px-4 py-3.5 text-center text-[0.9375rem] font-medium transition-colors',
                      current
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-neutral-700 hover:bg-neutral-100',
                    )}
                  >
                    {section.label}
                  </Link>
                )
              })}
              <Button
                href={hrefFor('pricing')}
                onClick={closeMenu}
                block
                className="mt-1"
              >
                Get TruTag
              </Button>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}
