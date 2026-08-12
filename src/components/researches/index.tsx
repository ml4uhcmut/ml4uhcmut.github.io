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

const getVenueName = (publisher?: string) => {
  if (!publisher?.trim()) return "Venue not specified";

  return publisher
    .trim()
    .replace(/^Proceedings of (?:the )?/i, "")
    .replace(/^\d{4}\s+(?:\d+(?:st|nd|rd|th)\s+)?/i, "")
    .replace(/^arxiv preprint$/i, "arXiv Preprint");
};

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

  const publicationSummary = useMemo(() => {
    const papers = filteredPublications.flatMap((group) => group.papers);
    const venueCounts = papers.reduce((counts, paper) => {
      const venue = getVenueName(paper.publisher);
      counts.set(venue, (counts.get(venue) ?? 0) + 1);
      return counts;
    }, new Map<string, number>());

    return {
      total: papers.length,
      venues: [...venueCounts.entries()].sort(
        ([venueA, countA], [venueB, countB]) =>
          countB - countA || venueA.localeCompare(venueB),
      ),
    };
  }, [filteredPublications]);

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

          {/* Publication summary */}
          <section
            aria-labelledby="publication-summary-title"
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Publication dashboard
                </p>
                <h2 id="publication-summary-title" className="mt-1 text-xl font-bold">
                  Our research at a glance
                </h2>
              </div>
              <div className="flex gap-3">
                <div className="min-w-24 rounded-xl bg-white/10 px-4 py-3 text-center">
                  <div className="text-2xl font-bold">{publicationSummary.total}</div>
                  <div className="text-xs text-white/60">
                    {currentSearch ? "matching papers" : "total papers"}
                  </div>
                </div>
                <div className="min-w-24 rounded-xl bg-blue-500/20 px-4 py-3 text-center">
                  <div className="text-2xl font-bold text-blue-100">
                    {publicationSummary.venues.length}
                  </div>
                  <div className="text-xs text-white/60">venues</div>
                </div>
              </div>
            </div>

            {publicationSummary.venues.length > 0 ? (
              <div className="grid max-h-72 grid-cols-1 gap-px overflow-y-auto bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {publicationSummary.venues.map(([venue, count]) => (
                  <div
                    key={venue}
                    className="flex items-center justify-between gap-4 bg-slate-950/80 px-5 py-3 transition-colors hover:bg-blue-950/80"
                  >
                    <span className="text-sm leading-5 text-white/85">{venue}</span>
                    <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/25 px-2 text-xs font-bold text-blue-100">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="px-5 py-8 text-center text-sm text-white/60">
                No publications match this search.
              </p>
            )}
          </section>

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
