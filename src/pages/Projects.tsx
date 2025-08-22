import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "@/components/ProjectCard";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

import { projects } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#projects-title",
      {
        y: 60,
        opacity: 0,
        scale: 0.8,
        rotationX: -30,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      }
    );

    gsap.utils.toArray(".featured-project").forEach((project) => {
      const target = project as HTMLElement;
      gsap.fromTo(
        target,
        {
          y: 100,
          opacity: 0,
          rotationY: 30,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          stagger: 0.05,
          ease: "bounce",
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      "#other-projects",
      {
        x: -60,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#other-projects",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".other-project",
      {
        y: 100,
        opacity: 0,
        rotationX: 45,
        scale: 0.85,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#other-projects-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <main className="page-container">
      <section className="inner-container">
        <h1 className="page-title" id="projects-title">
          Featured Projects
        </h1>

        <article
          className="grid lg:grid-cols-2 gap-8 mb-16"
          id="featured-section"
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <FeaturedProjectCard
                key={project.id}
                className="featured-project opacity-0"
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

          <article
            className="grid md:grid-cols-2 gap-6"
            id="other-projects-grid"
          >
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  className="other-project"
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
