import Navbar from "@/components/menu/navbar";
import { Separator } from "@/components/shadcn/ui/separator";
import type { Metadata } from "next";

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
