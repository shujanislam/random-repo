import Image from 'next/image'

import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { team, type TeamMember } from '@/lib/content'
import { initials } from '@/lib/utils'

/**
 * Initials on a brand-tinted disc, for anyone whose portrait hasn't been shot
 * yet — a stock grey silhouette reads as a company that does not exist.
 */
function Monogram({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold tracking-wide text-brand-700 ring-1 ring-brand-100"
    >
      {initials(name)}
    </span>
  )
}

/**
 * The portraits are studio headshots on white, so the disc carries a ring and
 * a tinted backing to stay legible against a white card. Cropped from the top
 * because that is where the faces sit in a head-and-shoulders frame.
 *
 * Empty alt: the name it sits beside already names the person.
 */
function Portrait({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={112}
      height={112}
      className="size-14 shrink-0 rounded-full bg-neutral-100 object-cover object-top ring-1 ring-neutral-200"
    />
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neutral-300">
      <div className="flex items-center gap-4">
        {member.photo ? (
          <Portrait src={member.photo} />
        ) : (
          <Monogram name={member.name} />
        )}
        <div className="min-w-0">
          <h3 className="font-semibold leading-tight">{member.name}</h3>
          <p className="mt-1 text-sm text-brand-600">{member.role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-neutral-600">{member.note}</p>
    </article>
  )
}

export function Team() {
  return (
    <Section id="team" tone="muted" spacing="md" aria-labelledby="team-title">
      <Reveal>
        <SectionHeading
          id="team-title"
          eyebrow="Team"
          title="The people building TruTag."
          lede="A small team in Assam, building for the way Indian roads actually work."
        />
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <li key={member.name} className="h-full">
            <Reveal delay={index * 60} className="h-full">
              <MemberCard member={member} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
