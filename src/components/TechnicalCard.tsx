import type { TechnicalCardProps } from "@/types";

const TechnicalCard = ({
  icon,
  iconStyles,
  title,
  description,
  className,
}: TechnicalCardProps) => {
  const IconComponent = icon;
  return (
    <section className={`text-center ${className}`}>
      <div
        className={`bg-gradient-to-br ${iconStyles.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3`}
      >
        <IconComponent className={`w-8 h-8 ${iconStyles.color}`} />
      </div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </section>
  );
};

export default TechnicalCard;
