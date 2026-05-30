import { AnimatedTicker } from "@/components/common/AnimatedTicker";
import { ArrowLink } from "@/components/common/ArrowLink";
import { Button } from "@/components/common/Button";
import { CheckBadge } from "@/components/common/CheckBadge";
import { PhoneMockup } from "@/components/common/PhoneMockup";
import { Reveal } from "@/components/common/Reveal";
import { digitalBullets } from "@/constants/content";
import Image from "next/image";

export function DigitalBankingSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--light-band)] text-slate-950" id="digital-banking">
      <Image
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[clamp(12rem,26vw,23rem)] top-[clamp(7rem,12vw,10.625rem)] z-0 hidden h-auto w-[min(52vw,680px)] md:block"
          height={800}
          sizes="(max-width: 768px) 0px, 52vw"
          src="/assets/n7-pattern-backdrop.svg"
          width={860}
        />
      <Image
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-[clamp(30rem,43vw,38rem)] z-0 hidden h-auto w-[min(34vw,480px)] md:block"
        height={1246}
        sizes="(max-width: 768px) 0px, 34vw"
        src="/assets/digital-banking-side-pattern.svg"
        width={480}
      />
      <AnimatedTicker />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:px-20 md:py-32">
        
        <div className="grid gap-16 md:grid-cols-[0.72fr_1fr] md:items-start">
          <Reveal>
            <h2 className="max-w-[380px] text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-5 max-w-[340px] text-sm leading-6 text-slate-600">
              N7 helps your financial institution improve the client experience, automate and
              optimize procedures.
            </p>
            <div className="mt-8 grid justify-items-start gap-4">
              <Button href="#contact">REQUEST DEMO</Button>
              <ArrowLink className="text-slate-950 hover:text-accent-strong" href="#digital-features">
                LEARN MORE
              </ArrowLink>
            </div>
          </Reveal>

          <div className="grid gap-14" id="digital-features">
            <Reveal className="grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
              <div className="relative">
                <span className="outline-word pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] font-semibold leading-none opacity-35">
                  N7
                </span>
                <PhoneMockup hoverEffect="lift" variant="home" />
              </div>
              <FeatureCopy
                bullets={digitalBullets.slice(0, 4)}
                eyebrow="Fully compliant with regulatory requirement"
                text="The governance of risk management and compliance is enhanced by real-time monitoring, automated checks, and configurable service workflows."
              />
            </Reveal>

            <Reveal className="grid gap-10 md:grid-cols-[1fr_220px] md:items-center" delay={0.1}>
              <div className="relative">
                <Image
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -top-12 h-auto w-[96px] opacity-20"
                  height={205}
                  src="/assets/n7-outline-watermark.svg"
                  width={96}
                />
                <FeatureCopy
                  bullets={digitalBullets.slice(4, 8)}
                  eyebrow="No legacy IT systems"
                  text="Our digital banking solution is an end-to-end software suite with integration tools, high availability, and controlled operational handoffs."
                />
              </div>
              <PhoneMockup hoverEffect="tiltRight" variant="chart" />
            </Reveal>

            <Reveal className="grid gap-10 md:grid-cols-[220px_1fr] md:items-center" delay={0.1}>
              <PhoneMockup hoverEffect="tiltLeft" variant="menu" />
              <FeatureCopy
                bullets={digitalBullets.slice(1, 5)}
                eyebrow="No traditional branches"
                text="Our full digital banking stack allows banks to launch customer journeys with fewer physical dependencies and measurable service quality."
              />
            </Reveal>
          </div>
        </div>

        <Reveal className="asset-cta-bg mt-24 overflow-hidden rounded-[8px] p-8 text-white shadow-[0_30px_80px_rgba(0,80,120,0.18)] md:p-14">
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <span className="outline-word pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,18vw,14rem)] font-semibold leading-none opacity-50">
              N7
            </span>
            <div className="relative z-10">
              <h2 className="max-w-[520px] text-balance text-3xl font-semibold leading-tight md:text-4xl">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="mt-4 max-w-[500px] text-sm leading-6 text-slate-300">
                N7 helps your financial institution improve the client experience, automate and
                optimize procedures, simplify banking operations.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-5">
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

type FeatureCopyProps = {
  eyebrow: string;
  text: string;
  bullets: string[];
};

function FeatureCopy({ eyebrow, text, bullets }: FeatureCopyProps) {
  return (
    <div>
      <p className="text-lg font-semibold text-slate-950">{eyebrow}</p>
      <p className="mt-4 max-w-[430px] text-sm leading-6 text-slate-600">{text}</p>
      <ul className="mt-5 grid gap-3">
        {bullets.map((bullet) => (
          <li className="flex items-start gap-3 text-sm text-slate-700" key={bullet}>
            <CheckBadge />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
