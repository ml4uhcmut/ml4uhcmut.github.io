import React from 'react';

interface RecruitApplicationProps {
  title: string;
  contact_email: string;
  deadline: string;
}

export default function RecruitApplication({
  title,
  contact_email,
  deadline,
}: RecruitApplicationProps) {
  const email =
    contact_email && contact_email !== '<insert contact email>'
      ? contact_email
      : '';
  const deadlineText =
    deadline && deadline !== '<insert deadline>' ? deadline : 'TBA';

  return (
    <section id="apply" className="scroll-mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-1 shadow-xl shadow-blue-200">
      <div className="rounded-[20px] bg-slate-950 px-6 py-10 text-white md:px-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Take the next step</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Email us with the subject <strong className="text-white">[AITech Lab Application] Your Name</strong> and attach your résumé. Tell us what you want to explore and why you would like to join.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Application window: {deadlineText}
            </div>
          </div>
          {email && (
            <a href={`mailto:${email}?subject=${encodeURIComponent('[AITech Lab Application] Your Name')}`} className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-center font-bold text-blue-950 transition hover:-translate-y-1 hover:bg-cyan-50">
              Email your application
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
