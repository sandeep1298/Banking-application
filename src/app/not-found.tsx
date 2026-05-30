import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[color:var(--section-dark)] px-5 text-[color:var(--section-ink)]">
      <section className="w-full max-w-md rounded border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-8 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
          The page you are looking for does not exist.
        </p>
        <Button className="mt-6" href="/">
          Back to home
        </Button>
      </section>
    </main>
  );
}
