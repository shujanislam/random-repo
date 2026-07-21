import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { features } from '@/lib/content'
import { cn } from '@/lib/utils'

const spanClasses: Record<1 | 2 | 3, string> = {
  1: '',
  2: 'sm:col-span-2',
  3: 'sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-10',
}

export function Features() {
  return (
    <Section id="features" spacing="lg" divider aria-labelledby="features-title">
      <Reveal>
        <SectionHeading
          id="features-title"
          eyebrow="Features"
          size="lg"
          title="Everything the promise needs. Nothing it doesn’t."
        />
      </Reveal>

      <Reveal delay={60} className="mt-14">
        {/* A one-pixel gap over a neutral background draws the hairline grid
            without a single border declaration. */}
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body, span: rawSpan }) => {
            const span: 1 | 2 | 3 = rawSpan ?? 1

            return (
              <li
                key={title}
                className={cn(
                  'group bg-white p-7 transition-colors duration-200 hover:bg-neutral-50 sm:p-9',
                  spanClasses[span],
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-500 group-hover:text-white"
                >
                  <Icon className="size-5" />
                </span>
                <div className={cn(span === 3 ? 'mt-5 lg:mt-0' : 'mt-5')}>
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-pretty text-neutral-600">
                    {body}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
