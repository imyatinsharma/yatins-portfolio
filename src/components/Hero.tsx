import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import profileImage from "@/assets/yatan-profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg animate-fade-in">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Yatan{" "}
                <span className="gradient-text animate-gradient">
                  Kaushal
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Master of Computer Applications (MCA) student at Lovely Professional University with a deep interest in{" "}
                <span className="text-primary font-semibold">cybersecurity</span> and{" "}
                <span className="text-primary font-semibold">digital protection</span>
              </p>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
                Passionate about understanding how systems work, identifying vulnerabilities, and developing secure, efficient solutions to real-world challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                className="group shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group border-2 hover:border-primary/50 hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group border-2 hover:border-accent/50 hover:bg-accent/5"
                onClick={() => window.open('/YATINSHARMA_CV.pdf', '_blank')}
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Profile image */}
              <div className="relative z-10">
                <div className="rounded-full overflow-hidden border-8 border-background shadow-[var(--shadow-glow)] hover:scale-105 hover:rotate-3 transition-all duration-500 perspective-card">
                  <img
                    src={profileImage}
                    alt="Yatan Kaushal"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border-2 border-primary/20 px-6 py-3 rounded-full shadow-[var(--shadow-elegant)] backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-primary">Available</span> for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
