import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
import { contact, site } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  // metadataBase makes every relative OG/canonical URL below resolve to an
  // absolute one — without it, link previews silently ship broken image URLs.
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — privacy-first vehicle QR sticker`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: '/',
    title: `${site.name} — be reachable, stay private`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — be reachable, stay private`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // Icons come from the app/ file conventions (favicon.ico, icon.png,
  // apple-icon.png); the PWA set comes from app/manifest.ts.
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  email: contact.email,
  address: { '@type': 'PostalAddress', addressLocality: contact.city, addressCountry: 'IN' },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="bg-white font-sans text-neutral-900 selection:bg-brand-500 selection:text-white">
        <SkipLink />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
