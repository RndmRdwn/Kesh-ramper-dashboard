import { Analytics01 } from '@/components/charts/Analytics01';
import { Analytics02 } from '@/components/charts/Analytics02';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Analytics',
  description: 'Analytics Management.',
}; 

const AnalyticsPage = () => {
  return (
    <div className='flex-1 space-y-4 p-2 '>
      <div className='w-full h-full py-2'>
        <h2 className='font-medium'>Analytics</h2>
        <p className='text-sm text-muted-foreground'>Access insights and reports on platform activity, financial performance, and usage trends.</p>
      </div>

      <div className='w-full grid lg:grid-cols-3 gap-6'>
      <Analytics01 />
      <Analytics02 />
      <Analytics02 />

      </div>
    </div>
  )
}

export default AnalyticsPage