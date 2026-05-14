type SectionContainerProps = {
  children: React.ReactNode;
  dark?: boolean;
  white?: boolean;
  className?: string;
};

export default function SectionContainer({
  children,
  dark = false,
  white = false,
  className = "",
}: SectionContainerProps) {
  const bg = dark ? "bg-navy text-white" : white ? "bg-white" : "bg-offwhite";
  return (
    <section className={`w-full ${bg} ${className}`}>
      <div className="mx-auto max-w-content px-4 py-16 md:px-10 md:py-24">
        {children}
      </div>
    </section>
  );
}
