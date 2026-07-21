import { Lock, ShieldCheck } from 'lucide-react'

import { PhoneFrame } from '@/components/ui/phone-frame'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { scanReasons } from '@/lib/content'
import { cn } from '@/lib/utils'

/**
 * The most persuasive thing this product has is the screen a *stranger* gets,
 * because that is where the privacy promise is either kept or broken. It is
 * drawn in markup rather than shipped as a screenshot: sharp at any density,
 * no extra bytes, and it stays in sync with the brand tokens.
 *
 * Presented to assistive tech as a single labelled image — it depicts an
 * interface, it is not one.
 */
function ScannerScreen() {
  return (
    <div
      role="img"
      aria-label="The screen a person sees after scanning a TruTag sticker: a masked number plate, a list of reasons to pick from such as blocking my car or lights left on, a short message box, a notify owner button, and a note that the owner's phone number is never shown."
      className="flex h-full w-full flex-col bg-neutral-50 pt-12"
    >
      <div className="px-5 pb-4 text-center">
        <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
          TruTag
        </p>
      </div>

      <div className="mx-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white shadow-lg shadow-brand-900/25">
        <p className="text-[0.625rem] tracking-[0.14em] text-white/60 uppercase">Vehicle</p>
        <p className="mt-1 text-xl font-semibold tracking-wide tabular-nums">MH 12 ·· ····</p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[0.6875rem] font-medium">
          <ShieldCheck className="size-3" />
          Verified owner
        </div>
      </div>

      <div className="mt-5 px-4">
        <p className="text-[0.8125rem] font-medium text-neutral-900">Why are you reaching out?</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {scanReasons.map((reason, index) => (
            <span
              key={reason}
              className={cn(
                'rounded-full px-2.5 py-1.5 text-[0.6875rem] font-medium',
                index === 0
                  ? 'bg-accent text-neutral-950'
                  : 'border border-neutral-200 bg-white text-neutral-600',
              )}
            >
              {reason}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-3">
          <p className="text-[0.625rem] tracking-[0.12em] text-neutral-400 uppercase">
            Message
          </p>
          <p className="mt-1.5 text-[0.75rem] leading-snug text-neutral-700">
            Hi — you&rsquo;re parked across my gate, could you move when you get
            a moment?
          </p>
        </div>
      </div>

      <div className="mt-auto px-4 pb-6">
        <div className="rounded-full bg-brand-500 py-3 text-center text-[0.8125rem] font-semibold text-white shadow-sm">
          Notify the owner
        </div>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.6875rem] text-neutral-500">
          <Lock className="size-3" />
          Their number is never shown
        </p>
      </div>
    </div>
  )
}

export function ScanPreview() {
  return (
    <Section
      id="scan"
      tone="dark"
      spacing="lg"
      className="dot-grid"
      aria-labelledby="scan-title"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            id="scan-title"
            eyebrow="What the scanner sees"
            onDark
            size="lg"
            title="They get a way to reach you. Not a way to find you."
            lede="This is the entire experience for the person who scans your tag — no signup, no app, and no personal detail anywhere on the screen."
          />

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-accent pl-4">
              <dt className="text-sm font-semibold text-white">Shown to them</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-white/60">
                Vehicle type and a partially masked plate — enough to confirm they
                have the right vehicle.
              </dd>
            </div>
            <div className="border-l-2 border-white/15 pl-4">
              <dt className="text-sm font-semibold text-white">Never shown</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-white/60">
                Your name, number, address, or the full registration. Not on the
                screen, not in the reply.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="flex justify-center lg:justify-end">
          <PhoneFrame>
            <ScannerScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </Section>
  )
}
