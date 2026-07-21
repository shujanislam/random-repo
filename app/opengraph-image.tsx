import { ImageResponse } from 'next/og'

import { site } from '@/lib/site'

export const alt = 'TruTag — be reachable, stay private'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Generated at build time by next/og, so the link preview stays in sync with
 * the brand without anyone maintaining a 1200×630 PNG by hand.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #001845 0%, #00317f 55%, #0060f0 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: '#fccc0c',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            Be reachable.
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              color: '#fccc0c',
            }}
          >
            Stay private.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 900,
            }}
          >
            A smart QR sticker that lets anyone reach you about your vehicle —
            without ever seeing your phone number.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.6)' }}>
          trutag.in
        </div>
      </div>
    ),
    size,
  )
}
