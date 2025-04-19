interface RecruitHeroProps {
  title: string;
  description: string;
}

export default function RecruitHero({ title, description }: RecruitHeroProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600 relative">
        {title}
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}