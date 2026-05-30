import Image from "next/image";

type DashboardMockupProps = {
  variant?: "wide" | "compact" | "efficient";
};

export function DashboardMockup({ variant = "wide" }: DashboardMockupProps) {
  const isCompactFrame = variant === "compact" || variant === "efficient";
  const screenSrc = variant === "efficient" ? "/assets/efficient-dashboard.png" : "/assets/core-dashboard.png";

  return (
    <div
      aria-label="Core banking dashboard laptop preview"
      className={`relative ${
        isCompactFrame
          ? "w-full max-w-[620px]"
          : "w-[min(860px,calc(100vw-40px))] md:w-[860px]"
      }`}
      role="img"
    >
      <div className="relative mx-auto aspect-[632/409] w-[79.8%] overflow-hidden rounded-t-[12px] border border-accent/55 bg-[#060913] p-[10px] shadow-[0_34px_90px_rgba(0,154,255,0.18)]">
        <div className="relative h-full w-full overflow-hidden rounded-[4px]">
          <Image
            alt="CB7 core banking dashboard displayed on a laptop"
            className="object-cover"
            fill
            sizes={isCompactFrame ? "(max-width: 768px) 100vw, 620px" : "(max-width: 768px) 100vw, 860px"}
            src={screenSrc}
          />
        </div>
      </div>
      <div className="relative -mt-[1px] aspect-[792/55] w-full">
        <Image
          alt=""
          aria-hidden
          className="object-contain"
          fill
          sizes={isCompactFrame ? "(max-width: 768px) 100vw, 620px" : "(max-width: 768px) 100vw, 860px"}
          src="/assets/laptop-stand.png"
        />
      </div>
    </div>
  );
}
