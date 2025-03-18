"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Project } from "@/lib/get-projects";
import { matchesQuery, splitQuery } from "@/lib/research-search";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectDetailOverlay from "./project-detail";
import ProjectCard from "./project-card";

export default function ProjectsPage({
  projects,
}: {
  readonly projects: Project[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const currentSearch = searchParams.get("search") ?? "";
  const currentInputValue = useRef(currentSearch);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const debouncedUrlUpdate = useDebounce(currentInputValue.current, 300);

  const filteredPublications = useMemo(() => {
    if (!currentSearch) return projects;
    const { phrases, terms } = splitQuery(currentSearch);

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.author,
        project.content,
      ].join(" ");
      return matchesQuery(searchableText, phrases, terms);
    });
  }, [projects, currentSearch]);

  const highlightTerms = useMemo(() => {
    if (!currentSearch) return [];
    const { phrases, terms } = splitQuery(currentSearch);
    return [...phrases, ...terms];
  }, [currentSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentInputValue.current = e.target.value;
    router.refresh();
  };

  const handleProjectSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseOverlay = () => {
    setSelectedIndex(-1);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedUrlUpdate) {
      params.set("search", debouncedUrlUpdate);
    } else {
      params.delete("search");
    }

    if (params.toString() !== searchParams.toString()) {
      router.replace(`/projects?${params.toString()}`, { scroll: false });
    }
  }, [debouncedUrlUpdate, router, searchParams]);

  return (
    <div className="min-h-screen w-full">
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-wrap relative min-h-screen h-screen pt-[60px]">
          <div
            className={`w-full h-full overflow-y-auto
            [&::-webkit-scrollbar]:w-[6px] 
            [&::-webkit-scrollbar-track]:bg-white/20
            [&::-webkit-scrollbar-thumb]:bg-white
            [&::-webkit-scrollbar-thumb]:rounded-full
            flex flex-col justify-between

            transition-all duration-100 ease-linear
            ${selectedIndex !== -1 ? "overflow-hidden" : ""}
            `}
          >
            <div className="w-full xl:pt-20 pt-10 flex flex-col items-center">
              {/* Description */}
              <div
                className={`text-sm text-white w-full flex sm:flex-row flex-col-reverse items-end justify-center mb-6 gap-6
                ${selectedIndex !== -1 ? "opacity-0" : "opacity-100"}
                transition-all duration-300 ease-linear
                `}
              >
                <div className="max-w-lg grow flex items-center justify-center text-pretty text-right py-4 px-3 text-white ">
                  Currently, several projects are being carried out by us. These
                  initiatives are being led by different groups within our team,
                  each contributing their unique expertise. All of these
                  projects are ongoing, with continuous efforts to push
                  boundaries and achieve impactful results.
                </div>

                <div className="px-4 flex flex-col items-start">
                  <div className="relative leading-none text-9xl text-transparent bg-white/70 bg-clip-text bg-bottom bg-opacity-50 font-extralight">
                    {"03"}
                  </div>
                  <div className="-mt-2">
                    <div className="font-semibold lg:text-4xl text-3xl text-transparent bg-white bg-clip-text bg-bottom text-nowrap tracking-widest relative uppercase">
                      Projects
                      <div className="absolute -top-[2px] -left-2 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                      <div className="absolute -bottom-[2px] -right-2 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search bar */}
              <div
                className={`sticky top-0 px-6 z-40 max-w-3xl w-full
                  transition-all duration-200 ease-linear
                  ${selectedIndex !== -1 ? "opacity-0" : "opacity-100"}

                `}
              >
                <div className="relative mx-auto">
                  <input
                    ref={inputRef}
                    type="text"
                    defaultValue={currentSearch}
                    onChange={handleSearchChange}
                    placeholder='Search projects... Use "word1" "word2" for OR search'
                    className="w-full px-4 py-2 bg-black/60 backdrop-blur-md 
                      border border-white/20 rounded-md
                      text-white placeholder-white/50"
                  />
                </div>
              </div>

              <div
                className={`w-full flex flex-wrap gap-10 px-6 mt-20 items-stretch justify-center
                  transition-all duration-100 ease-linear
                  ${selectedIndex !== -1 ? "opacity-0" : "opacity-100"}
                `}
              >
                {filteredPublications.map((project, index) => (
                  <ProjectCard
                    key={index}
                    index={index}
                    project={project}
                    searchTerms={highlightTerms}
                    onClick={() => handleProjectSelect(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Detail Overlay */}
          <ProjectDetailOverlay
            projects={filteredPublications}
            selectedIndex={selectedIndex}
            onClose={handleCloseOverlay}
            onIndexChange={setSelectedIndex}
          />
        </div>
      </div>
    </div>
  );
}
