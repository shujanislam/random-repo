import { AppPreview } from '@/components/sections/app-preview'
import { Faq } from '@/components/sections/faq'
import { Features } from '@/components/sections/features'
import { FinalCta } from '@/components/sections/final-cta'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Pricing } from '@/components/sections/pricing'
import { Problem } from '@/components/sections/problem'
import { ScanPreview } from '@/components/sections/scan-preview'
import { Team } from '@/components/sections/team'
import { Vehicles } from '@/components/sections/vehicles'
import { faqs } from '@/lib/content'
import { site } from '@/lib/site'

/** Rich-result markup for the questions that already exist on the page. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TruTag smart QR sticker',
  description: site.description,
  brand: { '@type': 'Brand', name: site.name },
  category: 'Vehicle accessories',
  url: site.url,
}

/**
 * A pure Server Component: every section below renders on the server and
 * ships as HTML. The only JavaScript this page sends is the header and the
 * scroll-reveal observer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <ScanPreview />
      <Features />
      <Vehicles />
      <AppPreview />
      <Pricing />
      <Faq />
      <Team />
      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([productJsonLd, faqJsonLd]) }}
      />
    </>
  )
}
