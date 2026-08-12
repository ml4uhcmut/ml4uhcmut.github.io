"use client";

interface RecruitHeroProps {
  title: string;
  description: string;
}

export default function RecruitHero({ title, description }: RecruitHeroProps) {
  const currentTitle = title.replace(
    "{{currentYear}}",
    new Date().getFullYear().toString(),
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-6 py-12 text-white shadow-2xl backdrop-blur-md md:px-12 md:py-16">
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/3 rounded-full border-[32px] border-cyan-300/20" />
      <div className="relative max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Applications are open
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          {currentTitle}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#open-roles" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-950 transition hover:-translate-y-0.5 hover:bg-cyan-50">
            Explore open roles
          </a>
          <a href="#apply" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Apply now
          </a>
        </div>
      </div>
    </section>
  );
}
