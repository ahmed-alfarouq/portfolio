import type { SkillsCategoryProps } from "@/types";

const SkillsCategory = ({
  config,
  icon,
  category,
  skills,
}: SkillsCategoryProps) => {
  const IconComponent = icon;
  return (
    <section key={category} className="space-y-6">
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg ${config.bgColor} ${config.borderColor} border`}
        >
          <IconComponent className={`w-6 h-6 ${config.color}`} />
        </div>
        <h3 className="text-2xl font-semibold text-white">{category}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
      </div>

      <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            group relative overflow-hidden rounded-xl p-4 
            bg-white/5 backdrop-blur-sm border border-white/10
            hover:border-white/20 hover:bg-white/10
            transition-all duration-300 cursor-pointer
          "
          >
            <div className="text-center">
              <h4 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h4>
            </div>

            <div
              className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            bg-gradient-to-br ${config.bgColor} rounded-xl
          `}
            ></div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default SkillsCategory;
