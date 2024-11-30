import React from 'react'
import { Separator } from '@/components/shadcn/ui/separator'

type Props = {}

const RateLimits = (props: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>Rate Limits</h2>
      <Separator />
    </div>
  )
}

export default RateLimits