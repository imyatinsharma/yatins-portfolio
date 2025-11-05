import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, skills, and achievements
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 animate-scale-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Yatan Kaushal - Resume</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete professional profile including education, projects, skills, and certifications
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Master's in Computer Applications (MCA)</li>
                    <li>• Bachelor's in Computer Applications (BCA)</li>
                    <li>• Full-stack development experience</li>
                    <li>• Python certification from Infosys</li>
                  </ul>
                </div>
              </div>
              
              <a href="/YATINSHARMA_CV.pdf" download="Yatan_Kaushal_CV.pdf">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
