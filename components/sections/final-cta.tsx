import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { contact, mailtoOrder, whatsappHref } from '@/lib/site'

export function FinalCta() {
  return (
    <Section id="contact" tone="dark" spacing="md" className="dot-grid">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-balance text-white sm:text-5xl">
            Put a <span className="marker text-neutral-950">private</span> line on your
            windscreen.
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-pretty text-white/70">
            Reserve a tag for your car or bike and we will get back to you with
            pricing and a delivery slot for your city.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={mailtoOrder} variant="accent">
              Reserve your tag <ArrowRight aria-hidden="true" />
            </Button>
            {whatsappHref ? (
              <Button href={whatsappHref} variant="onDark">
                <MessageCircle aria-hidden="true" />
                WhatsApp us
              </Button>
            ) : (
              <Button href={`mailto:${contact.email}`} variant="onDark">
                <Mail aria-hidden="true" />
                {contact.email}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
