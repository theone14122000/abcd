type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <div className="mb-4 inline-flex rounded-full bg-[#dce9d5] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#4d7c57]">
          {badge}
        </div>
      )}

      <h2 className="text-4xl font-bold leading-[1.1] tracking-[-2px] text-[#161616] lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}