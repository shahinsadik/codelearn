import CodersProfiles from "@/components/CoderProfile";
import Courses from "@/components/Courses";
import Header from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import StaticPagination from "@/components/Pagination";

import PopularCourses from "@/components/PopularCourses";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <div >
    <Header  />
    <HeroSection />
    
    <StatsSection />
    {/* <Courses/> */}
    <PopularCourses />
    <StaticPagination/>
    
    </div>
  );
}
