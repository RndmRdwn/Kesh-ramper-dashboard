import RegisterForm from "./components/registerForm"
import Image from "next/image"
import AuthImage  from '../../../../public/assets/kf-auth.svg'

export default function Sample() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 lg:p-6 md:p-10 justify-center items-center">
        <div className="flex justify-center gap-2 py-8 ">
          <Image src={'/assets/logo.svg'} alt="logo" width={120} height={120} />
        </div>
        <div className="flex  h-fit lg:px-0 px-8 s w-full  items-center  justify-center">
          <div className="w-full max-w-lg  ">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative hidden  lg:block p-8 ">
        
        <div className="w-full h-full flex flex-col items-center justify-between">
        
            <Image src={AuthImage} alt="expImage"  width={640} height={600}/>
        </div>
  
        </div>
    </div>
  )
}
