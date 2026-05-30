"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  id?: string;
  as?: "div" | "section" | "article";
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  id,
  as = "div"
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const initial =
    reduceMotion || direction === "none"
      ? false
      : {
          opacity: 0.88,
          x: direction === "left" ? -34 : direction === "right" ? 34 : 0,
          y: direction === "up" ? 18 : 0
        };

  return (
    <Component
      className={cn(className)}
      id={id}
      initial={initial}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </Component>
  );
}
