import Landing from "@/sections/landing";
import Banner from "../sections/banner";
import FAQ from "../sections/faq";
import Integration from "../sections/integration";
// import Landing from "../sections/landing";
import Testimonials from "../sections/testimonials";
import UserStatisfaction from "../sections/userSatisfication";
import WhyChoose from "../sections/why-choose";
import Footer2 from "@/sections/footer2";
import Reveal4mTop from "@/components/animations/reveal4mTop";
import Header from "@/sections/header";

export default function Home() {
  return (
   
    <div className="bg-[#070C14] text-white">
      <div className="w-full bg-[#6600DC]">
        <div className="w-full max-w-7xl lg:px-0 px-5 mx-auto ">
          <Reveal4mTop>
            <Header isTry/>
          </Reveal4mTop>
        </div>
      </div>
      <Landing />
      <WhyChoose />
      <div className="pt-8">
      <Testimonials />
        <Integration />
        <UserStatisfaction />
        <Banner contain/>
        <FAQ />
      </div>
      <Footer2/>
    </div>
  );
}
