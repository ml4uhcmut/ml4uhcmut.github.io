import Link from "next/link";
import { TeamMember } from "@/types/team/team-types";
import { constructSocialLink } from "@/lib/construct-social-links";
import { getTrailingSlash } from "@/lib/get-trailing-slash";

export default function Founder({ pi }: { readonly pi: TeamMember[] }) {
  const currentFounder = pi[0];

  const trailingSlash = getTrailingSlash();

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {/* Title */}
      <div
        className="xl:text-4xl md:text-3xl text-xl font-light uppercase mt-10 text-white py-1 border-t border-b
      "
      >
        Principle Investigator
      </div>

      <div
        className=" flex flex-col sm:flex-row md:items-start items-center xl:gap-4 gap-4 justify-center 2xl:max-w-5xl 
        xl:max-w-4xl max-w-3xl
      2xl:px-20 px-4  py-10
      "
      >
        {/* Avatar */}
        <div className="shrink-0 flex flex-col items-center rounded-lg lg:max-w-[400px] max-w-[300px]">
          <div className="relative w-full  flex items-center justify-center rounded-lg">
            <img
              src={trailingSlash + currentFounder.image}
              alt={currentFounder.name}
              className="w-full h-full max-h-[400px] object-contain rounded-lg shadow-sm"
            />
          </div>
          {/* Name */}
          <h3 className="md:text-3xl lg:text-4xl font-medium text-white text-left transition-colors pb-2">
            {currentFounder.name}
          </h3>
          {/* Title */}
          <p className="md:text-lg text-base  text-white/80 ">
            <span className=" mr-2 uppercase">Faculty/</span>Principal
            Investigator
          </p>
          {/* Affiliations */}
          {currentFounder.affiliation && (
            <p className="text-base text-white/80 mt-1 text-center">
              {currentFounder.affiliation}
            </p>
          )}
        </div>

        {/* Founder details */}
        <div className=" ml-4 backdrop-blur-lg rounded-lg bg-black/10 shadow-sm p-4">
          {currentFounder.body && (
            <div className="font-extralight text-lg text-white/90">
              <span className="text-white underline mr-1 font-semibold ">
                Dr. Nguyen Duc Dung
              </span>
              leads a Machine Learning group at
              <span className="text-white font-semibold underline mx-1">
                Ho Chi Minh City University of Technology (HCMUT)
              </span>
              , focusing on cutting-edge research in artificial intelligence and
              data science. The group specializes in developing novel algorithms
              and models in areas such as deep learning, natural language
              processing, and computer vision, with applications spanning
              various industries. They emphasize both theoretical advancements
              and real-world implementations, fostering collaboration with
              academia and industry to address practical challenges through
              machine learning innovations. The group actively publishes
              research and engages in projects to advance the field.
            </div>
          )}

          <div className=" mt-6 w-full border-t border-gray-400">
            <div className="flex flex-wrap w-full justify-start items-center gap-2 my-2 py-2">
              {/* Founder links */}
              {currentFounder.links &&
                Object.entries(currentFounder.links)
                  .filter(
                    ([platform]) =>
                      platform !== "email" && platform !== "home-page"
                  )
                  .map(([platform, url]) => (
                    <Link
                      key={platform}
                      href={constructSocialLink(platform, url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors flex items-center justify-start"
                    >
                      <img
                        src={
                          trailingSlash +
                          "images/shared/" +
                          platform +
                          "-icon.svg"
                        }
                        alt={platform}
                        width={30}
                        height={30}
                        className="mr-2 rounded-full"
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
