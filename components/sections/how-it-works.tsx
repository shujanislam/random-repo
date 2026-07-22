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

export function HowItWorks() {
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

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li key={step.n} className="relative">
              <Reveal delay={index * 70} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-brand-200">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white"
                  >
                    {step.n}
                  </span>

                  <span className="mt-5 flex size-28 self-center items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="size-11 text-brand-500"
                    />
                  </span>

                  <h3 className="mt-6 text-center text-lg font-semibold tracking-tight">
                    <span className="sr-only">Step {step.n}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-center text-sm leading-relaxed text-pretty text-neutral-600">
                    {step.body}
                  </p>
                </article>
              </Reveal>
              {index < steps.length - 1 ? <Connector dotted className="top-1/2" /> : null}
            </li>
          )
        })}
      </ol>

      <Reveal>
        <div className="mt-6 rounded-[2rem] border border-brand-100 bg-brand-50/60 p-6 sm:p-10">
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
