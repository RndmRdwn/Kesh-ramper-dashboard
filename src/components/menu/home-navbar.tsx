'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet"
import { homeNavItems, navItems } from '.'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Image from 'next/image'

import Logo  from '../../../public/assets/logo2.svg' 

// type Props = {}

const HomeNavbar = () => {

    const pathname = usePathname() 
  
  return (
    <div className=''>
        <div className='w-full lg:flex xl:flex md:flex gap-1 hidden '>
            <div className='flex justify-between items-center w-full'>
                <div className='w-fit flex gap-8 items-center'>
                    {/* <LogoBox /> */}

                    <div className='flex gap-0  items-center'>
                        {navItems.map( item => (
                            <Link href={item.path} key={item.name} 
                                className={`text-base font-semibold   p-1  px-4 
                                    border-t  transition-colors hover:text-primary
                                    ${pathname == item.path ? 'border-white' : 'border-transparent text-muted-foreground/70'}`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full  lg:hidden xl:hidden md:hidden flex'>
            <HomeNavbarSheet currentNav={pathname}/>
        </div>
    </div>
  )
}


export function HomeNavbarSheet({currentNav} : {currentNav : string}) {
    return (
      <Sheet >
         <SheetTrigger asChild>
                <HiOutlineMenuAlt3 size={32} className="text-[#FFCC00] hover:text-white"/>
        </SheetTrigger>
        <SheetOverlay className='bg-transparent backdrop-blur-sm'/>
        <SheetContent side='right' className='bg-gradient-to-tl from-[#6600DC] to-[#7701ff] text-white border-none w-[350px]'>
          <SheetHeader>
            <SheetTitle className='text-start flex gap-2 items-end'>
                <Link href={'/'}>
                    <Image alt="Logo" src={Logo} width={120} height={120}/>
                </Link>
            </SheetTitle>
          </SheetHeader>
         <div className='w-full h-full py-8'>
            <div className='w-full h-full flex flex-col pb-8 justify-between'>
            <div className='w-full grid gap-5 '>
                {homeNavItems.map( item => (
                    <Link href={item.path} key={item.name} 
                        className={`font-medium text-lg  p-1 
                            border-b  transition-colors hover:text-white
                            ${currentNav == item.path ? 'border-muted/40 rounded-r-full shadow-sm' : 'border-transparent '}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
            </div>
         </div>
        </SheetContent>
      </Sheet>
    )
  }

export default HomeNavbar