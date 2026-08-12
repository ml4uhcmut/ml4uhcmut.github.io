import Markdown from 'react-markdown';

interface RecruitBenefitsProps {
  title: string;
  items: string[];
}

export default function RecruitBenefits({ title, items }: RecruitBenefitsProps) {
  return (
    <section className="h-full rounded-3xl bg-blue-950 p-6 text-white shadow-lg md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Why ML4U</p>
      <h2 className="mt-2 text-2xl font-black">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-blue-950">✓</span>
            <div className="prose prose-sm prose-invert m-0 max-w-none">
              <Markdown>{benefit}</Markdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
