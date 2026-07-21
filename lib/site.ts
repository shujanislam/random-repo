/**
 * Single source of truth for everything environment- or business-specific.
 *
 * ⚠️  BEFORE LAUNCH — set `contact.whatsapp` here and the plan prices in
 *     lib/content.ts. Those are the only two places left in the codebase
 *     that need editing to make the site's calls-to-action complete.
 */

export const site = {
  name: 'TruTag',
  tagline: 'When privacy meets connection',
  url: 'https://trutag.in',
  locale: 'en_IN',
  description:
    'TruTag is a privacy-first smart QR sticker for vehicles. Anyone can reach you about your car or bike in seconds — without ever seeing your phone number.',
} as const

export const contact = {
  email: 'trutagofficial@gmail.com',
  /**
   * Full international format, digits only — e.g. '919876543210'.
   * Left null deliberately: a placeholder number would dial a real stranger.
   * Set it and the WhatsApp CTAs appear automatically across the site.
   */
  whatsapp: null as string | null,
  city: 'Guwahati, Assam',
} as const

export const social = {
  instagram: null as string | null,
  linkedin: null as string | null,
  x: null as string | null,
} as const

export const mailtoOrder = `mailto:${contact.email}?subject=${encodeURIComponent(
  'TruTag order enquiry',
)}&body=${encodeURIComponent(
  'Hi TruTag team,\n\nI would like to order a TruTag sticker.\n\nVehicle type (car / bike):\nCity:\n\nThanks!',
)}`

export const mailtoContact = `mailto:${contact.email}?subject=${encodeURIComponent(
  'TruTag enquiry',
)}`

export const whatsappHref = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      "Hi TruTag, I'd like to know more about the sticker.",
    )}`
  : null

/** Sections that appear in the header. Order defines the scroll-spy order. */
export const navSections = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
] as const
