import Reveal from '@/components/animations/reveal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/ui/avatar'
import React from 'react'

import SampleAvatar from '../../public/assets/sample/sampleAvtatar.png'

const Testimonials = () => {

  const testicontext = [
    {id: 1, comment: "The debt management system is excellent. It’s helped me pay off my debts faster and regain control of my finances", 
        name: 'William Kacuk', title: 'Luxury Car Sales'},
    {id: 2, comment: "The user-friendly interface makes managing finances a breeze. Best financial app out there!", 
        name: 'Jessica Pandaan', title: 'Fund Manager'},
    {id: 3, comment: "TThe investment tracker keeps me updated on my portfolio performance. It’s like having a personal financial advisor!", 
        name: 'Emily Sukun', title: 'Digital Marketer'},
    {id: 4, comment: "TThe investment tracker keeps me updated on my portfolio performance. It’s like having a personal financial advisor!", 
        name: 'Emily Sukun', title: 'Digital Marketer'},
  ]

  return (
    <div>
      <div className='bg-transparent grid gap-48 lg:py-10 lg:pb-24 md:py-44 py-24 text-white w-full'>

        <Reveal>
          <h2 className='w-full text-center text-xl'>
            Trusted by <span className='font-medium text-yellow-500'>15.78k+ </span> users for seamless crypto transactions</h2>
        </Reveal>
        <div className='max-w-8xl mx-auto w-full  '>
          <div className='flex gap-5 lg:flex-row px-5 flex-col items-center'>
            {testicontext.map( item => (
              <div key={item.id} className='w-full'>
                <Reveal delay={item.id * 0.8}>
                  <div className='w-full flex flex-col bg-muted-foreground/15 gap-4 p-8 rounded-xl'>
                      <div>
                        {item.comment}
                      </div>
                      <div className=' flex gap-4 items-center'>
                        <Avatar className='bg-blue-600'>
                          <AvatarImage src={SampleAvatar.src} alt=''/>
                          <AvatarFallback className='bg-blue-600'>
                            {item.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className=' flex flex-col '>
                          <h2>{item.name}</h2>
                          <h2 className='text-muted-foreground'>{item.title}</h2>
                        </div>
                      </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials