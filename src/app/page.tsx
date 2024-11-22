import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   
   <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center grid gap-3">
        <h2 className="text-xl">Welcome to Keshflip Ramp</h2>
        <Link href={'/auth/sign-in'}>
          <Button className="px-12" size="lg">Login</Button>
        </Link>
      </div>
   </div>
  );
}
