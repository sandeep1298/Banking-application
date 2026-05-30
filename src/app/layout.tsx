import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { ScrollToTop } from "@/components/common/ScrollToTop";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Header } from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://n7-banking.example"),
  title: {
    default: "N7 Banking - Modern Digital Banking Foundation",
    template: "%s | N7 Banking"
  },
  description:
    "N7 and CB7 help financial institutions modernize core banking, digital banking, open banking, loan origination, and customer experiences.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "N7 Banking - Modern Digital Banking Foundation",
    description:
      "A modern banking platform for connected core, digital, open banking, and lending journeys.",
    url: "/",
    siteName: "N7 Banking",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 Banking - Modern Digital Banking Foundation",
    description:
      "A modern banking platform for connected core, digital, open banking, and lending journeys."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000d12" },
    { media: "(prefers-color-scheme: light)", color: "#eef9fd" }
  ]
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
