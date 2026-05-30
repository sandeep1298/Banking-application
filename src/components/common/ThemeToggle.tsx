"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid cursor-pointer group size-9 place-items-center rounded-full border border-[color:var(--nav-border)] bg-[color:var(--nav-button)] text-[color:var(--section-ink)] transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
      type="button"
    >
      <span className="absolute left-1/2 top-full mb-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-2.5 py-1 text-xs text-[color:var(--section-ink)] shadow-xl opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {isDark ? <Sun aria-hidden size={16} /> : <Moon aria-hidden size={16} />}
    </button>
  );
}
