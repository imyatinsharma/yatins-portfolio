import { Award, Trophy, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Python Programming Certification",
      organization: "Infosys",
      description: "Successfully completed comprehensive Python programming course by Infosys, demonstrating proficiency in Python fundamentals and advanced concepts.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Trophy,
      title: "District Level Cricket Champion",
      organization: "District Sports Authority",
      description: "Represented college at district level cricket competitions, showcasing leadership, teamwork, and dedication to sports excellence.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      organization: "Guru Nanak Dev Engineering College",
      description: "Graduated with CGPA of 8.02 in Bachelor of Computer Applications, demonstrating strong academic performance and dedication.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and milestones achieved through dedication and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${achievement.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${achievement.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
