import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm mb-4 opacity-0 animate-fade-in">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in animate-delay-100">
            {portfolioConfig.personal.name.split(" ")[0]}<span className="text-primary">.</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-200">
            {portfolioConfig.personal.title}
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mb-12 leading-relaxed opacity-0 animate-fade-in animate-delay-300">
            {portfolioConfig.personal.bio[0]}
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">View my work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
