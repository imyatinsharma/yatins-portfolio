import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Target } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C++", "JavaScript", "C", "PHP", "Python", "Java"],
      color: "from-primary to-[hsl(250_75%_65%)]",
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Linux"],
      color: "from-accent to-[hsl(45_95%_60%)]",
    },
    {
      title: "Frameworks & Web",
      icon: Layout,
      skills: ["HTML", "CSS", "NodeCSS"],
      color: "from-[hsl(280_75%_60%)] to-primary",
    },
    {
      title: "Soft Skills",
      icon: Target,
      skills: ["Problem-solving", "Adaptability", "Communication", "Team Collaboration"],
      color: "from-[hsl(160_75%_50%)] to-[hsl(180_70%_55%)]",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building secure and efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift group animate-fade-in border-2 hover:border-primary/30 perspective-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in-slow">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly expanding my skillset to stay at the forefront of technology and cybersecurity practices.
            Always eager to learn new tools and methodologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
