import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'

type Props = {}

const Endpoints = (props: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>Endpoints</h2>
      <Separator />
      <div className='p-4'>
        <h2>ExEndpoints</h2>
      </div>
    </div>
  )
}

export default Endpoints