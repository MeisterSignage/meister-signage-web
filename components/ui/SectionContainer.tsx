type SectionContainerProps = {
  children: React.ReactNode;
  bg?: "white" | "offwhite" | "navy";
  dark?: boolean;
  white?: boolean;
  compact?: boolean;
  className?: string;
};

const bgMap: Record<string, string> = {
  white:    "bg-white",
  offwhite: "bg-offwhite",
  navy:     "bg-navy text-white",
};

export default function SectionContainer({
  children,
  bg,
  dark = false,
  white = false,
  compact = false,
  className = "",
}: SectionContainerProps) {
  const bgClass = bg
    ? bgMap[bg]
    : dark
    ? "bg-navy text-white"
    : white
    ? "bg-white"
    : "bg-offwhite";

  const innerClass = compact ? "section-inner-compact" : "section-inner";

  return (
    <section className={`w-full ${bgClass} ${className}`}>
      <div className={innerClass}>
        {children}
      </div>
    </section>
  );
}
