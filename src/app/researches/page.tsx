import SuspenseSearchParamsWrapper from "@/components/researches/search-params-wrapper";
import { getYamlResearchPapersGroupedByYear } from "@/lib/yaml-parser";

export const metadata = {
  title: "Research",
  description: "Our research publications",
};

export default async function ResearchPage() {
  const publications = await getYamlResearchPapersGroupedByYear();

  return <SuspenseSearchParamsWrapper publications={publications} />;
}
