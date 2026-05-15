import SectionContainer from "@/components/ui/SectionContainer";

type Service = {
  title: string;
  description: string;
};

type ServicesSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  services: Service[];
};

export default function ServicesSection({
  eyebrow,
  title,
  subtitle,
  services,
}: ServicesSectionProps) {
  return (
    <SectionContainer>
      <div className="section-header">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="heading-max-2 mb-3 text-navy">{title}</h2>
        {subtitle && <p className="text-cgray">{subtitle}</p>}
      </div>

      <div className="card-grid card-grid-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="card relative flex flex-col gap-3 overflow-hidden pt-7"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-magenta" />
            <p className="card-title">{service.title}</p>
            <p className="card-body">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
