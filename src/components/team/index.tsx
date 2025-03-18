"use client";

import React from "react";
import { TeamPageProps } from "@/types/team/team-types";
import MembersGroup from "./members-group";
import Founder from "./founder";
import AlumnisGroup from "./alumnis-group";
import WhoWeAre from "./who-we-are";

const TeamPage = ({ pi, teamMembers, alumni }: TeamPageProps) => {
  return (
    <div
      className="scroll-smooth 
    w-full xl:w-[calc(100%-160px)]
    relative flex flex-col items-center justify-start"
    >
      {/* Header underlay for readability enhancement */}
      <div className="fixed w-full h-[60px] top-0 left-0">
        <div className="w-full h-full bg-[#102542] bg-opacity-65">
          <div className="w-full h-full bg-gradient-to-b from-[#0A192F] from-[0.5%] via-transparent to-transparent bg-opacity-15"></div>
        </div>{" "}
      </div>

      {/* Introduction Section */}
      <WhoWeAre />

      {/* Founder Section */}
      <Founder pi={pi} />

      {/* Team Members Section */}
      <MembersGroup members={teamMembers} />

      {/* Alumni Section */}
      <AlumnisGroup members={alumni} />
    </div>
  );
};

export default TeamPage;
