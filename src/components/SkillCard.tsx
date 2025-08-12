import type { SkillCardProps } from "@/types";

const SkillCard = ({ name, bgColor }: SkillCardProps) => {
  return (
    <div
      className="
  group relative overflow-hidden rounded-xl p-4 
  bg-white/5 backdrop-blur-sm border border-white/10
  hover:border-white/20 hover:bg-white/10
  transition-all duration-300 cursor-pointer
"
    >
      <div className="text-center">
        <h4 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
          {name}
        </h4>
      </div>

      <div
        className={`
  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
  bg-gradient-to-br ${bgColor} rounded-xl
`}
      ></div>
    </div>
  );
};

export default SkillCard;
