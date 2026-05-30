import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

export function FinalCta() {
  return (
    <section className="section-dark py-20">
      <Reveal className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:px-20">
        <div>
          <h2 className="max-w-[610px] text-balance text-4xl font-semibold leading-tight text-[color:var(--section-ink)] md:text-6xl">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="mt-6 max-w-[470px] text-sm leading-6 text-[color:var(--muted)]">
            CB7 helps your financial institution improve the client experience, automate and
            optimize procedures, simplify banking operations.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button href="#footer" variant="outline">
            CONTACT US
          </Button>
          <Button href="#top">REQUEST DEMO</Button>
        </div>
      </Reveal>
    </section>
  );
}
