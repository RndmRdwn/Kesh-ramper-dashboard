import Header from '@/sections/header'
import React from 'react'

import AboutInfo from './about'
import MissionSection from './mission-section'
import Trusted from './trusted'
import Banner from '@/sections/banner'
import Footer2 from '@/sections/footer2'


const AboutPage = () => {
  return (
    <div className='bg-[#6600CC] text-white w-full h-full'>
        <div className=' max-w-7xl mx-auto w-full'>
            <div className='lg:h-screen h-full w-full'>
                <Header isTry={false}/>
                <AboutInfo />
            </div>

            <MissionSection />
            <Trusted />
            <Banner contain={false} />
        </div>
            <Footer2 />
    </div>
  )
}

export default AboutPage