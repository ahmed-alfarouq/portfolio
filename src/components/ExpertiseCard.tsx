import type { ExpertiseCardProps } from "@/types";

const ExpertiseCard = ({
  icon,
  title,
  description,
  skills,
  skillsStyle,
}: ExpertiseCardProps) => {
  const IconComponent = icon;
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center group hover:border-purple-400/50 transition-all duration-300">
      <IconComponent
        className={`w-16 h-16 ${skillsStyle.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
      />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {skills.map((skill, i) => (
          <span
            key={`${skill} ${i + 1}`}
            className={`text-xs ${skillsStyle.color} ${skillsStyle.bgColor} px-2 py-1 rounded`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;
