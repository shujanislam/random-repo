import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

const button = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Brand blue carries the primary action — 5.3:1 against white text. */
        primary: 'bg-brand-500 text-white shadow-sm shadow-brand-900/20 hover:bg-brand-600',
        secondary:
          'border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50',
        /* For dark surfaces, where the gold accent finally gets to shine. */
        accent: 'bg-accent text-neutral-950 hover:bg-accent/85',
        onDark:
          'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/20',
        ghost: 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-[0.9375rem]',
      },
      block: { true: 'w-full', false: '' },
    },
    defaultVariants: { variant: 'primary', size: 'lg', block: false },
  },
)

type Variants = VariantProps<typeof button>

type AsButton = { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>
type AsLink = { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export type ButtonProps = Variants & { className?: string; children: ReactNode } & (
    | AsButton
    | AsLink
  )

/**
 * One button, three renderings: a `<button>`, a client-routed `<Link>` for
 * in-app hrefs, or a plain `<a>` for mail/tel/external — chosen from the
 * shape of the props, so callers never have to think about it.
 */
export function Button({ className, variant, size, block, children, ...props }: ButtonProps) {
  const classes = cn(button({ variant, size, block }), className)

  if (props.href === undefined) {
    const { type = 'button', ...rest } = props as AsButton
    return (
      <button type={type} className={classes} {...rest}>
        {children}
      </button>
    )
  }

  const { href, ...rest } = props as AsLink

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const isExternalHttp = href.startsWith('http')
  return (
    <a
      href={href}
      className={classes}
      {...(isExternalHttp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...rest}
    >
      {children}
    </a>
  )
}

export { button as buttonVariants }
