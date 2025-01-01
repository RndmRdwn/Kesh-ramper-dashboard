import React from 'react'

type Props = {}

const FirstWidget = (props: Props) => {
  return (
    <div className='w-[450px] h-[650px] shadow-lg rounded-3xl p-2 border-primary bg-gradient-to-tr from-[#6600CC] via-[#9046DA] to-[#6600CC]' >
        <div className='w-full h-full border rounded-3xl p-8 bg-white' >
            <h2 className='text-sm font-semibold'>Widget</h2>
        </div>
    </div>
  )
}

export default FirstWidget