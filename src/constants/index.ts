import { Home, User, Code, Briefcase, Mail } from "lucide-react";

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
