'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/shadcn/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/ui/select"
import { Separator } from "@/components/shadcn/ui/separator"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: TabItems[]
}

interface TabItems {
  id: string
  path: string
  name: string
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  // Find the selected item based on the current pathname
  const selectedItem = items.find((item) => item.path === pathname)

  return (
    <nav className={cn("relative w-full", className)} {...props}>
      {/* Desktop Mode */}
      <div className="hidden md:block">
        <DesktopMode items={items} currentItem={selectedItem} />
      </div>
      {/* Mobile Mode */}
      <div className="block md:hidden">
        <MobileMode items={items} currentItem={selectedItem} />
      </div>
    </nav>
  )
}

interface SubItemType {
  currentItem: TabItems | undefined
  items: TabItems[]
}

// DesktopMode Component
const DesktopMode = ({ currentItem, items }: SubItemType) => {
  return (
    <div className=" flex-wrap lg:flex md:flex  ">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            currentItem?.path === item.path
              ? " border-b-2 border-primary"
              : "hover:bg-transparent ",
            "justify-start rounded-none font-medium"
          )}
        > 
          {item.name}
        </Link>
      ))}
      <Separator />
    </div>
  )
}

// MobileMode Component
const MobileMode = ({ currentItem, items }: SubItemType) => {
  return (
    <div>
      <Select
        onValueChange={(value) => {
          const selectedItem = items.find((item) => item.id === value)
          if (selectedItem) {
            window.location.href = selectedItem.path // Navigate to the selected path
          }
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={currentItem?.name || "Select"} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
