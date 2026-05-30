import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  hasMenu?: boolean;
};

export type Solution = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type Insight = {
  title: string;
  date: string;
  category: string;
};
