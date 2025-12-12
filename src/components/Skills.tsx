import { portfolioConfig } from "@/config/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="section-heading">Expertise</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Technologies I work with
          </h2>
          
          <div className="space-y-12">
            {portfolioConfig.skills.map((category) => (
              <div key={category.title}>
                <h3 className="font-mono text-sm text-muted-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
