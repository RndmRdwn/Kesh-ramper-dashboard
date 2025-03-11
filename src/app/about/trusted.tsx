import Reveal from '@/components/animations/reveal'
import TypingAnimation from '@/components/animations/TypingAnimation'
import React from 'react'


const Trusted = () => {
    
    const desc = `Explore our key metrics that reflect our platform's growth and reliability.`
    
  return (
    <div className='w-full lg:py-24 lg:p-0 p-5 flex flex-col justify-center items-center gap-6'>
        
        <TypingAnimation color='white'  content={'Trusted by Thousands Worldwide'} size='xxxlarge' delay={0.058} speed={1.5}/>
        <Reveal delay={1}>
            <h2 className=' lg:w-[480px] w-full px-5 lg:px-0 md:px-0 text-center'>{desc}</h2>
        </Reveal>
        <div className='w-full bg-gradient-to-l to-muted-foreground/5 via-muted/10 from-muted-foreground/5 p-[1px] mt-8' />


        <div className='py-8 grid lg:grid-cols-3 md:grid-cols-3 lg:gap-3 gap-9 w-full '>
                <StatsValue id={1} border label={'Verified Users'} value={'400k+'}/>
                <StatsValue id={2} border label={'Tradeable Assets'} value={'30+'}/>
                <StatsValue id={3} border={false} label={'Daily Trades'} value={'20K+'}/>
        </div>
    </div>
  )
}

const StatsValue = ({label, border, id, value} : {label : string, id : number, border: boolean, value: string}) => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center h-full lg:gap-5 w-full '>
            <Reveal width='100%' delay={1.1 * id}>
                <div className='flex flex-col items-center justify-center gap-5 w-full '>
                    <h2 className='text-5xl font-semibold'>{value}</h2>
                    <h2 className='text-md text-muted/70 font-medium'>{label}</h2>
                </div>
            </Reveal>

            {border && 
                <div className='lg:h-full md:h-full h-fit lg:w-fit md:w-fit w-full bg-gradient-to-b from-muted/30 p-[0.5px] mt-8' />
            }
        </div>
    )
}

export default Trusted