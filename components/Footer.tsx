import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-sm text-foreground/60">
              © {currentYear} {portfolioData.personal.name}
            </p>
            <p className="text-sm text-foreground/60 mt-1">
              {portfolioData.personal.location}
            </p>
          </div>

          <div className="flex gap-6">
            {contact.social.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
