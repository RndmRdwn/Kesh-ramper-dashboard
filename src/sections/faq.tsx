import TypingAnimation from '@/components/animations/TypingAnimation'
import CustomAccordion from '@/components/shared/CustomAccordion'
import React from 'react'

const FAQ = () => {
  return (
    <div className=' w-full max-w-7xl mx-auto px-5 py-8'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h2 className="bg-muted-foreground/15 w-fit  shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-1 px-4 rounded-full">
          <TypingAnimation color='gray' content={'We have you covered'} size='medium' delay={0.118} speed={1}/>

        </h2>
        <TypingAnimation color='white' content={'Frequently Asked Questions'} size='xlarge' delay={0.068} speed={2}/>

        <div className='py-8 max-w-5xl w-full mx-auto'>
          <CustomAccordion />
        </div>
      </div>
    </div>
  )
}

export default FAQ