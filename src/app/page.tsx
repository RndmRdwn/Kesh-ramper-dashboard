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
   
    <div className="bg-[#070C14] text-white">
      <Landing />
      <WhyChoose />
      <div className="pt-8">
      <Testimonials />
        <Integration />
        <UserStatisfaction />
        <Banner contain/>
        <FAQ />
      </div>
      <Footer/>
    </div>
  );
}
