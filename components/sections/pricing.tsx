import { ArrowRight, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { plans, type Plan } from '@/lib/content'
import { mailtoOrder, whatsappHref } from '@/lib/site'
import { cn } from '@/lib/utils'

function PriceLine({ plan }: { plan: Plan }) {
  // No invented numbers. Until a real price is configured the card says so,
  // which costs far less trust than a placeholder that turns out to be wrong.
  if (!plan.price) {
    return (
      <p className="text-lg font-semibold tracking-tight text-neutral-900">
        Announced at launch
        <span className="mt-1 block text-sm font-normal text-neutral-500">
          Write in for early-access pricing
        </span>
      </p>
    )
  }

  return (
    <p className="flex items-baseline gap-2">
      <span className="text-4xl font-semibold tracking-tight tabular-nums">{plan.price}</span>
      <span className="text-sm text-neutral-500">{plan.priceNote}</span>
    </p>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-3xl border p-7 sm:p-8',
        plan.featured
          ? 'border-brand-500 bg-white shadow-xl shadow-brand-900/10 ring-1 ring-brand-500'
          : 'border-neutral-200 bg-white shadow-sm',
      )}
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-neutral-950">
          Most popular
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className={cn(
          'inline-flex size-11 items-center justify-center rounded-xl',
          plan.featured ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600',
        )}
      >
        <Icon className="size-5" />
      </span>

      <h3 className="mt-5 text-xl font-semibold tracking-tight">{plan.name}</h3>
      {/* Reserved height keeps the divider and price row on one baseline across
          all three cards, whatever the blurb wraps to. */}
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:min-h-11">{plan.blurb}</p>

      <div className="mt-6 border-t border-neutral-200 pt-6">
        <PriceLine plan={plan} />
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-neutral-700">
            <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <Button
        href={mailtoOrder}
        variant={plan.featured ? 'primary' : 'secondary'}
        block
        className="mt-8"
      >
        Reserve the {plan.name.toLowerCase()}
        <ArrowRight aria-hidden="true" />
      </Button>
    </article>
  )
}

export function Pricing() {
  return (
    <Section id="pricing" tone="muted" spacing="lg" aria-labelledby="pricing-title">
      <Reveal>
        <SectionHeading
          id="pricing-title"
          eyebrow="Get TruTag"
          size="lg"
          align="center"
          title="Reserve a tag for your vehicle."
          lede="We are shipping the first batch from Assam. Tell us what you ride and we will confirm pricing and a delivery slot for your city."
        />
      </Reveal>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 80} className="h-full">
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Ordering for a fleet, a housing society, or a dealership?{' '}
          <a
            href={mailtoOrder}
            className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
          >
            Talk to us about bulk tags
          </a>
          {whatsappHref ? (
            <>
              {' '}
              or{' '}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
              >
                message us on WhatsApp
              </a>
            </>
          ) : null}
          .
        </p>
      </Reveal>
    </Section>
  )
}
