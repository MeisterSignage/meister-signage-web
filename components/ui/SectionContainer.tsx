type SectionContainerProps = {
  children: React.ReactNode;
  bg?: "white" | "offwhite" | "navy";
  dark?: boolean;
  white?: boolean;
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
  className = "",
}: SectionContainerProps) {
  const bgClass = bg
    ? bgMap[bg]
    : dark
    ? "bg-navy text-white"
    : white
    ? "bg-white"
    : "bg-offwhite";

  return (
    <section className={`w-full ${bgClass} ${className}`}>
      <div className="mx-auto max-w-content px-4 py-20 md:px-10 md:py-28">
        {children}
      </div>
    </section>
  );
}
