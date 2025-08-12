import type { ProjectCardProps } from "@/types";
import { ExternalLink, GitBranch, Github, Star } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  technologies,
  stats,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <section className="card">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <div className="flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          <a
            href={liveUrl}
            target="_blank"
            className="text-gray-400 hover:text-purple-400"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="tag">
            {tech}
          </span>
        ))}
        {technologies.length > 3 && (
          <span className="text-gray-400 text-xs">
            +{technologies.length - 3} more
          </span>
        )}
      </div>

      {(stats.stars != 0 || stats.forks != 0 || stats.views != 0) && (
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {stats.stars}
          </div>
          <div className="flex items-center gap-1">
            <GitBranch className="w-3 h-3" />
            {stats.forks}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
