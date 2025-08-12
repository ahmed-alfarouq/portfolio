import ProjectCard from "@/components/ProjectCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

import { projects } from "@/constants";

const Projects = () => {
  return (
    <main className="page-container">
      <section className="inner-container">
        <h1 className="page-title">Featured Projects</h1>

        <article className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <FeaturedProjectCard
                key={project.id}
                img={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                stats={project.stats}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
        </article>

        <section className="mb-8" aria-labelledby="other-projects">
          <h2
            className="text-2xl font-semibold text-white mb-6"
            id="other-projects"
          >
            Other Projects
          </h2>
          <article className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  stats={project.stats}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Projects;
