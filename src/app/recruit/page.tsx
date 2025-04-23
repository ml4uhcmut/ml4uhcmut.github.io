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
    <div className="min-h-screen w-full pt-[80px] pb-12 relative z-10">
      <div className="relative z-20 container mx-auto px-4 md:px-8 max-w-6xl bg-white/95 backdrop-blur-md rounded-lg shadow-xl py-10">
        <RecruitHero 
          title={recruitmentData.heading.title} 
          description={recruitmentData.heading.description} 
        />
        
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
        
        <RecruitBenefits 
          title={recruitmentData.benefits.title} 
          items={recruitmentData.benefits.items} 
        />
        
        <RecruitRequirements 
          title={recruitmentData.requirements.title} 
          items={recruitmentData.requirements.items} 
        />
        
        <RecruitApplication 
          title={recruitmentData.application.title}
          contact_email={recruitmentData.application.contact_email}
          deadline={recruitmentData.application.deadline}
        />
        
        <RecruitFooter content={recruitmentData.footer} />
      </div>
    </div>
  );
}
