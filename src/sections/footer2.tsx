import Image from 'next/image';
import React from 'react'
import LOG02 from '../../public/assets/logo/LOG02.png'
import Fade from '@/components/animations/fade';
import Reveal from '@/components/animations/reveal';
import { SocailsItems } from '@/app/contact/page';
import GPlay from '../../public/assets/sample/g-play.svg'
import AStore from '../../public/assets/sample/a-store.svg'


const Footer2 = () => {

  const QuickLinks = [
    {id: 1, title: 'Features', 
      items: [
        {id: 1, name: 'Buy & Sell Crypto'},
        {id: 2, name: 'Payments'},
        {id: 3, name: 'Send Money'},
      ]
    },
    {id: 2, title: 'Company', 
      items: [
        {id: 1, name: 'About Us'},
        {id: 3, name: 'Blog'},
        {id: 4, name: 'Contact'},
      ]
    },
    {id: 3, title: 'Support', 
      items: [
        {id: 1, name: 'Help Center'},
        {id: 2, name: 'Terms and Conditions'},
        {id: 3, name: 'Privacy Policy'},
      ]
    },
  ]


  return (
    <div className='h-full w-full flex flex-col '>
    <div className='bg-[#140029] flex flex-col gap-8 lg:px-0 px-5 w-full py-8 '>
      <div className='max-w-7xl py-5 mx-auto w-full '>
        <div className='w-full flex flex-wrap justify-between items-start'>
          <div className='flex flex-col gap-6 text-white '>
            <Fade>
              <Image src={LOG02} alt='' width={170} height={170} />
            </Fade>
            <Reveal>
              <h2 className='max-w-lg text-muted-foreground mx-auto w-full'>Keshflip is a digital exchange platform that facilitates the secure and seamless exchange of fiat and cryptocurrencies.</h2>
            </Reveal>
            
            <div className='flex gap-6'>
              {SocailsItems.map( item => (
                  <div key={item.id} className='flex hover:text-white cursor-pointer gap-3 items-center '>
                      <Reveal delay={0.5 + item.id}>
                          <Image src={item.icon} alt={item.name} width={30} height={30} className='' />
                      </Reveal>
                  </div>
              ))}
            </div>
          </div>
          <div className='lg:flex grid grid-cols-2  gap-16 lg:pt-0 pt-8 '>
            {QuickLinks.map( item => (
              <div key={item.id} className='flex flex-col gap-4'>
                <Fade>
                  <h2 className='font-semibold text-yellow-600'>{item.title}</h2>
                </Fade>
                <div className='flex flex-col gap-1'>
                  {item.items.map(it => (
                    <div key={it.id}>
                      <Reveal>
                        <a href={it.name == 'Contact' ?  '/contact' : it.name == 'About Us' ? '/about' : '#'} className='hover:text-white duration-200 ease-in-out text-muted-foreground'>{it.name}</a>
                      </Reveal>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className='w-full bg-gradient-to-l to-muted-foreground/0 via-muted/5 from-muted-foreground/0 p-[1px] mt-2' />
      </div>
      <div className='w-full  '>
        <div className='w-full text-muted-foreground max-w-7xl mx-auto flex lg:flex-row flex-col-reverse gap-4 lg:justify-between justify-center items-center'>
            <Fade>
              <h2>© 2024 Keshflip. All rights reserved.</h2>
            </Fade>
            <div className="flex gap-5">
                <Reveal delay={3.5}>
                  <Image src={GPlay} alt="image" className='hover:cursor-pointer' width={130} height={130} />
                </Reveal>
                <Reveal delay={3.8}>
                  <Image src={AStore} alt="image" className='hover:cursor-pointer' width={120} height={120} />
                </Reveal>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer2