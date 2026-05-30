import {
  BadgeDollarSign,
  Blocks,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Component,
  CreditCard,
  DatabaseZap,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";

import type { Insight, NavItem, Solution } from "@/types/content";

export const navItems: NavItem[] = [
  { label: "SOLUTIONS", href: "#solutions", hasMenu: true },
  { label: "RESOURCES", href: "#resources", hasMenu: true },
  { label: "ABOUT US", href: "#footer" }
];

export const trustedLogos = ["SENTRA", "Tandem", "Finora", "Zentra", "Northstar", "Mavix"];

export const solutions: Solution[] = [
  {
    title: "Core Banking CB7",
    body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, lower expenses, and improve business sustainability.",
    icon: Landmark
  },
  {
    title: "Digital Banking N7",
    body: "N7 brings the banking experience to mobile, internet, and agency channels with configurable journeys, service requests, and real-time product access.",
    icon: Smartphone
  },
  {
    title: "Open Banking",
    body: "Our API banking helps you gain actionable insights, enable account aggregation, streamline onboarding, KYC, payment initiation, budgeting, and credit scoring.",
    icon: Network
  },
  {
    title: "Loan Origination System",
    body: "N7 helps to digitize the complete lending lifecycle, connect risk engines, capture documents, and move customers from application to decision with less friction.",
    icon: ScanLine
  },
  {
    title: "Loan Management System",
    body: "N7 brings a full loan servicing stack for repayments, schedules, collections, statements, restructuring, and reporting across retail and SME portfolios.",
    icon: BriefcaseBusiness
  }
];

export const coreCapabilities = [
  { label: "Customer On-Boarding", icon: ShieldCheck },
  { label: "Corporate Internet Banking", icon: Building2 },
  { label: "Transaction management", icon: DatabaseZap },
  { label: "Offline Activities", icon: Workflow },
  { label: "Market Consolidation", icon: ChartNoAxesCombined },
  { label: "Card Management", icon: CreditCard },
  { label: "Payments processing", icon: CircleDollarSign },
  { label: "Prepaid Gift Card Services", icon: BadgeDollarSign },
  { label: "ATM/POS, branches, NST", icon: Layers3 },
  { label: "Online financial services", icon: LockKeyhole }
];

export const digitalBullets = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
  "Digital Contract",
  "Connection Capabilities",
  "Customer, Applicants and Escrowers",
  "Office Management",
  "Document Flow"
];

export const insights: Insight[] = [
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 2024",
    category: "Strategy"
  },
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 2024",
    category: "Execution"
  },
  {
    title: "How to transition from a traditional to a digital bank",
    date: "October 2024",
    category: "Growth"
  }
];

export const footerSolutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation"
];

export const footerCompany = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center"
];

export const footerSocials = ["LinkedIn", "X"];

export const patternIcons = [Blocks, Component, Blocks, Component];
