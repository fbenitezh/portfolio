interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  featured: boolean;
  link: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Component = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      {...linkProps}
      className={`block border border-foreground/10 p-6 rounded-lg ${
        project.link ? "hover:border-foreground/30 transition-colors" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <span className="text-sm text-foreground/60">{project.year}</span>
      </div>

      <p className="text-foreground/70 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-foreground/5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Component>
  );
}
