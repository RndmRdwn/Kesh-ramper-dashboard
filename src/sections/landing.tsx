import React from 'react'
import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";
import BackgroundGrid  from '../../public/assets/VisualElement.png' 
import Reveal from '@/components/animations/reveal';
import TypingAnimation from '@/components/animations/TypingAnimation';
import Fade from '@/components/animations/fade';


const Landing = () => {
  return (
   <div className="w-full h-screen flex justify-center items-center bg-[#6600DC]">
   <div className="w-full h-full flex justify-center items-center">
     <Image alt="visual" src={BackgroundGrid} width={1600} height={1600}/>
     <div className=" w-full lg:px-0 px-5 max-w-7xl mx-auto  h-full absolute lg:top-0 top-32 flex flex-col">
       <div className="w-full h-full relative  justify-center items-center flex">
         <div className="w-full flex lg:flex-row  h-full flex-col justify-between gap-12 items-center">
           <div className="flex flex-col lg:items-start   h-full lg:pt-48   pt-8 gap-8">
             <div className="w-full flex flex-col   justify-start lg:items-start items-start gap-5  lg:pr-2">
               <Fade>
                <div className="text-sm p-2  w-fit px-4 font-medium text-white bg-gradient-to-tr from-[#E59CFF3D]/25 via-[#BA9CFF3D]/25 to-[#9CB2FF3D]/25 rounded-full">
                  <TypingAnimation color='gray' content={'Fast, Secure Crypto Trading'} size='medium' delay={0.038} speed={1}/>
                </div>
               </Fade>
                
                <TypingAnimation color='white'  content={'Embed our Widget in your business app'} size='xxxlarge' delay={0.058} speed={1.5}/>
               <Reveal delay={2}>
                <p className="text-white/80 font-light lg:text-start  text-sm">
                  Enable your customers to buy and sell Stablecoins (and other coins) in 20+ African countries using local mobile money and bank transfers directly from your business platform.
                </p>
               </Reveal>
             </div>
             <Reveal delay={2.8}>
               <Link href={'/auth/sign-in'}>
                 <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0] font-semibold  p-6 px-14 ">
                   Try Widget Now!
                 </Button>
               </Link>
             </Reveal>
           </div>
              <div className="absolute top-20 right-[-24px] bg-[#CCAAEE]/10 blur-[50px] h-[500px] w-[500px]  rounded-full" />
              <div className="w-full z-40  lg:pb-0 pb-12   rounded-lg flex lg:items-end items-center lg:justify-end justify-center">
             <Reveal delay={1}>
                <div className='w-[405px] lg:h-[680px] h-[680px]  shadow-lg rounded-3xl p-2 border-primary bg-gradient-to-tr from-[#6600CC] via-[#9046DA] to-[#6600CC]' >
                  <iframe
                    className="rounded-3xl overflow-hidden h-[665px] w-[390px] lg:w-[390px] "
                    src="https://kesh-ramper-widget.vercel.app/"
                    style={{ overflow: 'hidden', border: 'none' }}
                  ></iframe>
                </div>
             </Reveal>
              </div>
         </div>
       </div>
     </div>
   </div>
</div>
  )
}

export default Landing