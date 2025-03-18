import SuspenseSearchParamsWrapperProjects from "@/components/projects/search-params-wrapper";
import { getProjects } from "@/lib/get-projects";

export default async function Projects() {
  const allProjects = await getProjects();

  return <SuspenseSearchParamsWrapperProjects projects={allProjects} />;
}
