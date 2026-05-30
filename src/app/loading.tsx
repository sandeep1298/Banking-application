export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--section-dark)] px-5 text-[color:var(--section-ink)]">
      <div className="w-full max-w-sm rounded border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-6">
        <p className="text-sm font-semibold">Loading N7 Banking</p>
        <div className="mt-4 h-2 overflow-hidden rounded bg-[color:var(--line)]">
          <div className="h-full w-1/2 animate-pulse rounded bg-accent" />
        </div>
      </div>
    </main>
  );
}
