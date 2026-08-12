import Markdown from 'react-markdown';

interface RecruitAboutProps {
  title: string;
  content: string;
}

export default function RecruitAbout({ title, content }: RecruitAboutProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.7fr_1.3fr] md:p-10">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">About the lab</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{title}</h2>
        <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
      </div>
      <div className="prose prose-slate max-w-none leading-7 prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
}
