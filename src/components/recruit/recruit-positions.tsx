"use client";
import { Role } from "@/lib/utils/recruitment";
import { useState } from "react";
import Markdown from 'react-markdown';

interface RecruitPositionsProps {
  title: string;
  roles: Role[];
}

export default function RecruitPositions({ title, roles }: RecruitPositionsProps) {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  
  const toggleExpand = (roleId: string) => {
    if (expandedRole === roleId) {
      setExpandedRole(null);
    } else {
      setExpandedRole(roleId);
    }
  };

  return (
    <section id="open-roles" className="scroll-mt-24">
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Find your team</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{title}</h2>
        </div>
        <p className="text-sm text-slate-500">Select a role to see the details</p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {roles.map(role => {
          const isExpanded = expandedRole === role.id;
          
          return (
            <article
              key={role.id} 
              className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${isExpanded ? 'border-blue-400 shadow-xl shadow-blue-100' : 'border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg'}`}
              onClick={() => toggleExpand(role.id)}
            >
              <button type="button" aria-expanded={isExpanded} className="w-full p-6 text-left md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-lg font-black text-blue-700">{role.title.charAt(0)}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">Research · Mentorship · Publication</p>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    {role.available} slots
                  </div>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'mt-6 max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {role.description && (
                    <div className="border-t border-slate-100 pt-5">
                      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">About this role</h4>
                      <div className="prose prose-sm max-w-none text-slate-600">
                        <Markdown>{role.description}</Markdown>
                      </div>
                    </div>
                  )}
                  
                  {role.topics && role.topics.length > 0 && (
                    <div className="mt-5">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Research topics</h4>
                      <ul className="flex flex-wrap gap-2">
                        {role.topics.map((topic, idx) => (
                          <li key={idx} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 [&_p]:m-0">
                            <Markdown>{topic}</Markdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                  {isExpanded ? "Show less" : "View role"}
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
