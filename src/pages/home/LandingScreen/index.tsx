import React from "react";
import HeroSection from "../../../components/landingsection/HeroSection";
import InfoSection from "../../../components/landingsection/InfoSection";
import SkillSection from "../../../components/landingsection/SkillSection";
import ProjectSection from "../../../components/landingsection/ProjectSection";
import Footer from '../../../components/common/partials/Footer'
const index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <SkillSection />
      <ProjectSection />
      <Footer/>
    </>
  );
};

export default index;
