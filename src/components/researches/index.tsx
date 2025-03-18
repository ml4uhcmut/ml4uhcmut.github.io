"use client";
import React, { useMemo, useRef } from "react";
import { YearGroup } from "@/types/research/research-types";
import { matchesQuery, splitQuery } from "@/lib/research-search";
import { useDebounce } from "@/hooks/use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import PublicationCard from "./publication-card";

interface Props {
  readonly publications: YearGroup[];
}

export default function ResearchList({ publications }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSearch = searchParams.get("search") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const currentInputValue = useRef(currentSearch);
  const debouncedUrlUpdate = useDebounce(currentInputValue.current, 300);

  const filteredPublications = useMemo(() => {
    if (!currentSearch) return publications;
    const { phrases, terms } = splitQuery(currentSearch);

    return publications
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter((paper) => {
          const searchableText = [
            paper.title,
            paper.authors.join(" "),
            paper.publisher,
          ].join(" ");

          return matchesQuery(searchableText, phrases, terms);
        }),
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);
  }, [publications, currentSearch]);

  // Get all matched terms for highlighting
  const highlightTerms = useMemo(() => {
    if (!currentSearch) return [];
    const { phrases, terms } = splitQuery(currentSearch);
    return [...phrases, ...terms];
  }, [currentSearch]);

  // Handle input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentInputValue.current = e.target.value;
    router.refresh();
  };

  // Update URL when debounced value changes
  React.useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedUrlUpdate) {
      params.set("search", debouncedUrlUpdate);
    } else {
      params.delete("search");
    }

    if (params.toString() !== searchParams.toString()) {
      router.replace(`/researches?${params.toString()}`, { scroll: false });
    }
  }, [debouncedUrlUpdate, router, searchParams]);

  return (
    <div className="min-h-screen w-full pt-[60px] ">
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl px-4 relative ">
          {/* Section title & description */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="pl-3 text-9xl bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight pt-4">
              02
            </div>
            <div className=" min-w-[200px] w-fit py-2 px-3 ">
              <div className="font-medium lg:text-4xl text-3xl text-white text-nowrap tracking-widest relative uppercase">
                Publications
                <div className="absolute -top-[2px] -left-2 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                <div className="absolute -bottom-[2px] -right-2 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
              </div>
            </div>

            <div className="text-center text-white text-base mt-4 max-w-3xl">
              Below are publications by our members, including some completed
              during their time at other industry partners (e.g., VinAI).
            </div>
          </div>

          {/* Search Input */}
          <div className="sticky top-[60px] z-50 py-4">
            <div className="relative max-w-xl mx-auto">
              <input
                ref={inputRef}
                type="text"
                defaultValue={currentSearch}
                onChange={handleSearchChange}
                placeholder='Search publications... Use "word1" "word2" for OR search'
                className="w-full px-4 py-2 bg-black/60 backdrop-blur-md 
                       border border-white/20 rounded-lg
                       text-white placeholder-white/50"
              />
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-12 mt-8 relative pb-20">
            {[...filteredPublications].toReversed().map((yearGroup) => (
              <div key={yearGroup.year} className="space-y-6">
                <h2 className="text-3xl font-bold text-white border-b py-2 px-4 z-40 flex gap-2 items-end">
                  {yearGroup.year}

                  <p className="font-light text-base pl-2 border-l leading-loose">
                    {yearGroup.papers.length} publications
                  </p>
                </h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {[...yearGroup.papers].toReversed().map((paper) => (
                    <PublicationCard
                      key={paper.id}
                      publication={paper}
                      searchTerms={highlightTerms}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
