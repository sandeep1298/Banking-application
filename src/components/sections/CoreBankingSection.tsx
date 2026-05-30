import { ArrowLink } from "@/components/common/ArrowLink";
import { Button } from "@/components/common/Button";
import { CheckBadge } from "@/components/common/CheckBadge";
import { DashboardMockup } from "@/components/common/DashboardMockup";
import { Reveal } from "@/components/common/Reveal";
import { coreCapabilities } from "@/constants/content";

export function CoreBankingSection() {
  return (
    <section className="section-dark relative overflow-hidden pb-24 pt-10 md:pb-32" id="core-banking">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-20">
        <div className="relative grid gap-12 md:grid-cols-[0.45fr_0.55fr] md:items-center md:min-h-[540px]">
          <span className="outline-word pointer-events-none absolute left-0 top-10 select-none text-[clamp(5.5rem,18vw,16rem)] font-semibold leading-none md:-left-4 md:text-[clamp(8rem,24vw,30rem)]">
            CB7
          </span>
          <Reveal className="relative z-10 max-w-[440px]" direction="left">
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[color:var(--section-ink)] md:text-5xl">
              <span className="lg:whitespace-nowrap">A complete cloud-based</span>{" "}
              <span>core banking.</span>
            </h2>
            <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
              Faster time to market with our cloud-based core banking services.
            </p>
            <div className="mt-8 grid justify-items-start gap-4">
              <Button href="#contact">REQUEST DEMO</Button>
              <ArrowLink href="#capabilities">LEARN MORE</ArrowLink>
            </div>
          </Reveal>
          <Reveal
            className="relative z-10 w-full max-w-[620px] justify-self-center md:justify-self-end md:w-[620px] md:translate-x-[calc((100vw-1440px)/2+160px)]"
            delay={0.1}
            direction="right"
          >
            <DashboardMockup variant="compact" />
          </Reveal>
        </div>

        <div
          className="grid gap-12 pt-8 md:grid-cols-[0.45fr_0.55fr] md:items-center md:gap-8 md:pt-16"
          id="capabilities"
        >
          <Reveal className="overflow-visible pb-4 md:-ml-[calc((100vw-1440px)/2+250px)]" direction="left">
            <DashboardMockup variant="efficient" />
          </Reveal>
          <Reveal delay={0.1} direction="right">
            <h3 className="max-w-[450px] text-balance text-2xl font-semibold leading-tight text-[color:var(--section-ink)] md:text-3xl">
              Run a more efficient, flexible and digitally connected banking system
            </h3>
            <p className="mt-5 text-sm font-semibold text-[color:var(--muted)]">
              What you will get
            </p>
            <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {coreCapabilities.map(({ label }) => (
                <div className="flex items-start gap-3" key={label}>
                  <CheckBadge />
                  <span className="text-sm leading-5 text-[color:var(--muted)]">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          className="relative mt-24 overflow-hidden rounded-[8px] border border-accent/10 bg-[linear-gradient(135deg,rgba(0,145,255,0.18),rgba(0,13,18,0.98)_48%,rgba(0,13,18,0.9))] p-8 md:p-14"
          id="contact"
        >
          <span className="outline-word pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none text-[clamp(6rem,20vw,16rem)] font-semibold leading-none">
            CB7
          </span>
          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="max-w-[500px] text-balance text-3xl font-semibold leading-tight text-white md:text-4xl">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="mt-4 max-w-[450px] text-sm leading-6 text-slate-300">
                CB7 helps your financial institution improve the client experience, automate and
                optimize procedures, simplify banking operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <Button
                className="!border-white/30 !text-white hover:!border-white hover:!bg-white hover:!text-[color:var(--button-hover-ink)]"
                href="#footer"
                variant="outline"
              >
                CONTACT US
              </Button>
              <Button href="#top">REQUEST DEMO</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
