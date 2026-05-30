import { ArrowLink } from "@/components/common/ArrowLink";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { insights } from "@/constants/content";
import Image from "next/image";

export function InsightsSection() {
  return (
    <section className="section-dark py-24 md:py-32" id="insights">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 sm:px-8 md:grid-cols-[0.42fr_0.58fr]">
        <Reveal>
          <h2 className="max-w-[360px] text-balance text-3xl font-semibold leading-tight text-[color:var(--section-ink)] md:text-4xl">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <Button className="mt-8" href="#case-studies" variant="outline">
            INSIGHTS
          </Button>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal as="article" className="sm:col-span-2">
            <InsightCard featured insight={insights[0]} />
          </Reveal>
          {insights.slice(1).map((insight, index) => (
            <Reveal as="article" delay={index * 0.06} key={`${insight.category}-${index}`}>
              <InsightCard insight={insight} />
            </Reveal>
          ))}
          <ArrowLink className="justify-self-end sm:col-span-2" href="#case-studies">
            VIEW ALL INSIGHTS
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

type InsightCardProps = {
  insight: (typeof insights)[number];
  featured?: boolean;
};

function InsightCard({ insight, featured = false }: InsightCardProps) {
  return (
    <article
      className={`group rounded border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4  hover:border-accent/50 ${
        featured ? "grid gap-5 sm:grid-cols-[220px_1fr]" : ""
      }`}
    >
      <div
        className={`grid place-items-center rounded bg-[color:var(--deep-card)] p-4 ${
          featured ? "min-h-[190px]" : "min-h-[150px]"
        }`}
      >
        <Image
          alt="Fintech insight abstract graphic"
          className=" h-full max-h-[180px] w-full object-contain"
          height={267}
          src="/assets/insight-pattern.svg"
          width={295}
        />
      </div>
      <div className={featured ? "self-center" : "mt-5"}>
        <p className="text-xs text-accent">{insight.date}</p>
        <h3 className="mt-3 text-balance text-xl font-semibold leading-tight text-[color:var(--section-ink)]">
          {insight.title}
        </h3>
        <p className="mt-3 text-xs text-[color:var(--muted)]">{insight.category}</p>
        <a
          className="mt-6 inline-flex min-h-8 w-full items-center justify-center rounded border border-[color:var(--line)] text-xs font-semibold text-[color:var(--muted)] transition group-hover:border-accent group-hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#case-studies"
        >
          READ MORE
        </a>
      </div>
    </article>
  );
}
