import Navbar from "@/components/menu/navbar";
import { Separator } from "@/components/shadcn/ui/separator";
import type { Metadata } from "next";

// import TeamSwitcher from "./overview/components/team-switcher";
// import { MainNav } from "./overview/components/main-nav";
// import { Search } from "./overview/components/search";
// import { UserNav } from "./overview/components/user-nav";


export const metadata: Metadata = {
  title: "Keshflip Ramp",
  description: "Created by Keshflip Team",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <div className="lg:w-10/12 lg:mx-auto py-3">
          <Navbar />
        </div>
        <Separator />
        <main className="py-4 lg:w-10/12 lg:mx-auto ">
            {children}
        </main>
    </div>
  );
}
