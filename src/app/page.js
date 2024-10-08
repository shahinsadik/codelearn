import BusinessSection from "@/components/business";
import AuthorCards from "@/components/Cards";
import CategoryCards from "@/components/CetegoryCard";
import CodersProfiles from "@/components/CoderProfile";
import Courses from "@/components/Courses";
import Footer from "@/components/footer";
import Header from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import StaticPagination from "@/components/Pagination";

import PopularCourses from "@/components/PopularCourses";
import Skill from "@/components/skill";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <div >
    <Header  />
    <HeroSection />
    
    <StatsSection />
    {/* <Courses/> */}
    {/* <PopularCourses /> */}
    {/* <StaticPagination/> */}
    <Skill />
    <CategoryCards/>
    <AuthorCards />
    <BusinessSection />
    <Footer />
    </div>
  );
}
