type SectionContainerProps = {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function SectionContainer({
  children,
  dark = false,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      className={`w-full ${dark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        {children}
      </div>
    </section>
  );
}
