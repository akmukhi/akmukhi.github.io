import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio";

const iconMap: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

const Contact = () => {
  const getIcon = (name: string) => {
    return iconMap[name] || Github;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-heading">Get In Touch</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's work together
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll do my best 
            to get back to you!
          </p>
          
          <Button variant="glow" size="lg" asChild>
            <a href={`mailto:${portfolioConfig.personal.email}`} className="gap-2">
              <Mail size={18} />
              Say Hello
            </a>
          </Button>
          
          <div className="flex justify-center gap-6 mt-12">
            {portfolioConfig.social.map((social) => {
              const Icon = getIcon(social.name);
              return (
              <a
                  key={social.name}
                  href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.name}
              >
                <Icon size={20} />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
