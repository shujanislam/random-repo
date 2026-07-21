/** @type {import('next').NextConfig} */
const nextConfig = {
  // `typescript.ignoreBuildErrors` used to live here and was silently shipping
  // broken types to production. Type errors are build failures again.
  images: {
    // Serve modern formats to browsers that advertise support; Next falls back
    // automatically for the rest. `unoptimized: true` used to disable all of it.
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
}

export default nextConfig
