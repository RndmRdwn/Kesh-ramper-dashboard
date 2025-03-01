'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import Picture1 from '../../public/assets/sample/image01.svg'
import Picture2 from '../../public/assets/sample/image02.svg'
import Picture3 from '../../public/assets/sample/image03.svg'
// import Picture4 from '../../public/assets/sample/image04.svg'
import Picture5 from '../../public/assets/sample/image05.svg'
import Picture6 from '../../public/assets/sample/image06.svg'
import Picture7 from '../../public/assets/sample/image07.svg'
import Lenis from 'lenis';
import Image from 'next/image';
import Fade from '@/components/animations/fade';
import TypingAnimation from '@/components/animations/TypingAnimation';

const Integration = () => {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className=' w-full'>
      <div className='py-12 w-full flex flex-col gap-3 items-center justify-center'>
        <div className='max-w-7xl mx-auto w-full flex flex-col gap-8 items-center justify-center'>
          <h2 className="bg-muted-foreground/15 w-fit  shadow-lg uppercase text-white/60 font-medium tracking-wide text-sm p-1 px-4 rounded-full">
            <TypingAnimation color='white' content={'Extensive Integration'} size='medium' delay={0.098} speed={2}/>
          </h2>
            <h2 className='max-w-4xl mx-auto w-full text-5xl text-center font-semibold'>
            <TypingAnimation color='white' content={'Integrated with Trusted Payment Platforms'} size='xlarge' delay={0.068} speed={2}/>
                
            </h2>

          {/* <AnimateGradientText content='Integrated with Trusted Payment Platforms' duration={0.9} size='normal' delay={1} /> */}

          <Fade>
          <p className='max-w-3xl mx-auto w-full text-lg text-center font-normal text-muted-foreground'>
            Enjoy seamless transactions with Keshflip, integrated with trusted platforms for your
            convenience and financial efficiency.
          </p>
          </Fade>
        </div>

        <main className="max-w-8xl px-5 mx-auto overflow-hidden w-full">
          <div className='h-[10vh] overflow-hidden w-full'/>
          <div ref={container} className='w-full flex flex-col gap-8'>
            <SlideLeft src={Picture1} direction={'left'} left={"0%"} progress={scrollYProgress}/>
            <SlideRight src={Picture2} direction={'right'} left={"0%"} progress={scrollYProgress}/>
            {/* <Slide src={Picture3} direction={'left'}  left={"0%"} progress={scrollYProgress}/> */}
          </div>
          <div className='h-[10vh]' />
        </main>

      </div>
    </div>
  )
}
const SlideLeft = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative gap-8 grid lg:grid-cols-6 grid-cols-3 w-full whitespace-nowrap">
      <div className='h-full p-3 flex justify-center items-center bg-sky-200 rounded-2xl w-full'>
        <span className="relative h-[40px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
         <Image style={{objectFit: "fill"}} src={Picture1} alt="image" fill/>
        </span>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-gray-100 rounded-2xl w-full'>
        <span className="relative h-[50px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture3} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-teal-400 rounded-2xl w-full'>
        <Image src={Picture2} alt="image" height={100} width={100}/>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-[#ff6b6b] rounded-2xl w-full'>
        <Image src={Picture5} alt="image" height={100} width={100}/>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-green-300 rounded-2xl w-full'>
        <span className="relative h-[35px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture6} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
       <div className='h-full p-3 flex justify-center items-center bg-gray-500 rounded-2xl w-full'>
        <span className="relative h-[25px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture7} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
    </motion.div>
  )
}
const SlideRight = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative gap-8 grid lg:grid-cols-6 grid-cols-3 w-full whitespace-nowrap">
      <div className='h-full p-3 flex justify-center items-center bg-gray-500 rounded-2xl w-full'>
        <span className="relative h-[25px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture7} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-green-300 rounded-2xl w-full'>
        <span className="relative h-[35px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture6} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-[#ff6b6b] rounded-2xl w-full'>
        <Image src={Picture5} alt="image" height={100} width={100}/>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-teal-400 rounded-2xl w-full'>
        <Image src={Picture2} alt="image" height={100} width={100}/>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-gray-100 rounded-2xl w-full'>
        <span className="relative h-[50px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
          <Image src={Picture3} alt="image" style={{objectFit: "fill"}} fill/>
        </span>
      </div>
      <div className='h-full p-3 flex justify-center items-center bg-sky-200 rounded-2xl w-full'>
        <span className="relative h-[40px] lg:aspect-[calc(4*3+9)/3] aspect-[calc(4*3+1)/2] rounded-full overflow-hidden">
         <Image style={{objectFit: "fill"}} src={Picture1} alt="image" fill/>
        </span>
      </div>
    </motion.div>
  )
}

// const Phrase = ({src}) => {

//   return (
//     <div className={'px-5 flex gap-5 items-center'}>
//       <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
//         <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
//       </span>
//     </div>
//   )
// }

export default Integration