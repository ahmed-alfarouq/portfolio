import { type LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Language"
  | "Styling"
  | "Animation"
  | "Forms"
  | "Backend"
  | "Database"
  | "Tools"
  | "Design";

export type GroupedSkills = Record<SkillCategory, Skill[]>;

export interface CategoryConfig {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
}

export type CategoryConfigMap = Record<SkillCategory, CategoryConfig>;

// Components
export interface SkillsCategoryProps {
  config: CategoryConfig;
  icon: LucideIcon;
  category: string;
  skills: Skill[];
}

export interface SkillCardProps {
  name: string;
  bgColor: string;
}

export interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  skillsStyle: {
    color: string;
    bgColor: string;
  };
}

export interface TechnicalCardProps {
  icon: LucideIcon;
  iconStyles: {
    color: string;
    bgColor: string;
  };
  title: string;
  description: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  stats: { stars: number; forks: number; views: number };
  liveUrl: string;
  githubUrl?: string;
}

export interface FeaturedProjectCardProps extends ProjectCardProps {
  img: string;
}
