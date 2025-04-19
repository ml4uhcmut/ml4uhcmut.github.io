import Markdown from 'react-markdown';

interface RecruitBenefitsProps {
  title: string;
  items: string[];
}

export default function RecruitBenefits({ title, items }: RecruitBenefitsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((benefit, idx) => (
          <li key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
            <span className="text-blue-500 text-xl mr-3 mt-0.5">•</span>
            <div className="prose">
              <Markdown>{benefit}</Markdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}