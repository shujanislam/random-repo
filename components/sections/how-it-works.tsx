'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { scanFlow, steps } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * The connector between two cards in a horizontal flow. It is `w-6` to match
 * the `lg:gap-6` it sits inside, and only appears at the breakpoint where the
 * cards are actually in a row — stacked cards read in order without it.
 */
function Connector({ dotted = false, className }: { dotted?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute left-full hidden w-6 -translate-y-1/2 justify-center lg:flex',
        className,
      )}
    >
      <svg
        viewBox="0 0 24 8"
        fill="none"
        className={cn('w-5', dotted ? 'text-neutral-300' : 'text-brand-300')}
      >
        <path
          d="M1 4h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={dotted ? '0.5 3.5' : undefined}
        />
        <path
          d="m17.5 1 3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

/** How the blue overlay is revealed: along the direction the route travels. */
type Wipe = 'right' | 'left' | 'down'

/** The clip rectangle for each wipe, empty (`false`) and full (`true`). */
const wipes: Record<Wipe, Record<'true' | 'false', { x: number; y: number; w: number; h: number }>> =
  {
    right: { false: { x: -10, y: -20, w: 0, h: 140 }, true: { x: -10, y: -20, w: 130, h: 140 } },
    left: { false: { x: 110, y: -20, w: 0, h: 140 }, true: { x: -10, y: -20, w: 130, h: 140 } },
    down: { false: { x: -10, y: -20, w: 120, h: 0 }, true: { x: -10, y: -20, w: 120, h: 140 } },
  }

/**
 * One leg of the route. The grey path is always there — it is the road ahead —
 * and the blue one is wiped in over it, in the direction of travel, when the
 * step it leads to activates.
 *
 * The reveal is a clip rectangle rather than the usual stroke-dash trick:
 * `preserveAspectRatio="none"` is what lets the leg's endpoints stay pinned to
 * the card centres at any width, and under that distortion dash lengths stop
 * matching the path (`pathLength` normalisation and `non-scaling-stroke` pull
 * in opposite directions). A clip rectangle distorts with the path, so it
 * stays exact. `vector-effect` keeps the stroke an even 2px regardless.
 */
function RouteLeg({ d, drawn, wipe }: { d: string; drawn: boolean; wipe: Wipe }) {
  const clipId = `route-${useId().replaceAll(':', '')}`
  const box = wipes[wipe][drawn ? 'true' : 'false']

  const shared = {
    d,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    vectorEffect: 'non-scaling-stroke',
  } as const

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 size-full overflow-visible"
    >
      <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
        <rect
          x={box.x}
          y={box.y}
          width={box.w}
          height={box.h}
          className="transition-all duration-700 ease-out"
        />
      </clipPath>
      <path {...shared} className="text-neutral-200" />
      <g clipPath={`url(#${clipId})`}>
        <path {...shared} className="text-brand-500" />
      </g>
    </svg>
  )
}

/**
 * The gap between two steps: a straight drop while the cards are stacked full
 * width, and an S-curve sweeping across to the opposite side once they sit on
 * alternating halves. `23` and `77` are the horizontal centres of the two
 * `46%`-wide cards, so each leg leaves and arrives dead centre — right where
 * the numbered badge sits.
 */
function RouteCurve({ toRight, drawn }: { toRight: boolean; drawn: boolean }) {
  return (
    <div aria-hidden="true" className="relative h-20 w-full sm:h-24 lg:h-32">
      <div className="lg:hidden">
        <RouteLeg d="M50 0 L50 100" drawn={drawn} wipe="down" />
      </div>
      <div className="hidden lg:block">
        <RouteLeg
          d={
            toRight
              ? 'M23 0 C23 38, 26 50, 38 50 L62 50 C74 50, 77 62, 77 100'
              : 'M77 0 C77 38, 74 50, 62 50 L38 50 C26 50, 23 62, 23 100'
          }
          drawn={drawn}
          wipe={toRight ? 'right' : 'left'}
        />
      </div>
    </div>
  )
}

/**
 * Where in the viewport a step counts as "reached" — a little below the
 * middle, so a step lights up as it settles into the reading position rather
 * than the moment its first pixel appears.
 */
const ACTIVATION_LINE = 0.62

/**
 * Drives the roadmap from the scroll position: returns the index of the
 * furthest step reached. Step 1 is always lit, so the route never starts
 * entirely dead.
 */
function useFurthestStep(cardRefs: React.RefObject<(HTMLElement | null)[]>) {
  const [reached, setReached] = useState(0)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const line = window.innerHeight * ACTIVATION_LINE

      let passed = 0
      for (const card of cardRefs.current ?? []) {
        if (!card) continue
        const box = card.getBoundingClientRect()
        // Measured 40% down the card rather than at its top edge: a card only
        // counts as reached once it is properly on screen, not as it enters.
        if (box.top + box.height * 0.4 <= line) passed += 1
      }
      setReached(Math.max(0, passed - 1))
    }

    // Scroll fires far more often than the screen refreshes; coalesce onto the
    // frame so the layout reads stay off the critical path.
    const schedule = () => {
      frame ||= requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [cardRefs])

  return reached
}

export function HowItWorks() {
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const reached = useFurthestStep(cardRefs)

  return (
    <Section id="how-it-works" spacing="lg" divider aria-labelledby="how-it-works-title">
      <Reveal>
        <div className="flex flex-col items-center gap-5">
          {/* Gold as a badge fill against near-black — the one place the
              accent is allowed to sit behind text on a white surface. */}
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[0.6875rem] font-bold tracking-[0.14em] text-neutral-950 uppercase">
            <ShieldCheck aria-hidden="true" className="size-3.5" />
            Simple steps, maximum safety
          </span>
          <SectionHeading
            id="how-it-works-title"
            align="center"
            size="lg"
            title="How TruTag works"
            lede="Four simple steps to protect your number and stay reachable."
          />
        </div>
      </Reveal>

      <ol className="mt-20">
        {steps.map((step, index) => {
          const Icon = step.icon
          const active = index <= reached
          const current = index === reached
          const onLeft = index % 2 === 0

          return (
            <li key={step.n}>
              <div data-active={active} className="roadmap-step">
                <article
                  ref={(node) => {
                    cardRefs.current[index] = node
                  }}
                  className={cn(
                    'roadmap-card relative rounded-3xl border border-neutral-200 bg-white p-6 pt-9 text-center shadow-sm sm:p-7 sm:pt-10 lg:w-[46%]',
                    onLeft ? 'lg:mr-auto' : 'lg:ml-auto',
                  )}
                >
                  {/* Straddles the top edge so the incoming leg of the route
                      terminates inside the number. */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'roadmap-node absolute -top-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white ring-4 ring-white',
                      // The halo marks the step the reader is on right now.
                      current && 'shadow-[0_0_0_8px_rgb(0_96_240/0.1)]',
                    )}
                  >
                    {step.n}
                  </span>

                  <span className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-9 text-brand-500" />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    <span className="sr-only">Step {step.n}: </span>
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-pretty text-neutral-600">
                    {step.body}
                  </p>
                </article>
              </div>

              {index < steps.length - 1 ? (
                <RouteCurve toRight={onLeft} drawn={index + 1 <= reached} />
              ) : null}
            </li>
          )
        })}
      </ol>

      <Reveal>
        <div className="mt-20 rounded-[2rem] border border-brand-100 bg-brand-50/60 p-6 sm:p-10">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-balance sm:text-3xl">
              What happens after someone scans?
            </h3>
            <p className="mt-2.5 leading-relaxed text-neutral-600">
              Secure, private, and always on your terms.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {scanFlow.map((item, index) => {
              const Icon = item.icon
              return (
                <li key={item.label} className="relative flex flex-col items-center text-center">
                  <span className="flex size-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-100">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-8 text-brand-500" />
                  </span>
                  <span className="mt-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-neutral-950">
                    {item.label}
                  </span>
                  <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-pretty text-neutral-600">
                    {item.body}
                  </p>
                  {/* Pinned to the icon disc rather than the item's centre,
                      which drifts with the length of each caption. */}
                  {index < scanFlow.length - 1 ? <Connector className="top-10" /> : null}
                </li>
              )
            })}
          </ol>
        </div>
      </Reveal>
    </Section>
  )
}
