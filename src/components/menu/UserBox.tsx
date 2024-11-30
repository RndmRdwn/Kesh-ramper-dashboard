import { Button } from "@/components/shadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu"
import Link from "next/link"

export function UserBox() {



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" border-primary/20">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">User</span>
                </div>
              </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>

            <Link href={'/profile'}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>

            <Link href={'/support'}>
                <DropdownMenuItem>Support</DropdownMenuItem>
            </Link>
          
            <Link href={'/settings'}>
                <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <Link href={'/'}>
            <DropdownMenuItem>Log out</DropdownMenuItem>
        </Link>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
