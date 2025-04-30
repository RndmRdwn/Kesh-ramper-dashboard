import Reveal4mTop from '@/components/animations/reveal4mTop'
import Header from '@/sections/header'
import React from 'react'
import PrivacyPolicyClientPage from './policy-content'

const TermsOfServicePage = () => {
  return (
    <div className=' h-screen w-full text-xl'>
      <Reveal4mTop>
          <div className='bg-primary px-8'>
            <Header isTry={false} />
          </div>
        </Reveal4mTop>

        <div className='p-5'>
        <PrivacyPolicyClientPage />
        </div>
    </div>
  )
}

export default TermsOfServicePage