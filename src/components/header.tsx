
'use client'

import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbItem, BreadcrumbPage } from "@/components/shadcn/ui/breadcrumb";
import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";
import { Separator } from './shadcn/ui/separator';
import { usePathname } from 'next/navigation';

const Header = () => {

     // Get the current pathname using usePathname
  const pathname = usePathname() || '/'

  // Split the pathname into segments
  const pathSegments = pathname.split('/').filter(segment => segment)
  const mainPath = pathSegments[0] || '' // First segment (e.g., 'settings')
  const subPath = pathSegments[1] || '' // Second segment (e.g., 'roles')

  return (
    <div>
         <header className="flex h-16 pr-12  justify-between shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                            {mainPath.charAt(0).toUpperCase() + mainPath.slice(1)} {/* Capitalize first letter */}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {subPath.charAt(0).toUpperCase() + subPath.slice(1)} {/* Capitalize first letter */}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    </div>
  )
}

export default Header