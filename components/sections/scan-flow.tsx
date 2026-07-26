'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import {
  BellRing,
  Car,
  Check,
  ChevronRight,
  Lock,
  Mic,
  Phone,
  QrCode,
  Send,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
} from 'lucide-react'

import { LogoMark } from '@/components/layout/logo'
import { scanFlow } from '@/lib/content'
import { cn } from '@/lib/utils'

/** How long each step holds before the demo moves itself along. */
const AUTOPLAY_MS = 2200

/* ── Screen furniture ───────────────────────────────────────────────── */

/** The plate the demo shows, masked the way the real scan page masks it. */
const PLATE = 'AS 01 •• 6789'

/** A row of the quick-alert list, as it appears on the real scan page. */
function AlertRow({
  icon,
  label,
  tone,
  selected = false,
  delay = 0,
}: {
  icon: ReactNode
  label: string
  tone: 'danger' | 'warn' | 'brand'
  selected?: boolean
  delay?: number
}) {
  const tones = {
    danger: 'bg-red-50 text-red-500',
    warn: 'bg-accent-soft text-accent-ink',
    brand: 'bg-brand-50 text-brand-500',
  } as const

  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        'flex animate-scan-rise items-center gap-2 rounded-xl bg-white px-2.5 py-2 shadow-sm',
        selected && 'ring-2 ring-brand-500',
      )}
    >
      <span className={cn('grid size-6 shrink-0 place-items-center rounded-lg', tones[tone])}>
        {icon}
      </span>
      <span className="flex-1 text-[0.65rem] font-semibold text-neutral-800">{label}</span>
      {selected ? (
        <span className="grid size-4 place-items-center rounded-full bg-brand-500">
          <Check className="size-2.5 text-white" strokeWidth={3} />
        </span>
      ) : (
        <ChevronRight className="size-3 text-neutral-300" />
      )}
    </div>
  )
}

/** The scan page header — mark plus wordmark, exactly as the web app opens. */
function ScanPageHeader() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <LogoMark decorative className="h-4 w-auto" />
      <span className="text-[0.7rem] font-bold tracking-tight">
        Tru<span className="text-brand-500">Tag</span>
      </span>
    </div>
  )
}

/* ── The five screens ───────────────────────────────────────────────── */

/** 1 — a camera pointed at the sticker, mid-scan. */
function CameraScreen() {
  return (
    <div className="relative flex size-full flex-col items-center justify-center bg-neutral-900">
      {/* Viewfinder corners, drawn as four L-brackets. */}
      <span aria-hidden="true" className="absolute inset-6">
        <span className="absolute top-0 left-0 size-6 rounded-tl-lg border-t-2 border-l-2 border-white/40" />
        <span className="absolute top-0 right-0 size-6 rounded-tr-lg border-t-2 border-r-2 border-white/40" />
        <span className="absolute bottom-0 left-0 size-6 rounded-bl-lg border-b-2 border-l-2 border-white/40" />
        <span className="absolute right-0 bottom-0 size-6 rounded-br-lg border-r-2 border-b-2 border-white/40" />
      </span>

      <div className="relative size-32 overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex size-full flex-col items-center justify-center gap-1">
          <QrCode className="size-16 text-neutral-900" strokeWidth={1.25} />
          <span className="text-[0.55rem] font-bold tracking-[0.16em] text-neutral-400 uppercase">
            TruTag
          </span>
        </div>
        <span className="absolute inset-x-0 top-0 h-8 animate-scan-sweep bg-gradient-to-b from-transparent to-accent/45" />
        <span className="absolute inset-x-0 top-8 h-0.5 animate-scan-sweep bg-accent shadow-[0_0_14px_3px_rgb(252_204_12/0.8)]" />
      </div>

      <p className="absolute bottom-7 text-[0.65rem] font-medium text-white/70">
        Reading tag code…
      </p>
    </div>
  )
}

/** 2 — the page the stranger lands on: vehicle only, no person. */
function SecurePageScreen() {
  return (
    <div className="flex size-full flex-col gap-3 bg-brand-50/70 px-3.5 pt-9 pb-4">
      <ScanPageHeader />

      <div
        style={{ animationDelay: '40ms' }}
        className="animate-scan-rise rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 px-3 py-3.5 text-center"
      >
        <p className="text-[0.5rem] font-bold tracking-[0.16em] text-white/70 uppercase">
          Registered vehicle
        </p>
        <p className="mt-1 text-base font-bold tracking-tight text-white">{PLATE}</p>
      </div>

      <div
        style={{ animationDelay: '90ms' }}
        className="flex animate-scan-rise items-center justify-center gap-1.5 rounded-full bg-white py-1.5 shadow-sm"
      >
        <Car className="size-3 text-brand-500" />
        <span className="text-[0.6rem] font-semibold text-neutral-700">Car · Verified tag</span>
      </div>

      <div className="mt-auto flex items-start gap-2 rounded-xl bg-white/70 p-2.5 ring-1 ring-brand-100">
        <Lock className="mt-px size-3 shrink-0 text-brand-500" />
        <p className="text-[0.6rem] leading-relaxed text-neutral-600">
          No name, number or address on this page.
        </p>
      </div>
    </div>
  )
}

/** 3 — picking a reason, then writing to the owner. */
function ReasonScreen() {
  return (
    <div className="flex size-full flex-col gap-2 bg-brand-50/70 px-3.5 pt-9 pb-4">
      <p className="text-[0.5rem] font-bold tracking-[0.16em] text-neutral-400 uppercase">
        Quick alerts
      </p>

      <AlertRow
        icon={<TriangleAlert className="size-3.5" />}
        label="Accident detected"
        tone="danger"
      />
      <AlertRow
        icon={<Car className="size-3.5" />}
        label="Wrong parking"
        tone="warn"
        selected
        delay={45}
      />
      <AlertRow
        icon={<Phone className="size-3.5" />}
        label="Voice call"
        tone="brand"
        delay={90}
      />

      <div
        style={{ animationDelay: '160ms' }}
        className="mt-auto animate-scan-rise rounded-xl bg-white p-2 shadow-sm"
      >
        <p className="text-[0.6rem] leading-relaxed text-neutral-700">
          You&rsquo;re blocking the gate — could you move it?
        </p>
        <div className="mt-2 flex items-center justify-end gap-1.5">
          <Mic className="size-3 text-neutral-300" />
          <span className="grid size-6 place-items-center rounded-full bg-brand-500">
            <Send className="size-3 text-white" />
          </span>
        </div>
      </div>
    </div>
  )
}

/** 4 — the alert landing on the owner's phone, seconds later. */
function NotifiedScreen() {
  return (
    <div className="relative flex size-full flex-col items-center bg-neutral-950 px-3 pt-10">
      <p className="text-3xl font-semibold tracking-tight text-white/90">9:41</p>
      <p className="mt-0.5 text-[0.6rem] text-white/40">Tuesday, 12 August</p>

      <div className="mt-6 w-full animate-scan-drop rounded-2xl bg-white/95 p-2.5 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="relative grid size-7 shrink-0 place-items-center rounded-lg bg-brand-50">
            <BellRing className="size-3.5 text-brand-500" />
            <span className="absolute inset-0 animate-ping rounded-lg ring-2 ring-brand-400/60" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline justify-between gap-2 text-[0.65rem] font-bold text-neutral-900">
              TruTag <span className="text-[0.55rem] font-medium text-neutral-400">now</span>
            </p>
            <p className="truncate text-[0.6rem] text-neutral-600">
              Wrong parking · {PLATE}
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="flex-1 rounded-lg bg-brand-500 py-1 text-center text-[0.55rem] font-semibold text-white">
            Reply
          </span>
          <span className="flex-1 rounded-lg bg-neutral-100 py-1 text-center text-[0.55rem] font-semibold text-neutral-700">
            Call back
          </span>
        </div>
      </div>

      <p className="absolute bottom-7 text-[0.6rem] text-white/40">Your phone · locked</p>
    </div>
  )
}

/** 5 — the reply going back through the relay, number intact. */
function RelayScreen() {
  return (
    <div className="flex size-full flex-col gap-2 bg-neutral-50 px-3.5 pt-9 pb-3">
      <ScanPageHeader />

      <div
        style={{ animationDelay: '30ms' }}
        className="mr-6 animate-scan-rise rounded-2xl rounded-bl-sm bg-white px-2.5 py-2 shadow-sm"
      >
        <p className="text-[0.6rem] leading-relaxed text-neutral-700">
          You&rsquo;re blocking the gate — could you move it?
        </p>
        <p className="mt-1 text-[0.5rem] text-neutral-400">Scanner · 9:41</p>
      </div>

      <div
        style={{ animationDelay: '130ms' }}
        className="ml-6 animate-scan-rise rounded-2xl rounded-br-sm bg-brand-500 px-2.5 py-2 shadow-sm"
      >
        <p className="text-[0.6rem] leading-relaxed text-white">On my way — moving it now.</p>
        <p className="mt-1 text-[0.5rem] text-white/60">You · 9:41</p>
      </div>

      <div
        style={{ animationDelay: '220ms' }}
        className="mt-auto flex animate-scan-rise items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-1.5"
      >
        <Lock className="size-3 text-accent" />
        <span className="text-[0.55rem] font-semibold text-white">
          Number hidden · relayed by TruTag
        </span>
      </div>
    </div>
  )
}

const screens = [CameraScreen, SecurePageScreen, ReasonScreen, NotifiedScreen, RelayScreen]

/* ── The walkthrough ────────────────────────────────────────────────── */

/**
 * True while the element is on screen. Unlike the shared `useInView`, this
 * flips back on the way out — the demo has no reason to keep its timer
 * running for a section nobody is looking at.
 */
function useOnScreen(ref: React.RefObject<HTMLElement | null>) {
  const [onScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      // Matches the reveal threshold, so the demo starts about when the panel
      // has finished animating into place.
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref])

  return onScreen
}

/**
 * The five steps of a scan, played out on a phone. Nothing here is
 * interactive: it starts itself when it scrolls into view and loops, so the
 * whole story arrives without the reader having to do anything.
 *
 * The list on the left is that story in text — present with or without
 * JavaScript — and the phone is the illustration, so nothing is lost if the
 * demo never runs.
 */
export function ScanFlowDemo() {
  const root = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(root)
  const [active, setActive] = useState(0)

  const Screen = screens[active]

  useEffect(() => {
    if (!onScreen) return

    // Advancing is not animation, so it runs under reduced-motion too — the
    // stylesheet flattens the transitions, and the reader still gets every
    // step. There is no control to fall back to.
    const id = window.setTimeout(
      () => setActive((index) => (index + 1) % scanFlow.length),
      AUTOPLAY_MS,
    )
    return () => window.clearTimeout(id)
    // `active` is a dependency so each step gets a fresh full-length timer.
  }, [onScreen, active])

  return (
    <div
      ref={root}
      className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14"
    >
      {/* ── The phone ── */}
      <div className="relative order-1 flex justify-center lg:order-2">
        <span
          aria-hidden="true"
          className="absolute inset-x-4 top-10 bottom-10 rounded-full bg-brand-300/30 blur-3xl"
        />

        <div className="relative flex flex-col items-center gap-4">
          {/* Which phone we are looking at — the flip from their side to
              yours is half the point of the story. */}
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold transition-colors duration-250',
              scanFlow[active].side === 'you'
                ? 'bg-brand-500 text-white'
                : 'bg-white text-neutral-600 ring-1 ring-neutral-200',
            )}
          >
            {scanFlow[active].side === 'you' ? (
              <Smartphone aria-hidden="true" className="size-3.5" />
            ) : (
              <ShieldCheck aria-hidden="true" className="size-3.5" />
            )}
            {scanFlow[active].side === 'you' ? 'Your phone' : 'Their phone'}
          </span>

          <div className="relative aspect-[9/17] w-[15rem] rounded-[2.25rem] bg-neutral-900 p-2 shadow-2xl shadow-neutral-900/25 ring-1 ring-white/10">
            <div className="relative size-full overflow-hidden rounded-[1.75rem] bg-white">
              {/* Only the current screen is mounted, so it animates in on
                  arrival and nothing animates off-screen. */}
              <div key={active} aria-hidden="true" className="absolute inset-0 animate-scan-enter">
                <Screen />
              </div>
              <span
                aria-hidden="true"
                className="absolute top-2 left-1/2 h-4 w-14 -translate-x-1/2 rounded-full bg-neutral-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── The steps ── */}
      <ol className="order-2 lg:order-1">
        {scanFlow.map((item, index) => {
          const Icon = item.icon
          const current = index === active
          const done = index < active

          return (
            <li key={item.label} className="relative">
              {/* The rail joining one step's badge to the next. */}
              {index < scanFlow.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-14 -bottom-1 left-8 w-0.5 rounded-full transition-colors duration-250',
                    done ? 'bg-brand-300' : 'bg-neutral-200',
                  )}
                />
              ) : null}

              <div
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'relative flex w-full items-start gap-3.5 rounded-2xl px-3 py-3 transition duration-150',
                  current && 'bg-white shadow-sm ring-1 ring-brand-100',
                )}
              >
                <span
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full transition duration-150',
                    current
                      ? 'bg-brand-500 text-white shadow-[0_0_0_6px_rgb(0_96_240/0.1)]'
                      : done
                        ? 'bg-brand-100 text-brand-600'
                        : 'bg-white text-neutral-400 ring-1 ring-neutral-200',
                  )}
                >
                  <Icon aria-hidden="true" strokeWidth={1.75} className="size-4.5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        'text-sm font-semibold transition-colors duration-150',
                        current ? 'text-neutral-900' : 'text-neutral-500',
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="text-[0.625rem] font-bold tracking-[0.1em] text-neutral-300 uppercase">
                      {index + 1}/{scanFlow.length}
                    </span>
                  </span>
                  <span
                    className={cn(
                      'mt-1 block text-sm leading-relaxed text-pretty transition-colors duration-150',
                      current ? 'text-neutral-600' : 'text-neutral-400',
                    )}
                  >
                    {item.body}
                  </span>

                  {/* The countdown to the next step, so the reader can see
                      the demo is moving on rather than stuck. */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-2.5 block h-0.5 rounded-full bg-neutral-200/80',
                      !current && 'invisible',
                    )}
                  >
                    {current ? (
                      <span
                        key={active}
                        style={{ '--scan-duration': `${AUTOPLAY_MS}ms` } as CSSProperties}
                        className="scan-timer block h-full rounded-full bg-accent"
                      />
                    ) : null}
                  </span>
                </span>
              </div>
            </li>
          )
        })}

      </ol>
    </div>
  )
}
