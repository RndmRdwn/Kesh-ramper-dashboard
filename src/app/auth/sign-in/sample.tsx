import { AuthTabs } from "@/components/authTabs"
import { GalleryVerticalEnd } from "lucide-react"
import LoginForm from "./components/loginForm"
import Image from "next/image"


export default function Sample() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 pt-12 md:p-10">
        <div className="flex justify-center gap-2 ">
          <Image src={'/assets/logo.svg'} alt="logo" width={120} height={120} />
        </div>
        <div className="flex flex-1 items-start lg:pt-12 justify-center">
          <div className="w-full max-w-lg">
            <AuthTabs />
          </div>
        </div>
      </div>
      <div className="relative hidden  lg:block p-8">
        
      <div className="w-full  bg-primary/80 rounded-lg h-full flex flex-col items-center justify-between">
        <div className="w-full h-[50%] flex justify-center items-center  rounded-lg  ">
              
              <div className="flex flex-col text-white text-5xl items-center gap-2 ">
                <h2 className="font-light">Experience</h2>
                <h2 className="font-semibold ">Seamless <span className="font-light">&</span> Secure</h2>
                <h2 className="font-light">Crypto Transactions</h2>
              </div>

        </div>
        <div className="w-[70%]  bg-gradient-to-tr from-primary/50 border-t border-primary/40 border-r pt-3 pl-3 pr-3 rounded-t-lg h-[90%] ">
          <div className="w-full flex justify-center items-center  bg-white rounded-t-lg h-full ">
                Widget Sample
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
