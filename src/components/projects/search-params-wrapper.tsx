import { Project } from "@/lib/get-projects";
import { Suspense } from "react";
import ProjectsPage from ".";

export default function SuspenseSearchParamsWrapperProjects({
  projects,
}: {
  readonly projects: Project[];
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsPage projects={projects} />
    </Suspense>
  );
}
