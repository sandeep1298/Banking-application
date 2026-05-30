"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/common/ThemeToggle";
import { navItems } from "@/constants/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex min-h-[47px] w-full max-w-[760px] items-center justify-between rounded border border-[color:var(--nav-border)] bg-[color:var(--nav-bg)] px-3 text-[color:var(--section-ink)] shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
      >
        <a
          className="flex min-h-9 min-w-12 items-center rounded px-2 text-xl font-semibold text-[color:var(--brand-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#top"
        >
          N7
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              className="inline-flex min-h-9 items-center gap-1 text-xs transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={item.href}
              key={item.label}
            >
              <span>{item.label}</span>
              {item.hasMenu ? <ChevronDown aria-hidden size={13} /> : null}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="hidden min-h-8 items-center whitespace-nowrap rounded-[6px] border border-[color:var(--nav-cta-border)] bg-[color:var(--nav-cta-bg)] px-6 text-xs font-semibold text-[color:var(--nav-cta-fg)] transition hover:bg-[color:var(--nav-cta-hover-bg)] hover:text-[color:var(--nav-cta-hover-fg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:inline-flex"
            href="#contact"
          >
            REQUEST DEMO
          </a>
          <ThemeToggle />
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-[color:var(--nav-border)] bg-[color:var(--nav-button)] text-[color:var(--section-ink)] transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden size={17} /> : <Menu aria-hidden size={17} />}
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-0 top-full mt-2 mx-auto w-full max-w-[760px] overflow-hidden rounded border border-[color:var(--nav-border)] bg-[color:var(--surface-elevated)] text-[color:var(--section-ink)] shadow-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-[calc(100vh-7rem)] opacity-100 pointer-events-auto overflow-y-auto"
            : "max-h-0 border-transparent opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <a
              className="flex min-h-11 items-center justify-between rounded px-3 text-sm hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={item.href}
              key={item.label}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              {item.hasMenu ? <ChevronDown aria-hidden size={15} /> : null}
            </a>
          ))}
          <a
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-[6px] border border-[color:var(--nav-cta-border)] bg-[color:var(--nav-cta-bg)] px-4 text-sm font-semibold text-[color:var(--nav-cta-fg)]"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            REQUEST DEMO
          </a>
        </div>
      </div>
    </header>
  );
}
