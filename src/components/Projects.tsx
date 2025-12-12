import ProjectCard from "./ProjectCard";
import { portfolioConfig } from "@/config/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="section-heading">Featured Work</p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Things I've built
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioConfig.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
