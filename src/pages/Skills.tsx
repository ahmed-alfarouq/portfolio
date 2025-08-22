import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SkillsCategory from "@/features/SkillsCategory";
import ExpertiseCard from "@/components/ExpertiseCard";
import TechnicalCard from "@/components/TechnicalCard";

import {
  skills,
  expertise,
  categoryConfig,
  technicalHighlights,
} from "@/constants";

import type { GroupedSkills, SkillCategory } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const groupedSkills: GroupedSkills = skills.reduce(
    (acc: GroupedSkills, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as GroupedSkills
  );

  useGSAP(() => {
    gsap.fromTo(
      "#skills-title",
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

    gsap.fromTo(
      ".skills-category",
      {
        x: -100,
        opacity: 0,
        rotationY: -20,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-category",
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "#expertise-title",
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#expertise-title",
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".expertise-card",
      {
        y: 80,
        opacity: 0,
        rotationX: 30,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".expertise-card",
          start: "top 85%",
          end: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "#highlights-title",
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#highlights-title",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".technical-card",
      {
        y: 100,
        opacity: 0,
        rotationY: 45,
        scale: 0.7,
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".technical-card",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray(".hover-card").forEach((card) => {
      const target = card as HTMLElement;
      const handleMouseEnter = () => {
        gsap.to(target, {
          y: -8,
          scale: 1.03,
          rotationY: 5,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(target, {
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <main className="page-container">
      <section className="inner-container" aria-labelledby="skills-title">
        <h2 className="page-title" id="skills-title">
          Skills & Technologies
        </h2>

        <section className="space-y-12 mb-16">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const skillCategory = category as SkillCategory;
            const config = categoryConfig[skillCategory];
            return (
              <SkillsCategory
                key={category}
                className="skills-category"
                config={config}
                icon={config.icon}
                category={category}
                skills={categorySkills}
              />
            );
          })}
        </section>

        <section aria-labelledby="expertise-title">
          <h2
            className="text-3xl font-bold text-white mb-8 text-center"
            id="expertise-title"
          >
            Areas of Expertise
          </h2>

          <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((ex, i) => (
              <ExpertiseCard
                key={`${ex.title} ${i + 1}`}
                className="expertise-card hover-card"
                {...ex}
              />
            ))}
          </article>
        </section>

        <section className="mt-16" aria-labelledby="highlights-title">
          <h2
            className="text-3xl font-bold text-white mb-8 text-center"
            id="highlights-title"
          >
            Technical Highlights
          </h2>

          <article className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalHighlights.map((t, i) => (
              <TechnicalCard
                key={`${t.title} ${i + 1}`}
                className="technical-card"
                {...t}
              />
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Skills;
