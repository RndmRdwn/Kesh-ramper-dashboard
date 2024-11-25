import { AppIcon } from '@/constant/icons'
import React from 'react'

type Props = {}

const LogoBox = (props: Props) => {
  return (
    <div className='w-full flex gap-2 items-center border-4'>
            <AppIcon className='h-6 w-6'/>
            <h2 className='fon font-medium'>Keshflip</h2>
    </div>
  )
}

export default LogoBox