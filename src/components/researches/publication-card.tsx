import Image from "next/image";
import Link from "next/link";
import { Paper } from "@/types/research/research-types";
import authorIcon from "@images/shared/author-black.svg";
import dateIcon from "@images/shared/date-black.svg";
import HighlightedSearchedText from "../ui/highlighted-searched-text";

interface PublicationCardProps {
  readonly publication: Paper;
  readonly searchTerms?: string[];
}

export default function PublicationCard({
  publication,
  searchTerms,
}: PublicationCardProps) {
  return (
    <div className="w-full text-black bg-white group shadow-lg hover:scale-105 transition-all duration-200 ease-in-out rounded-md border">
      <div className="flex md:flex-row flex-col gap-4 p-4 w-full">
        {publication.image && (
          <div className="w-[200px] h-[200px] bg-white relative rounded-md">
            <Image
              src={publication.image}
              alt={publication.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 min-w-0 py-2">
          {/* Publisher */}
          <p className="text-xs inline-flex ">
            {HighlightedSearchedText(publication.publisher ?? "", searchTerms)}
          </p>

          {/* Title */}
          <h3 className="text-base leading-[120%] font-bold mt-1 mb-2 py-1 border-b border-t border-black/60">
            <Link href={publication.link} target="_blank">
              {HighlightedSearchedText(publication.title, searchTerms)}
            </Link>
          </h3>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm mb-1">
            <Image src={dateIcon} alt="date" width={16} height={16} />
            <p>{publication.date}</p>
          </div>

          {/* Authors */}
          <div className="inline-flex items-start gap-2 ">
            <Image
              src={authorIcon}
              alt="author"
              width={16}
              height={16}
              className="inline-block"
            />
            <p className=" text-sm mb-4">
              {HighlightedSearchedText(
                publication.authors.join(", "),
                searchTerms
              )}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-2">
            {publication.tags?.map((tag) => (
              <Link
                href={`/research?tag=${tag}`}
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
