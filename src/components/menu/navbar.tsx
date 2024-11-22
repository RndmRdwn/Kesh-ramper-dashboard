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
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet"
import { AppIcon } from '@/constant/icons'
import { navItems } from '.'
import TeamSwitcher from '@/app/(dashboard)/overview/components/team-switcher'

// type Props = {}

const Navbar = () => {

  
    const pathname = usePathname() 
    console.log('====================================');
    console.log(pathname);
    console.log('====================================');
  return (
    <div>
        <div className='w-full lg:flex xl:flex md:flex gap-1 hidden '>
            <TeamSwitcher />
            <div className='flex gap-0  items-center'>
                {navItems.map( item => (
                    <Link href={item.path} key={item.name} 
                        className={`text-sm font-medium  p-1  px-4 
                            border-b  transition-colors hover:text-primary
                            ${pathname == item.path ? 'border-primary' : 'border-transparent text-muted-foreground/70'}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
        <div className='w-full  lg:hidden xl:hidden md:hidden flex p-4'>

                <SheetDemo currentNav={pathname}/>
        </div>
    </div>
  )
}


export function SheetDemo({currentNav} : {currentNav : string}) {
    return (
      <Sheet >
         <SheetTrigger asChild>
            <Button variant="outline" className='p-0 px-3 border-primary text-primary '>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-[350px]'>
          <SheetHeader>
            <SheetTitle className='text-start flex gap-2 items-end'>
                <AppIcon className='h-8 w-8'/>
                Keshflip Ramp
            </SheetTitle>
          </SheetHeader>
         <div className='w-full h-full py-8'>
            <div className='w-full h-full flex flex-col pb-8 justify-between'>
            <div className='w-full grid gap-2 '>
                {navItems.map( item => (
                    <Link href={item.path} key={item.name} 
                        className={`font-medium  p-1 
                            border-b  transition-colors hover:text-primary
                            ${currentNav == item.path ? 'border-primary' : 'border-transparent text-muted-foreground/70'}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
                <h2>User Button</h2>
            </div>
         </div>
        </SheetContent>
      </Sheet>
    )
  }

export default Navbar