"use client";

import { BrandLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const studies = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    brandName: "Zoomerr"
  },
  {
    id: 2,
    category: "GETTING STARTED",
    title: "Transforming traditional banking to digital-first",
    brandName: "SmartFinder"
  },
  {
    id: 3,
    category: "GETTING STARTED",
    title: "Building seamless omnichannel experiences",
    brandName: "ArtVenue"
  }
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + studies.length) % studies.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % studies.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = () => setIsSmall(mq.matches);
    handle();
    mq.addEventListener?.("change", handle);
    return () => mq.removeEventListener?.("change", handle);
  }, []);

  return (
    <section className="section-dark relative overflow-hidden py-24 md:py-32" id="case-studies">
      <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold text-[color:var(--section-ink)] md:text-5xl">
            Our Case Studies
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-[980px]" delay={0.1}>
          <div className="relative mx-auto h-auto overflow-visible md:h-[430px] md:overflow-hidden">
            <AnimatePresence initial={false}>
              {studies.map((study, index) => {
                const rawOffset = index - activeIndex;
                const offset =
                  rawOffset > 1 ? rawOffset - studies.length : rawOffset < -1 ? rawOffset + studies.length : rawOffset;
                const isActive = offset === 0;

                if (Math.abs(offset) > 1) {
                  return null;
                }

                return (
                  <motion.article
                    animate={{
                      x: isSmall ? 0 : `calc(-50% + ${offset * 78}%)`,
                      opacity: isActive ? 1 : 0.34,
                      scale: isActive ? 1 : 0.86,
                      zIndex: isActive ? 2 : 1
                    }}
                    className={`grid mx-auto w-[min(860px,100%)] overflow-hidden rounded-[8px] border border-[color:var(--line)] bg-[color:var(--surface-elevated)] text-left shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:absolute md:left-1/2 md:top-0 md:grid-cols-[0.48fr_0.52fr] ${
                      isActive ? "" : "max-md:hidden"
                    }`}
                    exit={{ opacity: 0, scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    key={study.id}
                    transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.8 }}
                  >
                    <div className="grid min-h-[240px] place-items-center bg-[color:var(--deep-card)] p-8 md:min-h-[310px]">
                      <Image
                        alt={`${study.brandName} case study abstract brand graphic`}
                        className="h-full max-h-[250px] w-full object-contain"
                        height={267}
                        src="/assets/insight-pattern.svg"
                        width={295}
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <p className="text-xs font-semibold text-accent">{study.category}</p>
                      <h3 className="mt-4 max-w-[370px] text-balance text-3xl font-semibold leading-tight text-[color:var(--section-ink)]">
                        {study.title}
                      </h3>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--muted)]">
                        <BrandLogo name={study.brandName} />
                        {study.brandName}
                      </div>
                      <p className="mt-5 text-sm leading-6 text-[color:var(--muted)]">
                        N7 and CB7 help financial institutions move from legacy operations to
                        connected, measurable, and customer-first banking channels.
                      </p>
                      <Button className="mt-8 w-full" href="#contact" variant="outline">
                        SEE MORE
                      </Button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8 text-accent md:mt-2">
            <button
              aria-label="Previous case study"
              className="grid size-10 place-items-center rounded-full border border-accent/40 transition hover:bg-white hover:text-[color:var(--button-hover-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={() => move(-1)}
              type="button"
            >
              <ArrowLeft aria-hidden size={18} />
            </button>
            <div className="flex items-center gap-2">
              {studies.map((study, index) => (
                <button
                  aria-label={`Go to case study ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-accent" : "w-2 bg-accent/35"
                  }`}
                  key={study.id}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <button
              aria-label="Next case study"
              className="grid size-10 place-items-center rounded-full border border-accent/40 transition hover:bg-white hover:text-[color:var(--button-hover-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={() => move(1)}
              type="button"
            >
              <ArrowRight aria-hidden size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export type CaseStudy = {
  id: number;
  category: string;
  title: string;
  brandName: string;
};
