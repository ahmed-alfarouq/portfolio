import { ExternalLink, Eye, GitBranch, Github, Star } from "lucide-react";

import type { FeaturedProjectCardProps } from "@/types";

const FeaturedProjectCard = ({
  img,
  title,
  description,
  technologies,
  stats,
  liveUrl,
  githubUrl,
}: FeaturedProjectCardProps) => {
  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
      <figure className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
              Featured
            </span>
          </div>
        </div>
      </figure>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="tag">
              {tech}
            </span>
          ))}
        </div>
        {(stats.stars != 0 || stats.forks != 0 || stats.views != 0) && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                {stats.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitBranch className="w-4 h-4" />
                {stats.forks}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {stats.views}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            className="cta-btn min-w-32 px-4 py-2"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="cta-btn-outline min-w-32 px-4 py-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectCard;
