import {
  BadgeCheck,
  BellRing,
  Car,
  CloudRain,
  KeyRound,
  Lock,
  MessageSquare,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sticker,
  type LucideIcon,
} from 'lucide-react'

/* ── Problem / solution ─────────────────────────────────────────────── */

export type SolutionPoint = { title: string; body: string }

export const solutionPoints: SolutionPoint[] = [
  {
    title: 'Your plate is enough',
    body: 'The scanner sees only what you choose to show — vehicle type and a masked plate. Nothing that identifies you personally.',
  },
  {
    title: 'Your number stays yours',
    body: 'Calls and messages are relayed. Your phone number is never displayed, shared, or sold.',
  },
  {
    title: 'You stay in control',
    body: 'Mute a tag, pause notifications, or transfer it to a new vehicle at any time from the app.',
  },
]

/* ── How it works ───────────────────────────────────────────────────── */

export type Step = { n: number; icon: LucideIcon; title: string; body: string }

export const steps: Step[] = [
  {
    n: 1,
    icon: QrCode,
    title: 'Order your TruTag',
    body: 'Pick a sticker for your car or bike. It arrives pre-printed with a unique code, ready to activate.',
  },
  {
    n: 2,
    icon: BadgeCheck,
    title: 'Activate your tag',
    body: 'Scan the code once and link it to your vehicle in the app. It takes a few taps.',
  },
  {
    n: 3,
    icon: Car,
    title: 'Stick it on the glass',
    body: 'Rear windscreen for cars, rear mudguard for bikes. Thirty seconds, and it survives the monsoon.',
  },
  {
    n: 4,
    icon: BellRing,
    title: 'Get contacted safely',
    body: 'Someone scans, you get the alert. They can reach you without ever seeing your number.',
  },
]

/* ── What happens after a scan ──────────────────────────────────────── */

export type ScanFlowStep = { icon: LucideIcon; label: string; body: string }

export const scanFlow: ScanFlowStep[] = [
  {
    icon: ScanLine,
    label: 'QR scan',
    body: 'Someone points a phone camera at your TruTag sticker.',
  },
  {
    icon: ShieldCheck,
    label: 'Secure page',
    body: 'They land on a TruTag page showing limited vehicle info.',
  },
  {
    icon: MessageSquare,
    label: 'Message or call',
    body: 'They pick a reason, then send a message or request a private call.',
  },
  {
    icon: BellRing,
    label: 'You are notified',
    body: 'The alert reaches you instantly in the TruTag app.',
  },
  {
    icon: Lock,
    label: 'You respond',
    body: 'Reply or take the call through the relay. Your number stays hidden.',
  },
]

/** The three promises repeated under the how-it-works call to action. */
export const assurances: string[] = ['Easy to activate', 'Relayed and secure', 'Privacy first']

/* ── Features ───────────────────────────────────────────────────────── */

export type Feature = {
  icon: LucideIcon
  title: string
  body: string
  /**
   * Columns to occupy in the 3-column bento. The spans sum to exactly 9 so
   * the grid closes flush: 2 + 1 + 1 + 1 + 1 + 3.
   */
  span?: 2 | 3
}

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Your number, never exposed',
    body: 'Every message and call is relayed through TruTag. The person scanning your tag never sees a digit of your real number — and neither does anyone they forward it to.',
    span: 2,
  },
  {
    icon: ScanLine,
    title: 'No app needed to scan',
    body: 'Any phone camera or Google Lens opens the tag. The person helping you does not have to download anything.',
  },
  {
    icon: CloudRain,
    title: 'Built for Indian roads',
    body: 'Weatherproof laminate rated for monsoon, dust and direct summer sun.',
  },
  {
    icon: BellRing,
    title: 'Instant alerts',
    body: 'A push notification the moment someone scans, with the reason they picked.',
  },
  {
    icon: KeyRound,
    title: 'You hold the switch',
    body: 'Mute, pause, or transfer a tag to another vehicle whenever you like.',
  },
  {
    icon: Smartphone,
    title: 'Every vehicle in one place',
    body: 'Manage the whole garage — car, bike, scooter — from a single account, with separate contact rules for each tag.',
    span: 3,
  },
]

/* ── What the scanner sees ──────────────────────────────────────────── */

export const scanReasons = [
  'Blocking my car',
  'Lights left on',
  'Parked in a tow zone',
  'Minor scrape',
  'Emergency',
] as const

/* ── Vehicles ───────────────────────────────────────────────────────── */

export type VehicleCard = {
  eyebrow: string
  title: string
  body: string
  image: string
  alt: string
  points: string[]
}

export const vehicles: VehicleCard[] = [
  {
    eyebrow: 'Four-wheelers',
    title: 'For the car',
    body: 'Blocked someone in? Lights left on? A stranger can tell you in seconds instead of leaving a note under your wiper.',
    image: '/media/car.webp',
    alt: 'TruTag sticker on a car windscreen',
    points: ['Rear windscreen fit', 'Readable from two metres'],
  },
  {
    eyebrow: 'Two-wheelers',
    title: 'For the bike',
    body: 'Commuter or weekend rider, your tag rides with you — and holds up to everything the road throws at it.',
    image: '/media/bike.webp',
    alt: 'TruTag sticker on the rear mudguard of a motorbike',
    points: ['Mudguard and tank fit', 'Monsoon-proof laminate'],
  },
]

/* ── App ────────────────────────────────────────────────────────────── */

export const appPoints: string[] = [
  'Real-time alerts the moment somebody scans your tag',
  'Every vehicle and tag managed from one dashboard',
  'Relayed messaging that keeps your number hidden',
]

/* ── Pricing ────────────────────────────────────────────────────────── */

export type Plan = {
  id: string
  name: string
  blurb: string
  icon: LucideIcon
  /**
   * TODO(trutag): set the launch price, e.g. '₹499'. While this is null the
   * card honestly reads “Announced at launch” rather than inventing a number.
   */
  price: string | null
  priceNote: string
  includes: string[]
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'bike',
    name: 'Bike tag',
    blurb: 'One weatherproof tag sized for two-wheelers.',
    icon: Sticker,
    price: null,
    priceNote: 'per tag, delivered',
    includes: ['1 smart QR sticker', 'Lifetime tag activation', 'Relayed calls and messages'],
  },
  {
    id: 'car',
    name: 'Car tag',
    blurb: 'The full-size windscreen tag, our most popular format.',
    icon: QrCode,
    price: null,
    priceNote: 'per tag, delivered',
    includes: [
      '1 smart QR sticker',
      'Lifetime tag activation',
      'Relayed calls and messages',
      'Priority support',
    ],
    featured: true,
  },
  {
    id: 'garage',
    name: 'Garage pack',
    blurb: 'Cover the whole household in one order.',
    icon: Smartphone,
    price: null,
    priceNote: 'for 3 tags, delivered',
    includes: [
      '3 smart QR stickers',
      'Mix car and bike sizes',
      'One account, separate rules per tag',
      'Priority support',
    ],
  },
]

/* ── FAQ ────────────────────────────────────────────────────────────── */

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'Can the person scanning my tag see my phone number?',
    a: 'No. They see a contact screen, not a number. When they call or message, the connection is relayed through TruTag — your real number is never displayed and never leaves our system.',
  },
  {
    q: 'Do they need to install an app to scan it?',
    a: 'No. The tag is a standard QR code. Any phone camera, Google Lens, or QR app opens it in the browser. The app is only for you, the owner.',
  },
  {
    q: 'What stops people from spamming me?',
    a: 'A scan has to pick a reason before it can reach you, and every contact is rate-limited and logged. You can mute a tag instantly from the app if it is ever misused.',
  },
  {
    q: 'What happens if the sticker is peeled off or stolen?',
    a: 'Deactivate it from the app and it stops working immediately — a scan then resolves to nothing. You can pair a replacement tag with the same vehicle.',
  },
  {
    q: 'Will it survive the monsoon and summer heat?',
    a: 'The tag is printed on weatherproof vinyl with a UV laminate, rated for sustained rain, dust and direct sun. It is designed for outdoor use on Indian roads.',
  },
  {
    q: 'Can I move a tag to a different vehicle?',
    a: 'The tag itself is adhesive and single-use, but the registration is not. Transfer the code to a new vehicle in the app and apply a fresh sticker.',
  },
  {
    q: 'How much does it cost?',
    a: 'Launch pricing is being finalised. Write to us and we will send it the moment it is confirmed, along with an early-access slot.',
  },
  {
    q: 'Where do you deliver?',
    a: 'We are starting in Assam and shipping pan-India from launch. Tell us your city when you write in and we will confirm the timeline for your area.',
  },
]

/* ── Team ───────────────────────────────────────────────────────────── */

/** `photo` is optional — a member without one falls back to a monogram. */
export type TeamMember = {
  name: string
  role: string
  note: string
  photo?: string
}

export const team: TeamMember[] = [
  {
    name: 'I. Islam',
    role: 'Founder & CEO',
    note: "Sets TruTag's direction and owns the product vision.",
    photo: '/founder/injamamul.jpeg',
  },
  {
    name: 'Nagodip Adhikary',
    role: 'Chief Technology Officer',
    note: 'Builds the relay platform and the systems that keep numbers private.',
    photo: '/founder/nagodip.jpeg',
  },
  {
    name: 'Mukut Boruah',
    role: 'Chief Growth Officer',
    note: 'Runs partnerships and takes TruTag to new cities.',
    photo: '/founder/mukut.jpeg',
  },
  {
    name: 'Raju Ahmed',
    role: 'Chief Business Development Officer',
    note: 'Works with dealers, fleets and RWAs on the ground.',
    photo: '/founder/raju.jpeg',
  },
  {
    name: 'Bornali Medhi',
    role: 'Chief Marketing Officer',
    note: 'Shapes the brand and how TruTag talks about privacy.',
    photo: '/founder/bornali.jpeg',
  },
]
