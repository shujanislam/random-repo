import Image from 'next/image'

import { PhoneFrame } from '@/components/ui/phone-frame'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

/**
 * The most persuasive thing this product has is the screen a *stranger* gets,
 * because that is where the privacy promise is either kept or broken — so it
 * is the real thing, straight from the scan web app.
 */
function ScannerScreen() {
  return (
    <Image
      src="/media/webapp-screenshot.jpeg"
      alt="The screen a person sees after scanning a TruTag sticker: the registered vehicle plate, then quick alerts to pick from — accident detected, emergency alert, wrong parking, or send a message."
      width={720}
      height={1440}
      sizes="(min-width: 640px) 296px, 252px"
      className="h-full w-full object-cover"
    />
  )
}

export function ScanPreview() {
  return (
    <Section
      id="scan"
      tone="dark"
      spacing="lg"
      className="dot-grid"
      aria-labelledby="scan-title"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            id="scan-title"
            eyebrow="What the scanner sees"
            onDark
            size="lg"
            title="They get a way to reach you. Not a way to find you."
            lede="This is the entire experience for the person who scans your tag — no signup, no app, and no personal detail anywhere on the screen."
          />

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-accent pl-4">
              <dt className="text-sm font-semibold text-white">Shown to them</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-white/60">
                Vehicle type and a partially masked plate — enough to confirm they
                have the right vehicle.
              </dd>
            </div>
            <div className="border-l-2 border-white/15 pl-4">
              <dt className="text-sm font-semibold text-white">Never shown</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-white/60">
                Your name, number, address, or the full registration. Not on the
                screen, not in the reply.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="flex justify-center lg:justify-end">
          {/* Sized to the screenshot's 1:2 screen plus the bezel, so it fills
              edge to edge with no crop and no letterboxing. */}
          <PhoneFrame notch={false} className="aspect-[272/524]">
            <ScannerScreen />
          </PhoneFrame>
        </Reveal>
      </div>
    </Section>
  )
}
