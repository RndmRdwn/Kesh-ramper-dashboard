import Landing from "@/sections/landing";
import Banner from "../sections/banner";
import FAQ from "../sections/faq";
import Footer from "../sections/footer";
import Integration from "../sections/integration";
// import Landing from "../sections/landing";
import Testimonials from "../sections/testimonials";
import UserStatisfaction from "../sections/userSatisfication";
import WhyChoose from "../sections/why-choose";

export default function Home() {
  return (
   
    <div>
      <Landing />
      <WhyChoose />
      <Testimonials />
      <div className="bg-gradient-to-bl from-[#101219] text-white to-black">
        <Integration />
        <UserStatisfaction />
        <Banner />
        <FAQ />
      </div>
      <Footer/>
    </div>
  );
}
