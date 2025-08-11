import { Home, User, Code, Briefcase, Mail } from "lucide-react";

export const navItems = [
  { id: "home", to: "/", label: "Home", icon: Home },
  { id: "about", to: "/about", label: "About", icon: User },
  { id: "skills", to: "/skills", label: "Skills", icon: Code },
  { id: "projects", to: "/projects", label: "Projects", icon: Briefcase },
  { id: "contact", to: "/contact", label: "Contact", icon: Mail },
];
