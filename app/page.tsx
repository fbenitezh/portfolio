import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { personal, skills, projects, experience, contact } = portfolioData;

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <Section className="min-h-[80vh] flex items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
              {personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-4">
              {personal.role}
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#proyectos"
                className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 border border-foreground/20 rounded-lg hover:border-foreground/40 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section title="Sobre mí">
          <div className="max-w-3xl">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {personal.bio}
            </p>
            <p className="text-sm text-foreground/60">
              {personal.availability}
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Stack & Herramientas">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-lg font-medium mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-foreground/5 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="proyectos" title="Proyectos">
          <div className="space-y-6">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {projects.filter((project) => !project.featured).length > 0 && (
            <>
              <h3 className="text-lg font-medium mt-12 mb-6">Otros proyectos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects
                  .filter((project) => !project.featured)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </>
          )}
        </Section>

        {/* Experience Section */}
        <Section id="experiencia" title="Experiencia">
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-foreground/20 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <span className="text-sm text-foreground/60">{exp.period}</span>
                </div>
                <p className="text-foreground/70 mb-3">{exp.company}</p>
                <p className="text-foreground/60 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contacto" title="Contacto">
          <div className="max-w-2xl">
            <p className="text-lg text-foreground/70 mb-8">
              ¿Trabajamos juntos? Escribime o conectemos en redes.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="block text-xl hover:opacity-70 transition-opacity"
              >
                {contact.email}
              </a>

              <div className="flex gap-6 pt-4">
                {contact.social.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {social.platform} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
