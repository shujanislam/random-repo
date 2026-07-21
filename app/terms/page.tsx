import type { Metadata } from 'next'

import { LegalList, LegalPage, LegalSection } from '@/components/legal/legal-page'
import { contact, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & conditions',
  description: `The terms that govern your use of the ${site.name} website and service.`,
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & conditions"
      updated="January 2026"
      intro={`The terms that govern your use of the ${site.name} website and service.`}
    >
      <LegalSection n={1} title="Agreement to terms">
        <p>
          By accessing and using the {site.name} service you agree to be bound by these
          terms and conditions. If you do not agree to them, please do not use the
          service.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Use licence">
        <p>
          Permission is granted to temporarily download one copy of the materials on
          the {site.name} website for personal, non-commercial, transitory viewing
          only. This is a licence, not a transfer of title, and under it you may not:
        </p>
        <LegalList
          items={[
            'Modify or copy the materials',
            'Use the materials for any commercial purpose or public display',
            'Attempt to decompile or reverse engineer any software on the website',
            'Remove any copyright or other proprietary notation from the materials',
            'Transfer the materials to another person or mirror them on another server',
          ]}
        />
      </LegalSection>

      <LegalSection n={3} title="Disclaimer">
        <p>
          The materials on the {site.name} website are provided on an &ldquo;as
          is&rdquo; basis. {site.name} makes no warranties, express or implied, and
          hereby disclaims all other warranties including, without limitation, implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Limitations">
        <p>
          In no event shall {site.name} or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or due to
          business interruption) arising out of the use or inability to use the
          materials on the {site.name} website, even if {site.name} or an authorised
          representative has been notified of the possibility of such damage.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Accuracy of materials">
        <p>
          The materials appearing on the {site.name} website may include technical,
          typographical, or photographic errors. {site.name} does not warrant that any
          of the materials are accurate, complete, or current, and may change them at
          any time without notice.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Links">
        <p>
          {site.name} has not reviewed all of the sites linked to from this website and
          is not responsible for their contents. The inclusion of a link does not imply
          endorsement. Use of any linked website is at the user&rsquo;s own risk.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Modifications">
        <p>
          {site.name} may revise these terms at any time without notice. By using this
          website you agree to be bound by the version of these terms then in force.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Governing law">
        <p>
          These terms are governed by and construed in accordance with the laws of
          India, and you irrevocably submit to the exclusive jurisdiction of the courts
          of that country.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Contact">
        <p>Questions about these terms can be sent to:</p>
        <p>
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700"
          >
            {contact.email}
          </a>
          {' · '}
          {site.url.replace('https://', '')}
        </p>
      </LegalSection>
    </LegalPage>
  )
}
