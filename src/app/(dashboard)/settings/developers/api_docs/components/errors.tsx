import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'

type Props = {}

const APIErrors = (props: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>API Errors</h2>
      <Separator />
    </div>
  )
}

export default APIErrors