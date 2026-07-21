import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { solutionPoints } from '@/lib/content'

export function Problem() {
  return (
    <Section id="problem" tone="muted" spacing="lg" aria-labelledby="problem-title">
      <Reveal>
        <SectionHeading
          id="problem-title"
          eyebrow="The problem"
          size="lg"
          title={
            <>
              Reaching someone shouldn&rsquo;t cost them their privacy.
            </>
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Right now, pick your poison
            </h3>
            <p className="mt-3 leading-relaxed text-pretty text-neutral-600">
              Stick your number on the glass and live with the spam. Or leave it
              off and hope nobody ever needs to tell you the lights are on, the
              tow truck has arrived, or someone just clipped your mirror.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-10">
            <h3 className="text-xl font-semibold tracking-tight">So we built a third option</h3>
            <p className="mt-3 leading-relaxed text-pretty text-neutral-600">
              A code where your number used to be. They scan, you get the
              message, nobody gets your digits.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white px-7 shadow-sm">
            {solutionPoints.map((point, index) => (
              <li key={point.title} className="flex gap-5 py-7">
                <span
                  aria-hidden="true"
                  className="mt-0.5 font-mono text-sm tabular-nums text-brand-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-semibold">{point.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
