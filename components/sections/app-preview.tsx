import Image from 'next/image'

import { CheckItem } from '@/components/ui/check-item'
import { PhoneFrame } from '@/components/ui/phone-frame'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { appPoints } from '@/lib/content'

export function AppPreview() {
  return (
    <Section id="app" spacing="lg" divider aria-labelledby="app-title">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex justify-center lg:order-2 lg:justify-end">
          <PhoneFrame>
            <Image
              src="/media/app-screenshot.webp"
              alt="The TruTag owner app, showing a registered vehicle and shortcuts to profile, contact settings, QR code and adding a vehicle."
              width={720}
              height={1462}
              sizes="(min-width: 640px) 320px, 272px"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </Reveal>

        <Reveal delay={80} className="lg:order-1">
          <SectionHeading
            id="app-title"
            eyebrow="The owner app"
            title="Your side of the tag."
            lede="Everything you need to stay reachable, and the switch to stop being reachable whenever you want."
          />
          <ul className="mt-9 space-y-4">
            {appPoints.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
