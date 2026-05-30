import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { HeroVisual } from "@/components/common/HeroVisual";
import { Reveal } from "@/components/common/Reveal";

const trustedBrands = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"];

export function HeroSection() {
  return (
    <section
      className="section-dark relative overflow-hidden pt-32 md:min-h-[811px] md:pt-[212px]"
      id="top"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 pb-16 sm:px-8 md:grid-cols-[608px_562px] md:items-center md:justify-between md:px-20">
        <Reveal className="max-w-[608px]">
          <h1 className="text-[44px] font-semibold leading-[1.08] text-[color:var(--section-ink)] sm:text-[56px] md:text-[64px]">
            <span className="md:whitespace-nowrap">The new foundation</span>{" "}
            <span className="md:whitespace-nowrap">of modern banking</span>
          </h1>
          <p className="mt-6 max-w-[360px] text-base leading-7 text-[color:var(--muted)]">
            We drive innovation and growth, provide seamless customer experience and operational
            excellence.
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
            <Button href="#contact">REQUEST DEMO</Button>
            <Button href="#footer" variant="outline">
              CONTACT US
            </Button>
          </div>
        </Reveal>

        <Reveal className="md:pt-2" delay={0.1}>
          <HeroVisual />
        </Reveal>
      </div>

      <Reveal className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 md:px-20" delay={0.2}>
        <p className="text-sm font-medium text-[color:var(--muted)]">Trusted by:</p>
        <div className="mt-4 flex max-w-[760px] flex-wrap items-center gap-x-8 gap-y-4">
          {trustedBrands.map((logo) => (
            <span
              className="inline-flex whitespace-nowrap items-center gap-2 text-sm font-semibold text-[color:var(--muted)] opacity-85 transition hover:text-accent hover:opacity-100"
              key={logo}
            >
              <BrandLogo name={logo} />
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
