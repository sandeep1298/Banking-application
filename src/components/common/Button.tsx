import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary:
    "border-accent bg-[linear-gradient(135deg,#00B4FD_0%,#003ACE_100%)] text-white shadow-[0_16px_44px_rgba(0,180,253,0.28)] hover:border-white hover:bg-none hover:bg-white hover:text-[color:var(--button-hover-ink)]",
  outline:
    "border-[color:var(--button-outline)] bg-transparent text-[color:var(--section-ink)] hover:border-white hover:bg-white hover:text-[color:var(--button-hover-ink)]",
  ghost:
    "border-transparent bg-transparent text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--button-hover-ink)]"
};

export function Button({ children, variant = "primary", className, href, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-10 min-w-28 items-center justify-center whitespace-nowrap rounded-[6px] border px-5 py-3 text-xs font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
