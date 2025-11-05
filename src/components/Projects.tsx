import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Calendar, Users } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Sport Complex Booking System",
    description:
      "Developed a comprehensive web-based platform that allows users to book sports facilities online efficiently. The system simplifies the process of reserving courts, fields, and equipment at sports complexes through a user-friendly interface. Features include real-time availability checking, secure payment processing, and automated booking confirmations.",
    features: [
      "Real-time facility availability",
      "Secure payment integration",
      "User authentication & profiles",
      "Automated booking confirmations",
      "Admin dashboard for management",
      "Responsive design for all devices",
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "Node.js"],
    stats: [
      { icon: Calendar, label: "Duration", value: "3 Months" },
      { icon: Users, label: "Team Size", value: "Individual" },
      { icon: Code2, label: "Lines of Code", value: "5000+" },
    ],
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing practical application of technical skills in real-world solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in">
            {/* Project Image Placeholder */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-primary via-[hsl(250_75%_65%)] to-accent flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              <div className="relative text-center space-y-4 z-10">
                <div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-sm">
                  <Calendar size={48} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Sport Complex Booking System</h3>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/30 rounded-full" />
            </div>

            <div className="p-8 space-y-6">
              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y">
                {project.stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center">
                      <stat.icon size={24} className="text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
                >
                  View Project Details
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
