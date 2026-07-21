/**
 * Parked just off-screen and slid into view on focus.
 *
 * Deliberately not `sr-only focus:not-sr-only`: those two utilities both set
 * `position` (absolute, then static), so which one wins depends on stylesheet
 * order rather than on intent. A transform reveal has no such conflict — the
 * link is always in the DOM, always focusable, and always lands in the same
 * place when it appears.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[100] -translate-y-[calc(100%+1.5rem)] rounded-full bg-brand-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-200 focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  )
}
