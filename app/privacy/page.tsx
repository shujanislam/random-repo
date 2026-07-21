import type { Metadata } from 'next'

import {
  LegalCallout,
  LegalList,
  LegalPage,
  LegalSection,
} from '@/components/legal/legal-page'
import { contact, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `How ${site.name} collects, uses and protects your personal data.`,
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="January 2026"
      intro={`How ${site.name} collects, uses and protects personal data, and the choices you have over it.`}
    >
      <LegalSection n={1} title="Introduction">
        <p>
          {site.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the{' '}
          {site.name} website and service. This page tells you what personal data we
          collect, why we collect it, and what you can do about it.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information we collect">
        <p>
          We collect a small number of categories of information, each for a stated
          purpose. Personal data we may ask you for includes:
        </p>
        <LegalList items={['Email address', 'Vehicle registration details', 'Usage data']} />
      </LegalSection>

      <LegalSection n={3} title="How we use data">
        <LegalList
          items={[
            'To provide and maintain the service',
            'To notify you about changes to the service',
            'To let you use interactive features of the service',
            'To provide customer support',
            'To analyse usage so that we can improve the service',
            'To detect, prevent and address technical issues',
          ]}
        />
      </LegalSection>

      <LegalSection n={4} title="Security of data">
        <p>
          The security of your data matters to us, but no method of transmission over
          the internet or of electronic storage is completely secure. While we use
          commercially acceptable means and industry-standard encryption to protect
          your personal data, we cannot guarantee its absolute security.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Privacy of phone numbers">
        <p>
          Keeping your phone number private is the point of the product. Your number is
          never shared with anyone who scans your QR sticker. Calls and messages are
          relayed through our platform so that your number is never displayed.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Service providers">
        <p>
          We may engage third-party companies and individuals to facilitate the
          service, perform service-related tasks, or help us analyse how the service is
          used. These parties can access your personal data only to perform those tasks
          on our behalf, and are obliged not to disclose or use it for anything else.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Your rights">
        <LegalList
          items={[
            'Access the personal data we hold about you',
            'Correct data that is inaccurate',
            'Request deletion of your data',
            'Opt out of non-essential communications',
            'Withdraw consent at any time',
          ]}
        />
      </LegalSection>

      <LegalSection n={8} title="Changes to this policy">
        <p>
          We may update this privacy policy from time to time. Changes are posted on
          this page along with a revised &ldquo;last updated&rdquo; date.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Contact us">
        <p>Questions about this policy can go straight to us:</p>
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

      <LegalCallout title="Our privacy-first promise">
        We will never sell your data, and we will never expose your personal phone
        number to the people who scan your tag. Your trust is the product.
      </LegalCallout>
    </LegalPage>
  )
}
