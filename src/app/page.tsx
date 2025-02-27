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
      {/* <Landing /> */}
      <WhyChoose />
      <Testimonials />
      <Integration />
      <UserStatisfaction />
      <Banner />
      <FAQ />
      <Footer/>
    </div>
  );
}
