import TypingAnimation from '@/components/animations/TypingAnimation'
import { Button } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { Textarea } from '@/components/shadcn/ui/textarea'
import Header from '@/sections/header'
import React from 'react'

import Location from '../../../public/assets/sample/location.svg'
import Mail from '../../../public/assets/sample/mail.svg'
import Phone from '../../../public/assets/sample/phone.svg'

import FaceB from '../../../public/assets/socials/fb.svg'
import Insta from '../../../public/assets/socials/insta.svg'
import LinkedIn from '../../../public/assets/socials/ln.svg'
import TwitterX from '../../../public/assets/socials/x.svg'
import Image, { StaticImageData } from 'next/image'
import Banner from '@/sections/banner'
import Footer2 from '@/sections/footer2'

const info = [
    {id: 1, icon: Location, name: 'Head Quarter', value: 'Makka Almukarama Road, 505 Suites, Adani Towers 2, Hodan, Mogadishu, Somalia'},
    {id: 2, icon: Phone, name: 'Phone', value: '061 621 1333'},
    {id: 3, icon: Mail, name: 'Email', value: 'info@keshflip.com'},
]

export const SocailsItems = [
    {id: 1, icon: FaceB, name: 'facebook'},
    {id: 2, icon: TwitterX, name: 'Twitter'},
    {id: 3, icon: LinkedIn, name: 'Linkedin'},
    {id: 4, icon: Insta, name: 'Instagram'},
]
const ContactPage = () => {



  return (
    <div className='bg-[#6600CC] text-white w-full h-full'>
        <div className=' max-w-7xl mx-auto w-full pb-8'>
            <div className='  h-full w-full'>
                <Header isTry={false}/>

                <div className='flex lg:px-0 px-5 flex-col gap-14'>
                    <div className='w-full flex flex-col justify-center items-center pt-24 pb-12'>
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <h2 className="bg-white/15 w-fit  uppercase text-white font-medium tracking-wide text-sm p-2 px-6 rounded-full">
                                <TypingAnimation color='white' content={'💬 We’re Here to Help'} size='medium' delay={0.098} speed={2}/>
                            </h2>
                            <div className='text-center'>
                                <TypingAnimation color='white' content={'Contact Our Support Team'} size='xlarge' delay={0.058} speed={1.5}/>
                            </div>
                            <div className='text-base max-w-lg mx-auto w-full text-center  '>
                                Reach out to us for any questions, assistance, or feedback. We’re just a message away!
                            </div>
                        </div>
                        
                        <div className='flex justify-center items-center gap-6 py-8'>
                            {SocailsItems.map( item => (
                                <div key={item.id}>
                                    <Image src={item.icon} alt={item.name} width={30} height={30} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full bg-black/10 rounded-lg flex flex-col gap-8 lg:p-16 p-8'>
                        <div className='w-full flex flex-col lg:grid grid-cols-2 gap-8 '>
                            <div className='flex flex-col gap-2'>
                                <h2>Full Name</h2>
                                <Input className='border-muted/30 placeholder:text-white/50 p-6' placeholder='Enter your full name' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2>Email Address</h2>
                                <Input className='border-muted/30 placeholder:text-white/50 p-6' placeholder='Enter your email address' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2>Mobile Number</h2>
                                <Input className='border-muted/30 placeholder:text-white/50 p-6' placeholder='Enter your mobile number' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2>Subject</h2>
                                <Input className='border-muted/30 placeholder:text-white/50 p-6' placeholder='Enter your mobile number' />
                            </div>
                            <div className='flex flex-col col-span-2 gap-2'>
                                <h2>Message</h2>
                                <Textarea className='border-muted/30 placeholder:text-white/50 p-6 h-56' placeholder='Write your message here' />
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <Button className='w-72 py-6 text-base font-semibold hover:bg-gradient-to-br from-[#6600CC] to-[#6600CC]/75 hover:shadow-lg hover:text-white bg-white text-primary'>Send Message</Button>
                        </div>
                        
                    </div>
                    
                    <div className='w-full bg-black/10  rounded-lg flex flex-col lg:gap-8 lg:px-16 px-5 py-12'>
                        <div className='w-full grid lg:grid-cols-3 gap-4'>
                            {info.map( item => (
                                <div key={item.id}>
                                    <InfoStats idx={item.id} border={item.id == info.length  ? false : true} label={item.name} value={item.value} icon={item.icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            
                <Banner contain={false}/>
            </div>
        </div>
                <Footer2 />
    </div>
  )
}

const InfoStats = ({label, border, idx, icon, value} : {label : string, idx: number, icon : StaticImageData, border: boolean, value: string}) => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-between h-full items-center gap-5 w-full '>
            <div className={`flex flex-col gap-2 w-full ${idx < 2 ? '' : 'lg:px-4'}`}>
                <span>
                    <Image src={icon} alt={label} width={25} height={25}/>
                </span>
                <h2 className='font-medium'>{label}</h2>
                <h2 className='text-sm text-muted/75'>{value}</h2>
            </div>
            {border && 
                <div className='lg:h-full md:h-full h-fit lg:w-fit md:w-fit w-full bg-gradient-to-b from-muted/30 p-[0.5px] lg:mt-8' />
            }
        </div>
    )
}

export default ContactPage