import { TeamMember } from "@/types/team/team-types";
import MemberCard from "./profile-card";

export default function MembersGroup({
  members,
}: {
  readonly members: TeamMember[];
}) {
  return (
    <div className="w-full flex items-center justify-center  xl:pt-[120px] lg:pt-[60px] md:pt-[32px]">
      <section className="2xl:max-w-[1440px] flex flex-col items-start justify-center 2xl:px-20 px-6 w-full">
        <div
          className=" w-full flex flex-wrap justify-center items-center 
        md:gap-8 xl:gap-10 gap-6"
        >
          <div className="max-w-[300px] p-4">
            <h2 className="text-xl md:text-4xl font-bold text-right flex flex-col md:items-end items-center">
              <div className="w-fit">
                <span className=" uppercase text-white leading-none p-[2px]">
                  Undergrad
                </span>
              </div>
              <div className="text-white font-light border-b border-t mt-1 py-1">
                Team Members
              </div>
            </h2>
            <p className="text-white/90 font-light md:text-right text-center text-sm md:text-base">
              The following are the undergraduate students of HCMUT who are part
              of the research team.
            </p>
          </div>

          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
