import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "../components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import { Instructer } from "@/components/Instructers";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white">
        <Hero />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <Instructer />
      </div>
    </>
  );
}
