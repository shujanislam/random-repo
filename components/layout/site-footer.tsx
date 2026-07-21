import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

import { LogoMark } from '@/components/layout/logo'
import { contact, mailtoContact, site, social } from '@/lib/site'

type FooterLink = { label: string; href: string }

const productLinks: FooterLink[] = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

const companyLinks: FooterLink[] = [
  { label: 'The team', href: '/#team' },
  { label: 'Contact us', href: mailtoContact },
]

const legalLinks: FooterLink[] = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms & conditions', href: '/terms' },
]

/* Only real destinations ship. A social icon that points at "#" costs more
   trust than the missing icon does. */
const socialLinks = Object.entries(social)
  .filter(([, href]) => Boolean(href))
  .map(([label, href]) => ({ label, href: href as string }))

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-neutral-600 underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-auto" decorative />
              <span className="text-lg font-semibold tracking-tight">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Privacy-first vehicle identification, built in India. Reachable without
              being exposed.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-neutral-600">
              <li>
                <a
                  href={mailtoContact}
                  className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
                >
                  <Mail className="size-4 text-neutral-400" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-neutral-400" aria-hidden="true" />
                {contact.city}
              </li>
            </ul>
          </div>

          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          {socialLinks.length > 0 ? (
            <ul className="flex gap-5 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize text-neutral-500 underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
