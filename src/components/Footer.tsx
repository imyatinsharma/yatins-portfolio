import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yatin-sharma-87ab17212/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:yatan.kaushal@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 px-4 border-t bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Yatan Kaushal
            </h3>
            <p className="text-muted-foreground mt-2">
              Building secure & efficient digital solutions
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 border-border hover:border-primary hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© {currentYear} Yatan Kaushal. All rights reserved.</p>
          <p className="mt-2">Designed & Developed with passion for excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
