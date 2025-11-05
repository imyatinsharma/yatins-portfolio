import { Calendar } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      year: "2025 - Present",
      title: "Master of Computer Applications",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      description: "Pursuing advanced studies in computer applications with focus on cybersecurity, system design, and full-stack development.",
      type: "education",
    },
    {
      year: "2022 - 2025",
      title: "Bachelor of Computer Applications",
      institution: "Guru Nanak Dev Engineering College",
      location: "Punjab, India",
      description: "Graduated with CGPA 8.02, developed strong foundation in programming, web development, and software engineering principles.",
      type: "education",
    },
    {
      year: "2024",
      title: "Sport Complex Booking System",
      institution: "Personal Project",
      location: "Web Development",
      description: "Designed and developed a comprehensive web-based platform for sports facility booking with user management and scheduling features.",
      type: "project",
    },
    {
      year: "2023",
      title: "Python Programming Certification",
      institution: "Infosys",
      location: "Online",
      description: "Completed comprehensive Python programming course, demonstrating proficiency in core concepts and practical applications.",
      type: "achievement",
    },
    {
      year: "2022",
      title: "District Level Cricket",
      institution: "District Sports Authority",
      location: "Punjab, India",
      description: "Represented college at district level cricket competitions, showcasing teamwork and leadership skills.",
      type: "achievement",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500";
      case "project":
        return "bg-green-500";
      case "achievement":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my educational milestones, projects, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

            {/* Timeline events */}
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4 md:justify-center">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />
                  
                  {/* Year badge */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:order-2" : "md:ml-auto md:order-1"} md:w-5/12`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{event.year}</span>
                    </div>
                  </div>
                </div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} md:w-5/12`}>
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${getTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{event.institution}</p>
                    <p className="text-xs text-muted-foreground mb-3">{event.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
