import Image from 'next/image'

import { CheckItem } from '@/components/ui/check-item'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { Eyebrow, SectionHeading } from '@/components/ui/section-heading'
import { vehicles } from '@/lib/content'

export function Vehicles() {
  return (
    <Section id="vehicles" tone="muted" spacing="md" aria-labelledby="vehicles-title">
      <Reveal>
        <SectionHeading
          id="vehicles-title"
          eyebrow="Fits your ride"
          title="One tag, sized for cars and bikes."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {vehicles.map((vehicle, index) => (
          <Reveal key={vehicle.title} delay={index * 90}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11] bg-neutral-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  sizes="(min-width: 768px) 46vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <Eyebrow>{vehicle.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{vehicle.title}</h3>
                <p className="mt-3 leading-relaxed text-pretty text-neutral-600">{vehicle.body}</p>
                <ul className="mt-6 space-y-3 border-t border-neutral-200 pt-6 text-sm">
                  {vehicle.points.map((point) => (
                    <CheckItem key={point}>{point}</CheckItem>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
