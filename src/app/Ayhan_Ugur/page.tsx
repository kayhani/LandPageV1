import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Ayhan_UgurSection from "@/components/sections/Ayhan_UgurSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";

export default function Ayhan_Ugur() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[9rem]">
        <Ayhan_UgurSection />
        {/* <HeroSection /> */}
        {/* <ServiceSection /> */}
        {/* <VideoPlayerSection /> */}
        {/* <TestimonialSection /> */}
        {/* <TeamSection /> */}
        {/* <NewsletterSection /> */}
        <FooterSection />
      </div>
    </main>
  );
}
