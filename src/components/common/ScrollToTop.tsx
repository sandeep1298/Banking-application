"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-6 z-50 grid size-11 cursor-pointer place-items-center rounded-full border border-[color:var(--nav-border)] bg-[color:var(--surface-elevated)] text-[color:var(--section-ink)] shadow-xl transition duration-200 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-2.5 py-1 text-xs text-[color:var(--section-ink)] shadow-xl opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        Scroll to top
      </span>

      <ArrowUp aria-hidden size={18} />
    </button>
  );
}