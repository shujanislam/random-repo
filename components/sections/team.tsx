import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { team, type TeamMember } from '@/lib/content'
import { initials } from '@/lib/utils'

/**
 * Initials on a brand-tinted disc rather than a stock grey silhouette. Five
 * identical placeholder avatars read as a company that does not exist; a
 * monogram reads as a company that simply hasn't shot portraits yet.
 * Swap in real photographs when they exist — that is strictly better.
 */
function Monogram({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold tracking-wide text-brand-700 ring-1 ring-brand-100"
    >
      {initials(name)}
    </span>
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-neutral-300">
      <div className="flex items-center gap-4">
        <Monogram name={member.name} />
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
