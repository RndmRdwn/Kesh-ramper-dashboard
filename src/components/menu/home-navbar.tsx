'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from "@/components/shadcn/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet"
import { AppIcon } from '@/constant/icons'
import { homeNavItems, navItems } from '.'
import LogoBox from '../logo-box'
import { UserBox } from './UserBox'

// type Props = {}

const HomeNavbar = () => {

    const pathname = usePathname() 
  
  return (
    <div>
        <div className='w-full lg:flex xl:flex md:flex gap-1 hidden '>
            <div className='flex justify-between items-center w-full'>
            
            <div className='w-fit flex gap-8 items-center'>
                {/* <TeamSwitcher /> */}
                <LogoBox />
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
            <div className=''>
                <UserBox />
            </div>
            </div>
        </div>
        <div className='w-full  lg:hidden xl:hidden md:hidden flex px-2'>
            <HomeNavbarSheet currentNav={pathname}/>
        </div>
    </div>
  )
}


export function HomeNavbarSheet({currentNav} : {currentNav : string}) {
    return (
      <Sheet >
         <SheetTrigger asChild>
            <Button variant="outline" className='p-0 px-3 border-primary text-primary '>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetOverlay className='bg-transparent backdrop-blur-sm'/>
        <SheetContent side='right' className='bg-gradient-to-tl from-[#6600DC] to-[#7701ff] text-white border-none w-[350px]'>
          <SheetHeader>
            <SheetTitle className='text-start flex gap-2 items-end'>
                <AppIcon className='h-8 w-8'/>
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