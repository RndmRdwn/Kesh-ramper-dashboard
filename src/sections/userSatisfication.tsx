import Reveal from '@/components/animations/reveal'
import TypingAnimation from '@/components/animations/TypingAnimation'
import { Star } from 'lucide-react'
import React from 'react'

const UserStatisfaction = () => {

  const stats = [
    {id: 1, value: '$60M', label: 'Transactions Volume'},
    {id: 2, value: '$270k', label: 'Revenues'},
    {id: 3, value: '2k+', label: 'Daily Users'},
    {id: 4, value: '30k+', label: 'Clients'},
  ]

  return (
    <div className=' w-full px-5'>
      <div className='max-w-7xl mx-auto w-full py-12 '>
      <div className='w-full flex flex-col gap-5'>
        <h2 className="bg-muted-foreground/15 w-fit  shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-2 px-4 rounded-full">
          <TypingAnimation color='gray' content={'User Satisfaction'} size='medium' delay={0.118} speed={1}/>
        </h2>
        <div>

          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4'>
          <TypingAnimation color='white' content={'Here are some key metrics we are proudly achieved since our launch.'} size='semixxlarge' delay={0.058} speed={1.5}/>
            <div className='flex flex-col gap-4'>
              <Reveal delay={0.4}>
                <div className='border w-full items-center p-8 flex gap-4 rounded-xl'>
                  <h2 className='font-medium text-6xl flex items-center gap-2 bg-gradient-to-br from-primary/60 to-white text-transparent bg-clip-text'>
                    15K+</h2>
                  <h2>Downloads on all platforms</h2>
                </div>
              </Reveal>
              <Reveal delay={1.2}>
              <div className='border w-full p-8 flex items-center gap-4 rounded-xl'>
                <h2 className='font-medium text-6xl flex items-center gap-2 bg-gradient-to-br from-primary/60 to-white text-transparent bg-clip-text'>
                  4.9 <Star size={32}/></h2>
                <h2>Ratings out of 5.0</h2>
              </div>
              </Reveal>
            </div>
          </div>
        </div>
        
        <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
          {stats.map( item => (
            <div key={item.id} className='w-full '>
              <Reveal delay={item.id}>
                <div  className='w-full border p-4 rounded-lg flex flex-col items-center justify-center '>
                    <h2 className='font-semibold text-4xl'>{item.value}</h2>
                    <h2 className='text-muted-foreground'>{item.label}</h2>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
          
        <Reveal delay={1.9}>
          <h2 className='w-full text-muted-foreground text-center py-8'>
            Trusted by thousands, Keshflip offers seamless transaction and personalized financial solutions.
          </h2>
        </Reveal>
      </div>
        
      </div>
    </div>
  )
}

export default UserStatisfaction