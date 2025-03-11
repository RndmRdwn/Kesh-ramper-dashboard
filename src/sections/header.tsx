import { Navig } from '@/components/menu/header'
import { Button } from '@/components/shadcn/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Logo  from '../../public/assets/logo2.svg' 
import HomeNavbar from '@/components/menu/home-navbar'


type Props = {
    isTry: boolean
}

const Header = ({isTry}: Props) => {
  return (
    <div className="w-full  flex items-center py-4 lg:px-0  justify-between ">
         <Link href={'/'}>
          <Image alt="Logo" src={Logo} width={120} height={120}/>
         </Link>
         <div className="hidden lg:flex">
             <Navig />
         </div>
         <div className="lg:flex gap-3 hidden">
             <Link href={'/auth/sign-up'}>
               <Button variant="outline" className="bg-[#fff] text-[#6600DC]   p-5 px-14 ">
                 Get Started
               </Button>
             </Link>
             {isTry && 
                <Link href={'/auth/sign-in'}>
                <Button className="bg-[#FFCC00] text-[#6600DC] hover:bg-[#ffcc00d0]  p-5 px-14 ">
                    Try Widget
                </Button>
                </Link>
             }
         </div>
         <div className="lg:hidden flex ">
             <HiOutlineMenuAlt3 size={32} className="text-[#FFCC00] hover:text-white"/>
             <HomeNavbar />
         {/* <DropdownMenu>
           <DropdownMenuTrigger>
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
         </DropdownMenu> */}
         </div>
       </div>
  )
}

export default Header