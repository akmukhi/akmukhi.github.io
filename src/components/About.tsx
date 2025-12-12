import { portfolioConfig } from "@/config/portfolio";

const About = () => {
  const { stats, about } = portfolioConfig;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="section-heading">About me</p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {about.heading}
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.yearsExperience && (
                <div>
                  <p className="text-3xl font-bold text-foreground">{stats.yearsExperience}+</p>
                  <p className="font-mono text-sm text-muted-foreground">Years Experience</p>
                </div>
              )}
              {stats.projectsCompleted && (
                <div>
                  <p className="text-3xl font-bold text-foreground">{stats.projectsCompleted}+</p>
                  <p className="font-mono text-sm text-muted-foreground">Projects Completed</p>
                </div>
              )}
              {stats.happyClients && (
                <div>
                  <p className="text-3xl font-bold text-foreground">{stats.happyClients}+</p>
                  <p className="font-mono text-sm text-muted-foreground">Happy Clients</p>
                </div>
              )}
              {stats.customStat && (
                <div>
                  <p className="text-3xl font-bold text-foreground">{stats.customStat.value}</p>
                  <p className="font-mono text-sm text-muted-foreground">{stats.customStat.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
