import Image from 'next/image';
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import LOG02 from '../../public/assets/logo/LOG02.png'

const Footer = () => {

  const QuickLinks = [
    {id: 1, title: 'Features', 
      items: [
        {id: 1, name: 'Buy & Sell Crypto'},
        {id: 2, name: 'Non-Custodial Wallet'},
        {id: 3, name: 'Keshflip Pay'},
        {id: 4, name: 'Invest'},
      ]
    },
    {id: 2, title: 'Company', 
      items: [
        {id: 1, name: 'About Us'},
        {id: 2, name: 'Careers'},
        {id: 3, name: 'Blog'},
        {id: 4, name: 'Contact'},
      ]
    },
    {id: 3, title: 'Support', 
      items: [
        {id: 1, name: 'Help Center'},
        {id: 2, name: 'Terms and Conditions'},
        {id: 3, name: 'Privacy Policy'},
        {id: 4, name: 'System Status'},
      ]
    },
  ]

  const socials = [
    { id: 1, name: 'Twitter', icon: <BsTwitterX size={20}/>},
    { id: 2, name: 'Instagram', icon: <IoLogoInstagram size={20}/>},
    { id: 3, name: 'Youtube', icon: <FaYoutube size={20}/>},
  ]

  return (
    <div className='h-full w-full flex flex-col '>
    <div className='bg-[#1B013E] w-full py-8 px-8'>
      <div className='max-w-7xl py-5 mx-auto w-full '>
        <div className='w-full flex flex-wrap justify-between items-center'>
          <div className='flex flex-col gap-6 text-white'>
            <Image src={LOG02} alt='' width={190} height={190} />
            <h2 className='max-w-lg text-muted-foreground mx-auto w-full'>Keshflip is a digital exchange platform that facilitates the secure and seamless exchange of fiat and cryptocurrencies.</h2>
          </div>
          <div className='lg:flex grid grid-cols-2  gap-16 lg:pt-0 pt-8'>
            {QuickLinks.map( item => (
              <div key={item.id} className='flex flex-col gap-4'>
                <h2 className='font-semibold text-yellow-600'>{item.title}</h2>
                <div className='flex flex-col gap-1'>
                  {item.items.map(it => (
                    <div key={it.id}>
                      <a href='#' className='hover:text-white duration-200 ease-in-out text-muted-foreground'>{it.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className='w-full p-8 bg-[#080C12]'>
        <div className='w-full text-muted-foreground max-w-7xl mx-auto flex lg:flex-row flex-col-reverse gap-4 lg:justify-between justify-center items-center'>
            <h2>Copyright Keshflip. All rights reserved.</h2>
            <div className='flex gap-6'>
              {socials.map( item => (
                  <div key={item.id} className='flex hover:text-white cursor-pointer gap-3 items-center'>
                      <span>{item.icon}</span>
                      <h2 className='font-medium'>{item.name}</h2>
                  </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer