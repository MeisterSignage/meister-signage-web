import SectionContainer from "@/components/ui/SectionContainer";

type IntroSectionProps = {
  title: string;
  text: string;
  definition?: string;
};

export default function IntroSection({ title, text, definition }: IntroSectionProps) {
  return (
    <SectionContainer white>
      <div className="mx-auto max-w-3xl">
        <h2 className="heading-max-2 mb-5 text-navy">{title}</h2>
        <p className="text-cgray leading-relaxed">{text}</p>

        {definition && (
          <div className="relative mt-8 overflow-hidden rounded-[7px] border border-navy/10 bg-offwhite px-6 py-5">
            <div className="absolute inset-y-0 left-0 w-[3px] bg-magenta" />
            <p className="text-sm font-semibold text-navy">{definition}</p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
