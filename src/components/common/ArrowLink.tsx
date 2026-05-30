import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  arrowHover?: "right" | "up";
  showDivider?: boolean;
  variant?: "accent" | "muted";
};

const variants = {
  accent: "text-accent transition-colors hover:text-accent-strong font-semibold",
  muted: "text-[color:var(--muted)] text-sm",
};

export function ArrowLink({
  children,
  className,
  arrowHover = "right",
  showDivider = true,
  variant = "accent",
  ...props
}: ArrowLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-8 flex-col items-start gap-1 text-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
        <span>{children}</span>
        <ArrowMark hover={arrowHover} />
      </span>
      {showDivider ? (
        <span className="h-px w-[20%] min-w-5 bg-current transition-all duration-300 ease-out group-hover:w-1/2" />
      ) : null}
    </a>
  );
}

function ArrowMark({ hover }: { hover: "right" | "up" }) {
  return (
    <svg
      aria-hidden
      className={cn(
        "h-[15px] w-[14px] shrink-0 transition-transform duration-300 ease-out text-accent",
        hover === "up" ? "group-hover:-rotate-45" : "group-hover:translate-x-1"
      )}
      fill="none"
      viewBox="0 0 14 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.46267 7.48608H12.3801"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.935782"
      />
      <path
        d="M6.9214 2.02761L12.3801 7.48634L6.9214 12.9451"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.935782"
      />
    </svg>
  );
}
