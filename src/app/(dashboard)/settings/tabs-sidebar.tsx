'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/shadcn/ui/button"
import { Separator } from "@/components/shadcn/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/shadcn/ui/dropdown-menu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: TabItems[]
}

interface TabItems {
  id: string
  path: string
  name: string
  sub?: { path: string; name: string }[]
}

interface SubItemType {
  currentItem: TabItems | undefined
  items: TabItems[]
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

// Find the selected item based on the current pathname or its sub-path
const isActiveItem = (item: TabItems, pathname: string) => {
  if (item.path === pathname) return true; // Exact match
  if (item.sub?.some((subItem) => pathname.startsWith(subItem.path))) return true; // Match sub-paths
  return false;
};

// DesktopMode Component
const DesktopMode = ({ items }: SubItemType) => {
  const pathname = usePathname();

  return (
    <div className="flex-wrap lg:flex md:flex">
      {items.map((item) => (
        <div key={item.id} className="relative group">
          {item.sub ? (
            // Render dropdown for items with subcomponents
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  isActiveItem(item, pathname)
                    ? "border-b-2 border-primary"
                    : "hover:bg-transparent",
                  "justify-start rounded-none font-medium"
                )}
              >
                {item.name}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.sub.map((subItem) => (
                  <DropdownMenuItem key={subItem.path} asChild>
                    <Link href={subItem.path}>{subItem.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // Render normal link for items without subcomponents
            <Link
              href={item.path}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                isActiveItem(item, pathname)
                  ? "border-b-2 border-primary"
                  : "hover:bg-transparent",
                "justify-start rounded-none font-medium"
              )}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
      <Separator />
    </div>
  );
};

// MobileMode Component
const MobileMode = ({ currentItem, items }: SubItemType) => {
  const pathname = usePathname();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full text-left">
          <div className="w-full p-2 text-sm font-medium bg-gray-100 rounded-md">
            {currentItem?.name || "Select"} ▼
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          {items.map((item) =>
            item.sub ? (
              <DropdownMenuSub key={item.id}>
                <DropdownMenuSubTrigger
                  className={cn(
                    isActiveItem(item, pathname)
                      ? "font-bold text-primary"
                      : "",
                    "py-2"
                  )}
                >
                  {item.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.sub.map((subItem) => (
                    <DropdownMenuItem key={subItem.path} asChild>
                      <Link href={subItem.path}>{subItem.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem
                key={item.id}
                asChild
                className={cn(
                  isActiveItem(item, pathname)
                    ? "font-bold text-primary"
                    : ""
                )}
              >
                <Link href={item.path}>{item.name}</Link>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};