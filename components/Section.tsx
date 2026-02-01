interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-medium mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
