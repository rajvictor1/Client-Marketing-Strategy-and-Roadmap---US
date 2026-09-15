"use client";

export default function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border-color)] bg-[var(--bg-surface)]/95 px-4 py-3 backdrop-blur-md md:px-8 md:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="hidden md:block">
          <p className="text-sm font-medium text-[var(--text-primary)]">Founding cohort — applications open</p>
          <p className="text-xs text-[var(--text-muted)]">Limited to 12–15 writers</p>
        </div>
        <a
          href="#apply"
          className="w-full rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-bright)] px-5 py-3 text-center text-sm font-semibold text-[var(--ink)] shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:shadow-xl md:w-auto md:px-8 md:text-base"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
