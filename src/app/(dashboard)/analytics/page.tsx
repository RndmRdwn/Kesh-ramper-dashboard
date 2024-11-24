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
    </div>
  )
}

export default AnalyticsPage