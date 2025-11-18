import { Presentation } from "@/components/Presentation";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { TeamMembersSlide } from "@/components/slides/TeamMembersSlide";
import { TeamMembersSlide2 } from "@/components/slides/TeamMembersSlide2";
import { AboutJellyfishSlide } from "@/components/slides/AboutJellyfishSlide";
import { WhyStrongFitSlide } from "@/components/slides/WhyStrongFitSlide";
import { TechnicalCapabilitiesSlide } from "@/components/slides/TechnicalCapabilitiesSlide";
import { AIExpertiseSlide } from "@/components/slides/AIExpertiseSlide";
import { DeliveryModelSlide } from "@/components/slides/DeliveryModelSlide";
import { CaseStudyIntroSlide } from "@/components/slides/CaseStudyIntroSlide";
import { ProblemRequirementsSlide } from "@/components/slides/ProblemRequirementsSlide";
import { WhatWeBuiltSlide } from "@/components/slides/WhatWeBuiltSlide";
import { TechStackSlide } from "@/components/slides/TechStackSlide";
import { TeamStructureSlide } from "@/components/slides/TeamStructureSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { TimelinePhase2Slide } from "@/components/slides/TimelinePhase2Slide";
import { ThankYouSlide } from "@/components/slides/ThankYouSlide";

const Index = () => {
  const slides = [
    { id: 1, component: <TitleSlide /> },
    { id: 2, component: <TeamMembersSlide /> },
    { id: 3, component: <TeamMembersSlide2 /> },
    { id: 4, component: <AboutJellyfishSlide /> },
    { id: 5, component: <WhyStrongFitSlide /> },
    { id: 6, component: <TechnicalCapabilitiesSlide /> },
    { id: 7, component: <AIExpertiseSlide /> },
    { id: 8, component: <DeliveryModelSlide /> },
    { id: 9, component: <CaseStudyIntroSlide /> },
    { id: 10, component: <ProblemRequirementsSlide /> },
    { id: 11, component: <WhatWeBuiltSlide /> },
    { id: 12, component: <TechStackSlide /> },
    { id: 13, component: <TeamStructureSlide /> },
    { id: 14, component: <TimelineSlide /> },
    { id: 15, component: <TimelinePhase2Slide /> },
    { id: 16, component: <ThankYouSlide /> },
  ];

  return <Presentation slides={slides} />;
};

export default Index;
