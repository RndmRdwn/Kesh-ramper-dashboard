import React from 'react'
import AppStoreImage from '../../public/assets/sample/app-store-badge-og.jpg'
import GooglePlayImage from '../../public/assets/sample/image.png'
import Image from 'next/image'


const Banner = () => {

  const content = 'Download the kesflip App Today'
  const Desc = 'Experience Seamless and Secure Crypto Trading Anywhere with Keshflip -- Right From Your Pocket'
  return (
    <div className='max-w-7xl lg:py-24 py-12 px-5 mx-auto w-full'>
      <div className=' w-full border bg-[#1B013E] rounded-2xl lg:p-16 p-10'>
        <div className='grid lg:grid-cols-2 gap-3'>
          <div className='w-full flex flex-col gap-6'>
            <h2 className="bg-muted-foreground/15 w-fit shadow-lg uppercase font-medium tracking-wide text-sm p-2 px-4 rounded-full">
            🚀 <span className='text-white/80'>Get Started Today!</span> 
            </h2>
            <h2 className='font-semibold lg:text-6xl md:text-5xl text-4xl'>{content}</h2>
            <h2 className=' lg:text-lg text-muted/70 lg:pr-2'>{Desc}</h2>
            <div className='flex gap-4 items-center py-4'>
              <GooglePlay />
              <AppStore />
            </div>
          </div>
          <div className='w-full border'>
          </div>
        </div>
      </div>
    </div>
  )
}

const GooglePlay = () => {
  return (
    <div className='w-fit  flex gap-3 '>
      <Image src={GooglePlayImage} alt='' className='border border-white/70 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300' width={200} height={200} />
      {/* <div className='flex flex-col'>
        <h2 className='uppercase'>Get it on </h2>
        <h2 className='font-semibold text-lg'>Google Play</h2>
        </div> */}
    </div>
  )
}
const AppStore = () => {
  return (
    <div className='w-fit  '>
      <Image src={AppStoreImage} alt='' className='border border-white/70 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300' width={180} height={180} />
    </div>
  )
}

export default Banner