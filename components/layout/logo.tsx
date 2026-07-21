import Image from 'next/image'

import { cn } from '@/lib/utils'

/**
 * The mark on its own. `decorative` drops the alt text for cases where an
 * adjacent wordmark already names the brand, so screen readers don't hear
 * "TruTag TruTag".
 */
export function LogoMark({
  className,
  decorative = false,
  priority = false,
}: {
  className?: string
  decorative?: boolean
  priority?: boolean
}) {
  return (
    <Image
      src="/media/logo.webp"
      alt={decorative ? '' : 'TruTag'}
      aria-hidden={decorative || undefined}
      width={256}
      height={312}
      priority={priority}
      className={cn('h-7 w-auto object-contain', className)}
    />
  )
}
