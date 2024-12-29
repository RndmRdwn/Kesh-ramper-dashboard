import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";
import BackgroundGrid  from '../../public/assets/VisualElement.png' 
import WidgetImage  from '../../public/assets/widget02.svg' 
import Logo  from '../../public/assets/light-logo.png' 
import { Navig } from "@/components/menu/header";

export default function Home() {
  return (
   
   <div className="w-full h-screen flex justify-center items-center bg-[#6600DC]">
      <div className="w-full h-full flex justify-center items-center">
        <Image alt="visual" src={BackgroundGrid} width={1600} height={1600}/>
        <div className=" w-full lg:py-12 lg:px-32 px-8 h-screen absolute top-0 flex flex-col">
          <div className="w-full  flex items-center justify-between ">
            <Image alt="Logo" src={Logo} width={150} height={200}/>
            <div className="hidden lg:flex">
                <Navig />
            </div>
            <div className="lg:flex gap-3 hidden">
                <Button variant="outline" className="bg-[#fff] text-[#6600DC]   p-5 px-14 ">
                  Get Started
                </Button>
                <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0]  p-5 px-14 ">
                  Try Widget
                </Button>
            </div>
          </div>
          <div className="w-full h-full relative  justify-center items-center flex">
            <div className="w-full flex lg:flex-row  h-full flex-col justify-between gap-12 items-center">
              <div className="flex flex-col lg:items-start items-center pt-24  gap-5">
                <div className="w-full flex flex-col justify-center lg:items-start items-center gap-3  lg:pr-24">
                  <h2 className="text-sm p-2  w-fit px-4 font-medium text-white bg-gradient-to-tr from-[#E59CFF3D]/25 via-[#BA9CFF3D]/25 to-[#9CB2FF3D]/25 rounded-full">Fast, Secure Crypto Trading</h2>
                  <h2 className="lg:text-5xl text-4xl  text-white font-semibold lg:text-start text-center">
                    Embed our Widget in your business app
                  </h2>
                  <p className="text-white/80 font-light lg:text-start text-center text-sm">
                    Enable your customers to buy and sell Stablecoins (and other coins) in 20+ African countries using local mobile money and bank transfers directly from your business platform.
                  </p>
                </div>
                  <Link href={'/auth/sign-in'}>
                    <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0] font-semibold  p-5 px-14 ">
                      Try Widget Now!
                    </Button>
                  </Link>
              </div>
                
                <div className="absolute top-20 right-[-12px] bg-[#CCAAEE]/10 blur-[50px] h-[500px] w-[500px]  rounded-full" />
        
                <div className="w-full z-40  rounded-lg flex lg:items-end items-center lg:justify-end justify-center">
                    <Image alt="visual" src={WidgetImage} width={500} height={500}/>
                </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}
