import { patternIcons } from "@/constants/content";

type PatternMarkProps = {
  compact?: boolean;
};

export function PatternMark({ compact = false }: PatternMarkProps) {
  return (
    <div
      aria-hidden
      className={`grid ${compact ? "grid-cols-2 gap-2" : "grid-cols-2 gap-4"} text-accent`}
    >
      {patternIcons.map((Icon, index) => (
        <div
          className={`grid place-items-center rounded-sm bg-accent/10 ${
            compact ? "size-14" : "size-28"
          }`}
          key={`${Icon.displayName ?? Icon.name}-${index}`}
        >
          <Icon size={compact ? 34 : 70} strokeWidth={2.4} />
        </div>
      ))}
    </div>
  );
}
