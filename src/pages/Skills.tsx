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
              <ExpertiseCard key={`${ex.title} ${i + 1}`} {...ex} />
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
              <TechnicalCard key={`${t.title} ${i + 1}`} {...t} />
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default Skills;
