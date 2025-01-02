import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";
import BackgroundGrid  from '../../public/assets/VisualElement.png' 
import Logo  from '../../public/assets/logo2.svg' 
import { Navig } from "@/components/menu/header";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";

export default function Home() {
  return (
   
   <div className="w-full h-screen flex justify-center items-center bg-[#6600DC]">
      <div className="w-full h-full flex justify-center items-center">
        <Image alt="visual" src={BackgroundGrid} width={1600} height={1600}/>
        <div className=" w-full lg:py-8 lg:px-32 px-6 h-screen absolute top-0 flex flex-col">
          <div className="w-full  flex items-center py-4 justify-between ">
            <Image alt="Logo" src={Logo} width={120} height={120}/>
            <div className="hidden lg:flex">
                <Navig />
            </div>
            <div className="lg:flex gap-3 hidden">
                <Link href={'/auth/sign-up'}>
                  <Button variant="outline" className="bg-[#fff] text-[#6600DC]   p-5 px-14 ">
                    Get Started
                  </Button>
                </Link>
                <Link href={'/auth/sign-in'}>
                  <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0]  p-5 px-14 ">
                    Try Widget
                  </Button>
                </Link>
            </div>
            <div className="lg:hidden flex ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiOutlineMenuAlt3 size={32} className="text-[#FFCC00] hover:text-white"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuItem className="text-lg font-medium">Why Keshflip</DropdownMenuItem>
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-lg font-medium">Discover</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem className="text-base font-normal">Widget Overview </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-normal">Features </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-normal">Benefits </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-lg font-medium">Learn</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem className="text-base font-normal">Get Started </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-normal">Crypto Basics </DropdownMenuItem>
                        <DropdownMenuItem className="text-base font-normal">Security and Safety </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuItem className="text-lg font-medium">Support</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
          </div>
          <div className="w-full h-full relative  justify-center items-center flex">
            <div className="w-full flex lg:flex-row  h-full flex-col justify-between gap-12 items-center">
              <div className="flex flex-col lg:items-start items-center  h-full lg:pt-48   pt-8 gap-8">
                <div className="w-full flex flex-col justify-center lg:items-start items-center gap-5  lg:pr-2">
                  <h2 className="text-sm p-2  w-fit px-4 font-medium text-white bg-gradient-to-tr from-[#E59CFF3D]/25 via-[#BA9CFF3D]/25 to-[#9CB2FF3D]/25 rounded-full">Fast, Secure Crypto Trading</h2>
                  <h2 className="lg:text-5xl text-4xl  text-white font-semibold lg:text-start text-center">
                    Embed our Widget in your business app
                  </h2>
                  <p className="text-white/80 font-light lg:text-start text-center text-sm">
                    Enable your customers to buy and sell Stablecoins (and other coins) in 20+ African countries using local mobile money and bank transfers directly from your business platform.
                  </p>
                </div>
                  <Link href={'/auth/sign-in'}>
                    <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0] font-semibold  p-6 px-14 ">
                      Try Widget Now!
                    </Button>
                  </Link>
              </div>
                
                <div className="absolute top-20 right-[-12px] bg-[#CCAAEE]/10 blur-[50px] h-[500px] w-[500px]  rounded-full" />
        
                <div className="w-full z-40  lg:pb-0 pb-12   rounded-lg flex lg:items-end items-center lg:justify-end justify-center">
                  <div className='w-[403px]  h-[670px]  shadow-lg rounded-3xl p-2 border-primary bg-gradient-to-tr from-[#6600CC] via-[#9046DA] to-[#6600CC]' >
                    <iframe
                     className="rounded-3xl overflow-hidden w-[365px] lg:w-[385px] "
                      src="https://kesh-ramper-widget.vercel.app/"
                      height={655}
                      style={{ overflow: 'hidden', border: 'none' }}
                    ></iframe>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}
