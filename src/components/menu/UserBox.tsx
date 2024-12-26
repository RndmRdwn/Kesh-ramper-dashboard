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
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar"

export function UserBox() {



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
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
