import type { CategoryConfigMap, Skill } from "@/types";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Database,
  Layers,
  Settings,
  Monitor,
  Zap,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
} from "lucide-react";

export const navItems = [
  { id: "home", to: "/", label: "Home", icon: Home },
  { id: "about", to: "/about", label: "About", icon: User },
  { id: "skills", to: "/skills", label: "Skills", icon: Code },
  { id: "projects", to: "/projects", label: "Projects", icon: Briefcase },
  { id: "contact", to: "/contact", label: "Contact", icon: Mail },
];

export const experiences = [
  {
    id: 0,
    company: "Mirage",
    position: "Front-End Developer",
    duration: "Aug 2021 - Nov 2023",
    description:
      "I help businesses build better digital experiences - from optimizing e-commerce platforms like a spice marketplace to enhancing informational sites about Egyptian culture. My work focuses on improving existing templates and flows to boost both functionality and user satisfaction.",
    technologies: ["JQuery", "CSS", "Bootstrap 4"],
  },
  {
    id: 1232141,
    company: "Freelancer",
    position: "Front-End Developer",
    duration: "Nov 2022 - Jul 2023",
    description:
      "I build responsive web apps with React, TypeScript, and Tailwind CSS—focusing on performance, clean code, and intuitive UX. By transforming client needs into functional solutions, I create maintainable systems that scale. Every component I design follows modern best practices to deliver fast, future-proof experiences.",
    technologies: ["React", "TS", "Tailwind CSS", "Redux"],
  },
  {
    id: 1,
    company: "Self-Taught Experience",
    position: "Full Stack Web Developer",
    duration: "Jan 2025 - present",
    description:
      "Focusing on React, Next.js and TypeScript to build modern web applications. Strengthened by hands-on full-stack experience (Node.js/Express, MongoDB) that informs my architecture decisions and API integrations. My sweet spot: crafting pixel-perfect UIs with robust backend awareness.",
    technologies: [
      "React",
      "Next.js",
      "TS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },

  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML5", category: "Language" },
  { name: "CSS3", category: "Language" },

  { name: "Tailwind CSS", category: "Styling" },
  { name: "Sass/SCSS", category: "Styling" },
  { name: "Styled Components", category: "Styling" },
  { name: "CSS Modules", category: "Styling" },

  { name: "GSAP", category: "Animation" },
  // { name: "Framer Motion", category: "Animation" },
  // { name: "Lottie", category: "Animation" },

  { name: "React Hook Form", category: "Forms" },
  { name: "Formik", category: "Forms" },
  { name: "Yup", category: "Forms" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },

  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "Database" },

  { name: "Git", category: "Tools" },
  { name: "Webpack", category: "Tools" },
  { name: "Vite", category: "Tools" },
  { name: "ESLint", category: "Tools" },
  { name: "Prettier", category: "Tools" },
  { name: "Jest", category: "Tools" },

  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
];

export const categoryConfig: CategoryConfigMap = {
  Frontend: {
    icon: Code,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  Language: {
    icon: Globe,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  Styling: {
    icon: Palette,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  Animation: {
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  Forms: {
    icon: Monitor,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  Backend: {
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  Database: {
    icon: Database,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  Tools: {
    icon: Settings,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  Design: {
    icon: Layers,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
};

export const expertise = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications with modern JavaScript frameworks. Focus on user experience, accessibility, and clean code architecture.",
    skills: ["React", "Next.js", "TypeScript"],
    skillsStyle: {
      color: "text-purple-300",
      bgColor: "bg-purple-500/20",
    },
  },
  {
    icon: Briefcase,
    title: "     Development Tools",
    description:
      "Proficient with modern development workflows, version control, and collaboration tools. Experienced in CI/CD, testing, and project management.",
    skills: ["Git", "Webpack", "Jest"],
    skillsStyle: {
      color: "text-blue-300",
      bgColor: "bg-blue-500/20",
    },
  },
  {
    icon: User,
    title: "UI/UX Design",
    description:
      "Creating intuitive user interfaces with attention to design principles, usability, and visual hierarchy. Skilled in design tools and prototyping.",
    skills: ["Figma", "Tailwind", "Gsap"],
    skillsStyle: {
      color: "text-green-300",
      bgColor: "bg-green-500/20",
    },
  },
];

export const technicalHighlights = [
  {
    icon: Smartphone,
    iconStyles: {
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
    title: "Responsive Design",
    description: "Mobile-first approach",
  },
  {
    icon: Zap,
    iconStyles: {
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    title: "Performance",
    description: "Optimized & fast loading",
  },
  {
    icon: GitBranch,
    iconStyles: {
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
    },
    title: "Version Control",
    description: "Git workflows & collaboration",
  },
  {
    icon: Globe,
    iconStyles: {
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
    title: "Web Standards",
    description: "Semantic HTML & accessibility",
  },
];
