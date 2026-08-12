import Markdown from 'react-markdown';

interface RecruitRequirementsProps {
  title: string;
  items: string[];
}

export default function RecruitRequirements({ title, items }: RecruitRequirementsProps) {
  return (
    <section className="h-full rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Who you are</p>
      <h2 className="mt-2 text-2xl font-black text-slate-900">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 text-slate-700">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <div className="prose prose-sm m-0 max-w-none"><Markdown>{item}</Markdown></div>
          </div>
        ))}
      </div>
    </section>
  );
}
