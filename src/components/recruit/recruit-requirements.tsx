import Markdown from 'react-markdown';

interface RecruitRequirementsProps {
  title: string;
  items: string[];
}

export default function RecruitRequirements({ title, items }: RecruitRequirementsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {title}
      </h2>
      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
        {items.map((item, idx) => (
          <div key={idx} className={`${idx < items.length - 1 ? 'mb-2' : ''} ${idx === 0 ? 'font-semibold text-lg' : 'text-gray-700'}`}>
            <Markdown>{item}</Markdown>
          </div>
        ))}
      </div>
    </div>
  );
}