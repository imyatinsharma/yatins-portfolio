import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import profileImage from "@/assets/yatan-profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Yatan Kaushal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Master of Computer Applications (MCA) student at Lovely Professional University with a deep interest in{" "}
              <span className="text-primary font-semibold">cybersecurity</span> and{" "}
              <span className="text-accent font-semibold">digital protection</span>.
            </p>

            <p className="text-lg text-muted-foreground">
              Passionate about understanding how systems work, identifying vulnerabilities, and developing secure, efficient solutions to real-world challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-[hsl(250_75%_65%)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                asChild
              >
                <a href="#contact">
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative rounded-full overflow-hidden border-8 border-background shadow-[var(--shadow-glow)]">
                <img
                  src={profileImage}
                  alt="Yatan Kaushal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Shapes */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
