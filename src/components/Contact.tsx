import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6239204632",
      href: "tel:+916239204632",
      color: "from-primary to-[hsl(250_75%_65%)]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/yatin-sharma-87ab17212/",
      color: "from-accent to-[hsl(45_95%_60%)]",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Send an Email",
      href: "mailto:yatan.kaushal@example.com",
      color: "from-[hsl(280_75%_60%)] to-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: "#",
      color: "from-[hsl(160_75%_50%)] to-[hsl(180_70%_55%)]",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-lift group cursor-pointer animate-fade-in border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 animate-fade-in-slow">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Start a Project?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm currently available for freelance work and open to discussing new opportunities.
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/yatin-sharma-87ab17212/" target="_blank" rel="noopener noreferrer">
                  Let's Talk
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
