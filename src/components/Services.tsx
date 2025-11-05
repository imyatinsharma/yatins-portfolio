import { Card } from "@/components/ui/card";
import { Globe, Shield, Code2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building efficient, user-friendly web platforms with modern technologies. Specializing in full-stack development with a focus on clean code and optimal performance.",
      color: "from-primary to-[hsl(250_75%_65%)]",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description:
        "Implementing robust security measures to protect applications and data. Expertise in identifying vulnerabilities and developing secure coding practices.",
      color: "from-accent to-[hsl(45_95%_60%)]",
    },
    {
      icon: Code2,
      title: "System Optimization",
      description:
        "Creating optimized solutions for real-world problems through efficient algorithms and system design. Focus on performance and scalability.",
      color: "from-[hsl(280_75%_60%)] to-primary",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What I{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering secure, efficient, and user-friendly solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-lift group border-2 hover:border-primary/50 cursor-pointer animate-fade-in perspective-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
