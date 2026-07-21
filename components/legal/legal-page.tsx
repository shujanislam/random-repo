import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'

/**
 * Shared chrome for the policy pages: back link, title block, and the reading
 * measure. Keeps the two documents identical in structure so a third one is
 * a single file with no layout decisions to make.
 */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro?: string
  children: ReactNode
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 sm:px-6 sm:pt-40">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </Link>

      <header className="mt-8 border-b border-neutral-200 pb-8">
        <h1 className="text-4xl font-semibold tracking-[-0.02em] text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: {updated}</p>
        {intro ? (
          <p className="mt-5 leading-relaxed text-pretty text-neutral-600">{intro}</p>
        ) : null}
      </header>

      <div className="mt-10 space-y-10">{children}</div>
    </article>
  )
}

export function LegalSection({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
        <span className="mr-2 font-mono text-sm tabular-nums text-brand-500">
          {String(n).padStart(2, '0')}
        </span>
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-pretty text-neutral-600">{children}</div>
    </section>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="ml-1 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-300" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function LegalCallout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
      <h2 className="text-base font-semibold text-brand-900">{title}</h2>
      <div className="mt-2 leading-relaxed text-brand-900/80">{children}</div>
    </aside>
  )
}
