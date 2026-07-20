import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TruTag - Privacy-First Vehicle QR Sticker',
  description: 'TruTag is a privacy-focused smart QR sticker for vehicles. Contact vehicle owners securely without sharing personal phone numbers. Perfect for parking, emergencies, and accidents.',
  keywords: 'vehicle QR sticker, privacy, smart sticker, vehicle contact, QR code, safety, India',
  generator: 'v0.app',
  openGraph: {
    title: 'TruTag - Privacy Meets Connection',
    description: 'Secure vehicle identification and communication without compromising privacy.',
    type: 'website',
    locale: 'en_US',
  },
  // Icons are wired up by the app/ file conventions: favicon.ico, icon.png
  // and apple-icon.png. The PWA/Android set comes from app/manifest.ts.
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-white scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
