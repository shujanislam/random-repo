import { Plus } from 'lucide-react'

import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { faqs } from '@/lib/content'
import { mailtoContact } from '@/lib/site'

/**
 * Built on native <details>/<summary> rather than a JS accordion. It is
 * keyboard operable, announced correctly by screen readers, works with no
 * JavaScript at all, and ships zero bytes of client code.
 *
 * The shared `name` makes it exclusive (one open at a time) in browsers that
 * support it, and degrades to independent toggles in those that don't.
 */
export function Faq() {
  return (
    <Section id="faq" spacing="lg" divider aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="faq-title"
            eyebrow="Questions"
            size="lg"
            title="The things people ask first."
          />
          <p className="mt-6 text-neutral-600">
            Still unsure about something?{' '}
            <a
              href={mailtoContact}
              className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
            >
              Ask us directly
            </a>{' '}
            — a person replies.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq, index) => (
              // The first answer starts open so the section reads as content
              // rather than a list of unexplained links.
              <details key={faq.q} name="faq" open={index === 0} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-medium marker:content-[''] [&::-webkit-details-marker]:hidden">
                  <span className="text-[1.0625rem] leading-snug text-neutral-900 transition-colors group-hover:text-brand-700">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-[transform,background-color,color] duration-200 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white group-open:rotate-45"
                  >
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="pb-6 pr-12 leading-relaxed text-pretty text-neutral-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
