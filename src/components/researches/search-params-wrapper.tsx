"use client";
import { Suspense } from "react";
import ResearchList from ".";
import { YearGroup } from "@/types/research/research-types";

interface Props {
  readonly publications: YearGroup[];
}

export default function SuspenseSearchParamsWrapper({ publications }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearchList publications={publications} />
    </Suspense>
  );
}
