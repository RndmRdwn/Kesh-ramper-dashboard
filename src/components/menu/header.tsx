"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Widget Overview",
    href: "/docs/widget-overview",
    description:
      "Keshflip Pay offers a fast, secure, and user-friendly platform for easily accessing and managing cryptocurrencies.",
  },
  {
    title: "Features",
    href: "/docs/features",
    description:
      "Explore the key features that make Keshflip Pay the best choice for crypto enthusiasts, from seamless onboarding to fast transactions",
  },
  {
    title: "Benefits",
    href: "/docs/benefits",
    description:
      "Enjoy the benefits of a secure, efficient, and globally accessible platform that prioritizes your convenience and safety.",
  },
]
const learnComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Get Started",
    href: "/docs/get-started",
    description:
      "Follow simple steps to create your account, fund it, and start buying crypto in minutes.",
  },
  {
    title: "Crypto Basics",
    href: "/docs/crypto-basics",
    description:
      "Learn the fundamentals of cryptocurrencies, blockchain technology, and how they are transforming the financial landscape.",
  },
  {
    title: "Security and Safety",
    href: "/docs/security-and-safety",
    description:
      "Discover how Ramper keeps your crypto assets safe with top-tier security measures like two-factor authentication and cold storage.",
  },
]

export function Navig() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem className="">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  bg-transparent hover:bg-transparent hover:text-yellow-400 text-white`}>
              Why Keshflip
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent hover:text-yellow-400 text-white">Discover</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] gap-0 p-4  ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent hover:text-yellow-400 text-white">Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[350px] gap-0 p-4  ">
              {learnComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

    
       
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  bg-transparent hover:bg-transparent hover:text-yellow-400 text-white`}>
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
