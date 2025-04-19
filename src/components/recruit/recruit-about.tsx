import Markdown from 'react-markdown';

interface RecruitAboutProps {
  title: string;
  content: string;
}

export default function RecruitAbout({ title, content }: RecruitAboutProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {title}
      </h2>
      <div className="prose max-w-none">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}