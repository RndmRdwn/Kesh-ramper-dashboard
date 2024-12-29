import { AuthTabs } from "@/components/authTabs"
import { GalleryVerticalEnd } from "lucide-react"
import LoginForm from "./components/loginForm"
import Image from "next/image"
import AuthImage  from '../../../../public/assets/kf-auth.svg'


export default function Sample() {
  return (
      <div className="flex flex-col gap-4 lg:p-6 md:p-10 justify-center items-center">
        <div className="flex justify-center gap-2 py-8 ">
          <Image src={'/assets/logo.svg'} alt="logo" width={120} height={120} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Login to your account</h2>
        </div>
        <div className="flex  h-fit lg:px-0 px-8 s w-full  items-center  justify-center">
          <div className="w-full max-w-lg  ">
            <LoginForm />
          </div>
        </div>
      </div>
  )
}
