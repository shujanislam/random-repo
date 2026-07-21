import Image from 'next/image'

import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { steps } from '@/lib/content'
import { cn } from '@/lib/utils'

export function HowItWorks() {
  return (
    <Section id="how-it-works" spacing="lg" divider aria-labelledby="how-it-works-title">
      <Reveal>
        <SectionHeading
          id="how-it-works-title"
          eyebrow="How it works"
          size="lg"
          title="Three steps, then you never think about it again."
          lede="No wiring, no subscription to babysit, no app for the person helping you."
        />
      </Reveal>

      <ol className="mt-16 space-y-16 sm:space-y-24">
        {steps.map((step, index) => (
          <li key={step.n}>
            <Reveal>
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div
                  className={cn(
                    'relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50',
                    // Alternate sides on wide screens; images always lead on mobile.
                    index % 2 === 1 && 'md:order-2',
                  )}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 44vw, 92vw"
                    className={cn(
                      step.fit === 'contain' ? 'object-contain p-8' : 'object-cover',
                    )}
                  />
                </div>

                <div className={cn(index % 2 === 1 && 'md:order-1')}>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white"
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                    <span className="sr-only">Step {step.n}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-pretty text-neutral-600">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
