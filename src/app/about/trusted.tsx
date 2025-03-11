import React from 'react'


const Trusted = () => {
    
    const desc = `Explore our key metrics that reflect our platform's growth and reliability.`
    
  return (
    <div className='w-full lg:py-24 lg:p-0 p-5 flex flex-col justify-center items-center gap-6'>
        <h2 className='lg:text-4xl text-2xl font-bold text-center'>Trusted by Thousands Worldwide</h2>
        <h2 className=' lg:w-[480px] w-full px-5 lg:px-0 md:px-0 text-center'>{desc}</h2>
        <div className='w-full bg-gradient-to-l to-muted-foreground/5 via-muted/10 from-muted-foreground/5 p-[1px] mt-8' />

        <div className='py-8 grid lg:grid-cols-3 md:grid-cols-3 lg:gap-3 gap-9 w-full '>
            <StatsValue border label={'Verified Users'} value={'400k+'}/>
            <StatsValue border label={'Tradeable Assets'} value={'30+'}/>
            <StatsValue border={false} label={'Daily Trades'} value={'20K+'}/>
        </div>
    </div>
  )
}

const StatsValue = ({label, border, value} : {label : string, border: boolean, value: string}) => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center lg:gap-5 w-full '>
            <div className='flex flex-col items-center justify-center gap-5 w-full '>
                <h2 className='text-5xl font-semibold'>{value}</h2>
                <h2 className='text-md text-muted/70 font-medium'>{label}</h2>
            </div>
            {border && 
                <div className='lg:h-full md:h-full h-fit lg:w-fit md:w-fit w-full bg-gradient-to-b from-muted/30 p-[0.5px] mt-8' />
            }
        </div>
    )
}

export default Trusted