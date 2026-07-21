import Image from 'next/image'
import { ArrowRight, BellRing, Camera, CloudRain, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Eyebrow } from '@/components/ui/section-heading'
import { heroBlurDataURL } from '@/lib/blur'

const signals = [
  { icon: EyeOff, label: 'Number never shown' },
  { icon: Camera, label: 'No app to scan' },
  { icon: CloudRain, label: 'Monsoon-proof' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden"
    >
      {/* LCP element: one priority image, served as WebP at the size the
          viewport actually needs, with an inlined 14px preview behind it. */}
      <Image
        src="/media/hero-bg.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={heroBlurDataURL}
        className="-z-20 object-cover object-[64%_22%] md:object-[80%_center]"
      />

      {/* Scrim. The photographed sticker carries its own dense typography, so
          the copy needs a genuinely opaque bed to sit on — not a decorative
          tint. Bottom-up on phones, where the sticker sits high in frame and
          the text occupies the lower half; left-to-right on wide screens,
          where the product stays visible beside the words. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/94 via-55% to-neutral-950/45 md:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-neutral-950 via-neutral-950/85 via-45% to-neutral-950/15 md:block"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 md:pb-28 md:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-xl">
            <Eyebrow onDark>Privacy-first vehicle identification</Eyebrow>

            <h1 className="mt-6 text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.03em] text-balance text-white sm:text-6xl lg:text-[4rem]">
              Be reachable. Stay <span className="marker text-neutral-950">private</span>.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-pretty text-white/75 sm:text-lg">
              A smart QR sticker for your car or bike. Anyone can reach you in
              seconds — without ever seeing your number.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing">
                Get your TruTag <ArrowRight aria-hidden="true" />
              </Button>
              <Button href="#how-it-works" variant="onDark">
                See how it works
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-7">
              {signals.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-white/70">
                  <Icon className="size-4 text-accent" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* The payoff, shown rather than claimed. Decorative on small screens,
              where it would crowd the copy. */}
          <div
            aria-hidden="true"
            className="hidden w-72 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-neutral-950">
                <BellRing className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Someone scanned your tag</p>
                <p className="truncate text-xs text-white/60">MH 12 · “You’re blocking my car”</p>
              </div>
            </div>
            <p className="mt-3.5 border-t border-white/10 pt-3 text-xs text-white/50">
              Reply relayed · your number stays hidden
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
