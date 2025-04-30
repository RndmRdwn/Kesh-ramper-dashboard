import React from 'react'
import AmlKycPolicyClientPage from './policy-content'
import Reveal4mTop from '@/components/animations/reveal4mTop'
import Header from '@/sections/header'

const AmlKycPolicyPage = () => {
  return (
    <div className=' h-screen w-full text-xl'>
        <Reveal4mTop>
          <div className='bg-primary px-8'>
            <Header isTry={false} />
          </div>
        </Reveal4mTop>

      <div className='p-5'>
        <AmlKycPolicyClientPage />
      </div>
    </div>
  )
}

export default AmlKycPolicyPage