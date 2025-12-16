import Image from "next/image";
import { Project } from "@/lib/get-projects";
import authorIcon from "@images/shared/author-black.svg";
import dateIcon from "@images/shared/date-black.svg";
import aboutIcon from "@images/shared/about.svg";
import HighlightedSearchedText from "../ui/highlighted-searched-text";

interface ProjectCardProps {
  readonly index: number;
  readonly project: Project;
  readonly searchTerms?: string[];
  readonly onClick?: () => void;
}

export default function ProjectCard({
  index,
  project,
  searchTerms,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      className="md:w-[calc(50%-2.5rem)] xl:w-[calc(33.333%-2.75rem)] w-full self-stretch  group rounded-md shadow-lg transition-all duration-300 ease-in-out hover:scale-105 "
      onClick={onClick}
    >
      <div className="flex flex-col flex-1 min-w-0 py-1 h-full relative">
        {/* Project title */}
        <div className="w-full flex items-center mb-[-1px] relative z-10">
          <div className="w-[100px] flex justify-end relative">
            <div className=" grow self-stretch text-xl justify-center flex items-center text-white/65">
              {"0" + (index + 1)}
              <div className="w-4 h-[2px] bg-white/50 rotate-[-45deg] ml-2"></div>
            </div>
            <div
              className=" rounded-tr-lg mr-[-3px]"
              style={{
                borderWidth: "0 0 40px 40px",
                borderColor: "transparent transparent #fff transparent",
              }}
            ></div>
          </div>
          <h3 className="self-stretch lg:text-base text-sm leading-[120%] flex items-center justify-center grow rounded-t-md h-[40px] font-bold pt-1 bg-white">
            {HighlightedSearchedText(project.title, searchTerms)}
          </h3>
        </div>

        {/* Project meta */}
        <div
          className="rounded-b-md rounded-tl-md  transition-all duration-300 ease-in-out
          bg-white h-[calc(100%-40px)] overflow-hidden relative
          "
        >
          <div className=" flex items-center flex-wrap gap-2 text-xs  py-2 px-4 ">
            {project.date && (
              <p className="text-black  flex items-center gap-1">
                <Image src={dateIcon} alt="date" width={16} height={16} />
                <span>{project.date}</span>
              </p>
            )}
            <p className="text-black  flex items-center gap-1">
              <Image src={authorIcon} alt="author" width={16} height={16} />
              <span className="text-ellipsis line-clamp-1">
                {HighlightedSearchedText(project.author, searchTerms)}
              </span>
            </p>
          </div>

          <div className=" mt-1 text-sm text-black text-left px-4 font-normal pb-4">
            <Image
              src={aboutIcon}
              alt="about"
              width={16}
              height={16}
              className="inline mr-1"
            />
            {HighlightedSearchedText(project.description, searchTerms)}
          </div>
        </div>
      </div>
    </button>
  );
}
