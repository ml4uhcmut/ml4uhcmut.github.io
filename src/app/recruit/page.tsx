import RecruitAbout from "@/components/recruit/recruit-about";
import RecruitApplication from "@/components/recruit/recruit-application";
import RecruitBenefits from "@/components/recruit/recruit-benefits";
import RecruitFooter from "@/components/recruit/recruit-footer";
import RecruitHero from "@/components/recruit/recruit-hero";
import RecruitPositions from "@/components/recruit/recruit-positions";
import RecruitRequirements from "@/components/recruit/recruit-requirements";
import { getRecruitmentData } from "@/lib/utils/recruitment";

export default function RecruitPage() {
  const recruitmentData = getRecruitmentData();
  
  return (
    <main className="relative z-10 min-h-screen w-full self-start overflow-x-clip bg-slate-50 pb-20 pt-[60px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700" />
      <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-14">
        <RecruitHero 
          title={recruitmentData.heading.title} 
          description={recruitmentData.heading.description} 
        />

        <div className="mt-8 space-y-8 md:mt-12 md:space-y-12">
          {recruitmentData.about && (
            <RecruitAbout
              title={recruitmentData.about.title}
              content={recruitmentData.about.content}
            />
          )}

          <RecruitPositions
            title={recruitmentData.positions.title}
            roles={recruitmentData.positions.roles}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <RecruitBenefits
              title={recruitmentData.benefits.title}
              items={recruitmentData.benefits.items}
            />
            <RecruitRequirements
              title={recruitmentData.requirements.title}
              items={recruitmentData.requirements.items}
            />
          </div>

          <RecruitApplication
            title={recruitmentData.application.title}
            contact_email={recruitmentData.application.contact_email}
            deadline={recruitmentData.application.deadline}
          />

          <RecruitFooter content={recruitmentData.footer} />
        </div>
      </div>
    </main>
  );
}
