'use client';

import React from 'react';
import Image from 'next/image';
import {
  Shield,
  Lock,
  MessageCircle,
  QrCode,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Globe,
  Share2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import TeamCard, { type TeamMember } from '@/components/TeamCard';

const team: TeamMember[] = [
  {
    name: 'I.Islam',
    designation: 'Founder & CEO',
    note: "Leading TruTag's vision and business strategy.",
    photo: '/placeholder-user.jpg',
  },
  {
    name: 'Mukut Boruah',
    designation: 'Chief Growth Officer (CGO)',
    note: 'Driving partnerships and business growth.',
    photo: '/placeholder-user.jpg',
  },
  {
    name: 'Raju Ahmed',
    designation: 'Chief Business Development Officer (CBDO)',
    note: 'Building dealer and customer relationships.',
    photo: '/placeholder-user.jpg',
  },
  {
    name: 'Bornali Medhi',
    designation: 'Chief Marketing Officer (CMO)',
    note: 'Leading branding and marketing initiatives.',
    photo: '/placeholder-user.jpg',
  },
  {
    name: 'Nagodip Adhikary',
    designation: 'Chief Technology Officer (CTO)',
    note: 'Leading product architecture and technology.',
    photo: '/placeholder-user.jpg',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Privacy First',
    body: 'Your personal phone number never gets exposed. All communication is encrypted and secure.',
  },
  {
    icon: QrCode,
    title: 'Smart QR Sticker',
    body: 'Durable, weather-resistant stickers designed for vehicles. Scan and access vehicle info instantly.',
  },
  {
    icon: MessageCircle,
    title: 'Secure Messaging',
    body: 'Send and receive messages through our platform. No personal details are ever shared.',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    body: 'Industry-standard encryption protects all your data. Your safety is our top priority.',
  },
  {
    icon: CheckCircle,
    title: 'Easy Setup',
    body: 'Register in minutes, activate your sticker, and start receiving contacts securely.',
  },
  {
    icon: ArrowUpRight,
    title: 'Pan India',
    body: "Built for India's vehicle community. Expanding nationwide to protect every vehicle owner.",
  },
];

const solutionPoints = [
  {
    title: 'Vehicle information visible',
    body: 'The QR sticker surfaces the details that matter, instantly.',
  },
  {
    title: 'Phone number protected',
    body: 'Your personal contact stays private at every step.',
  },
  {
    title: 'Secure messaging',
    body: 'Communication is routed through an encrypted channel.',
  },
];

export default function Home() {
  return (
    <div className="bg-white text-neutral-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="hero-bg relative min-h-screen overflow-hidden flex flex-col justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-14 sm:pb-16"
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Left panel - Hero text */}
          <div className="hero-copy max-w-xl space-y-6 sm:space-y-8">
            <span className="eyebrow">Privacy-first vehicle identification</span>

            <h1 className="hero-title">
              Where privacy meets connection.
            </h1>

            <p className="hero-lede text-base sm:text-lg md:text-xl text-white md:text-neutral-600 max-w-xl leading-relaxed">
              Secure vehicle identification without exposing personal phone
              numbers. Reach owners instantly through privacy-first smart QR
              stickers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="btn-primary">
                Buy Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">Contact Us</button>
            </div>

            <div className="hero-stats pt-6 sm:pt-10 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/20 md:border-neutral-200">
              <div className="pt-5 sm:pt-8">
                <div className="hero-stat-value text-2xl sm:text-3xl font-semibold tracking-tight">100%</div>
                <p className="hero-stat-label text-xs sm:text-sm text-zinc-300 md:text-neutral-500 mt-1">Privacy protected</p>
              </div>
              <div className="pt-5 sm:pt-8">
                <div className="hero-stat-value text-2xl sm:text-3xl font-semibold tracking-tight">Instant</div>
                <p className="hero-stat-label text-xs sm:text-sm text-zinc-300 md:text-neutral-500 mt-1">Secure contact</p>
              </div>
              <div className="pt-5 sm:pt-8">
                <div className="hero-stat-value text-2xl sm:text-3xl font-semibold tracking-tight">India</div>
                <p className="hero-stat-label text-xs sm:text-sm text-zinc-300 md:text-neutral-500 mt-1">Launch ready</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 py-28 border-t border-neutral-200 bg-neutral-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="eyebrow">The problem</span>
            <h2 className="section-title">Reaching someone shouldn&apos;t cost your privacy.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Can&apos;t reach someone?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  When someone damages your vehicle, parks incorrectly, or leaves
                  your lights on, you have no way to contact them. Traditional
                  solutions require sharing personal information.
                </p>
              </div>

              <div className="space-y-3 pt-8 border-t border-neutral-200">
                <h3 className="text-xl font-semibold">Our solution: TruTag</h3>
                <p className="text-neutral-600 leading-relaxed">
                  A privacy-first smart QR sticker that displays vehicle
                  information while keeping your personal phone number completely
                  hidden. Messages go through a secure channel.
                </p>
              </div>
            </div>

            <div className="card p-8 divide-y divide-neutral-200">
              {solutionPoints.map((point) => (
                <div key={point.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">{point.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-8 md:p-10">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 mb-8">
              How it works
            </h3>
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-50 p-6">
                  <Image
                    src="/qr.png"
                    alt="TruTag QR sticker"
                    width={640}
                    height={480}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-sm font-medium text-neutral-900">
                    1
                  </div>
                  <h4 className="text-2xl font-semibold tracking-tight">You need to buy</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Get your TruTag smart QR sticker and activate it for your vehicle.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-sm font-medium text-neutral-900">
                    2
                  </div>
                  <h4 className="text-2xl font-semibold tracking-tight">Stick it in the vehicle</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Place the sticker where it is easy to notice and scan when someone needs to reach you.
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-50">
                  <Image
                    src="/car.png"
                    alt="TruTag sticker on a car"
                    width={640}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-50">
                  <Image
                    src="/scanning.png"
                    alt="Scanning a TruTag QR sticker"
                    width={640}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-sm font-medium text-neutral-900">
                    3
                  </div>
                  <h4 className="text-2xl font-semibold tracking-tight">Scanning connects securely</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Anyone can scan the code to contact you while your phone number stays private.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="px-6 py-28 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto w-full space-y-24">
          {/* Row 1 - text left, car right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5">
              <span className="eyebrow">For four-wheelers</span>
              <h2 className="section-title">Peace of mind for your car.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                Blocked someone in? Left your lights on? TruTag lets anyone reach
                you in seconds — while your personal details stay completely
                hidden behind our secure channel.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Ideal for parking, emergencies, and accidents.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Encrypted messaging with zero exposed contact info.
                  </span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-neutral-50">
              <Image
                src="/car.png"
                alt="TruTag on a car"
                width={720}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2 - bike left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-neutral-50 lg:order-1">
              <Image
                src="/bike.png"
                alt="TruTag on a motorbike"
                width={720}
                height={540}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 lg:order-2">
              <span className="eyebrow">For two-wheelers</span>
              <h2 className="section-title">Built for every bike on the road.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                From daily commuters to weekend riders, TruTag keeps you
                reachable without ever revealing your number. A quick scan is all
                it takes to connect — safely and privately.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Weatherproof stickers that survive every ride.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Instant alerts if your bike needs attention.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-28 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="eyebrow">Features</span>
            <h2 className="section-title">Everything you need, nothing you don&apos;t.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-8 hover:bg-neutral-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-soft flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="px-6 py-28 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - iPhone mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[300px] sm:w-[340px] aspect-[9/19.5] rounded-[3rem] bg-neutral-900 p-3 shadow-2xl shadow-neutral-900/20">
              {/* Side buttons */}
              <div className="absolute -left-[3px] top-28 h-8 w-[3px] rounded-l bg-neutral-800" />
              <div className="absolute -left-[3px] top-40 h-12 w-[3px] rounded-l bg-neutral-800" />
              <div className="absolute -left-[3px] top-56 h-12 w-[3px] rounded-l bg-neutral-800" />
              <div className="absolute -right-[3px] top-44 h-16 w-[3px] rounded-r bg-neutral-800" />

              {/* Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-black">
                <Image
                  src="/app-screenshot.jpeg"
                  alt="TruTag app screenshot"
                  width={600}
                  height={1300}
                  className="h-full w-full object-cover"
                />
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-3 -translate-x-1/2 h-7 w-24 rounded-full bg-black" />
              </div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="space-y-6">
            <span className="eyebrow">The app</span>
            <h2 className="section-title">A glance at TruTag in your pocket.</h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
              Everything you need to stay reachable — without ever exposing your
              number. Manage your stickers, receive secure messages, and stay in
              control, right from your phone.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Real-time, private notifications the moment someone reaches out.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Manage every sticker and vehicle from a single dashboard.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  Encrypted messaging that keeps your phone number hidden.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <button className="btn-primary">
                Get the App <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="px-6 py-28 border-t border-neutral-200 bg-neutral-50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="eyebrow">Team</span>
            <h2 className="section-title">The people behind TruTag.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/trutag-logo-bgless.png"
                  alt=""
                  width={695}
                  height={830}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-base font-semibold tracking-tight">TruTag</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                Privacy-first vehicle identification for India.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-neutral-900">Product</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <a href="/#features" className="hover:text-brand transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-neutral-900">Company</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <a href="/#about" className="hover:text-brand transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#team" className="hover:text-brand transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-neutral-900">Legal</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li>
                  <a href="/terms" className="hover:text-brand transition-colors">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-brand transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              &copy; 2026 TruTag. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" aria-label="Email" className="text-neutral-400 hover:text-brand transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Website" className="text-neutral-400 hover:text-brand transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="text-neutral-400 hover:text-brand transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
