import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Assets',
  description: 'ASsets Management.',
}; 

const AssetsPage = () => {
  return (
    <div className='flex-1 space-y-4 p-2 '>
      <div className='w-full h-full py-2'>
        <h2 className='font-medium'>Assets</h2>
        <p className='text-sm text-muted-foreground'>Track and manage all assets, including currencies, payment methods, and balances.</p>
      </div>
    </div>
  )
}

export default AssetsPage