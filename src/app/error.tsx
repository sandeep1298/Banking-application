"use client";

import { RotateCcw } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--section-dark)] px-5 text-[color:var(--section-ink)]">
      <section className="w-full max-w-md rounded border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-8 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
          The page could not finish loading. Try again to reload the experience.
        </p>
        <button
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded bg-accent px-5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={reset}
          type="button"
        >
          <RotateCcw aria-hidden size={16} />
          Retry
        </button>
      </section>
    </main>
  );
}
