import { ArrowUpRight, Bell, LayoutGrid, RefreshCw, Wallet2 } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] h-auto sm:h-[390px] md:h-[330px] md:w-[562px] md:max-w-none">
      <div className="absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#00B4FD_0%,#003ACE_58%,transparent_70%)] opacity-35 blur-[52px] md:left-[287px] md:top-[150px] md:size-[399px]" />

      <div className="relative mx-auto h-[300px] w-full max-w-[363px] sm:absolute sm:left-1/2 sm:top-5 sm:-translate-x-1/2 md:left-[87px] md:top-0 md:h-[301px] md:translate-x-0">
        <Image
          alt="Banking client using the N7 digital banking solution"
          className="object-contain drop-shadow-[0_38px_90px_rgba(0,128,255,0.24)]"
          fill
          priority
          sizes="(max-width: 768px) 330px, 363px"
          src="/assets/hero-banking-client.svg"
        />
      </div>

      <div className="animate-float-soft glass-card relative mx-auto mt-4 z-20 w-full max-w-[208px] rounded-xl p-1 text-slate-950 md:absolute md:right-1 md:top-[23px] md:left-[353px] md:right-auto">
        <div className="rounded-[11px] bg-white/75 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-700">
                T
              </span>
              <div>
                <p className="text-xs font-bold text-[#081E69]">Toni Kross</p>
                <p className="text-[9px] font-semibold text-[#586E84]">Good Morning</p>
              </div>
            </div>
            <Bell className="text-[#586E84]" size={15} />
          </div>

          <div className="mt-4 border-b border-slate-200 pb-4">
            <p className="text-[9px] font-semibold text-[#586E84]">Total balance</p>
            <p className="mt-1 text-xl font-extrabold leading-none text-[#081E69]">$42,295.00 USD</p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[8px] font-semibold text-[#586E84]">
            <HeroAction icon={<Wallet2 size={15} />} label="Fund Transfer" />
            <HeroAction icon={<RefreshCw size={15} />} label="Add Money" />
            <HeroAction icon={<LayoutGrid size={15} />} label="More" />
          </div>
        </div>
      </div>

      <div className="animate-float-soft-reverse glass-card relative mx-auto mt-4 z-20 w-full max-w-[254px] rounded-xl p-1 text-slate-950 md:absolute md:left-0 md:top-[150px] md:bottom-auto">
        <div className="rounded-[11px] bg-white/75 p-3">
          <h3 className="text-xs font-bold text-[#081E69]">Recent activity</h3>
          <div className="mt-3 flex items-center justify-between gap-1 text-[8px] font-bold text-[#586E84]">
            <span className="rounded bg-slate-50 px-2 py-1">This Day</span>
            <span className="rounded bg-[#081E69] px-2 py-1 text-white">This Week</span>
            <span className="rounded bg-slate-50 px-2 py-1">This Month</span>
            <span className="rounded bg-slate-50 px-2 py-1">6 Month</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#9280FD] text-white">
              <ArrowUpRight size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold text-[#081E69]">To Jin - Work</p>
              <p className="text-[9px] font-semibold text-[#586E84]">12 jun 2022</p>
            </div>
            <span className="text-xs font-bold text-[#081E69]">-$59</span>
          </div>
        </div>
      </div>
    </div>
  );
}

type HeroActionProps = {
  icon: ReactNode;
  label: string;
};

function HeroAction({ icon, label }: HeroActionProps) {
  return (
    <div className="grid justify-items-center gap-1">
      <span className="grid size-8 place-items-center rounded-lg bg-slate-950/5 text-[#081E69]">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}
