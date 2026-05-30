import Image from "next/image";

import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  variant: "home" | "chart" | "menu";
  hoverEffect?: "lift" | "tiltLeft" | "tiltRight";
};

const phoneScreens = {
  home: {
    alt: "N7 digital banking dashboard mobile screen",
    src: "/assets/digital-banking-home-phone.svg"
  },
  chart: {
    alt: "N7 transactions chart mobile screen",
    src: "/assets/digital-banking-chart-phone.svg"
  },
  menu: {
    alt: "N7 profile mobile screen",
    src: "/assets/digital-banking-menu-phone.svg"
  }
} satisfies Record<PhoneMockupProps["variant"], { alt: string; src: string }>;

const hoverEffects = {
  lift: "hover:-translate-y-3 hover:scale-[1.03]",
  tiltLeft: "hover:-translate-y-2 hover:-rotate-2 hover:scale-[1.02]",
  tiltRight: "hover:-translate-y-2 hover:rotate-2 hover:scale-[1.02]"
};

export function PhoneMockup({ variant, hoverEffect }: PhoneMockupProps) {
  const screen = phoneScreens[variant];

  return (
    <div
      aria-label={screen.alt}
      className={cn(
        "relative z-10 mx-auto h-[360px] w-[178px] transition-transform duration-500 ease-out md:h-[405px] md:w-[201px]",
        hoverEffect ? hoverEffects[hoverEffect] : undefined
      )}
      role="img"
    >
      <Image
        alt={screen.alt}
        className="object-contain drop-shadow-[0_28px_70px_rgba(0,82,130,0.22)]"
        fill
        sizes="(max-width: 768px) 178px, 201px"
        src={screen.src}
      />
    </div>
  );
}
