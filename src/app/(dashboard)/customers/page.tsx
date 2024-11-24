import { Metadata } from 'next';
import React from 'react'

// type Props = {}
export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customers Management.',
}; 

const CustomersPage = () => {
  return (
    <div className='flex-1 space-y-4 p-2'>
      <div className='w-full h-full py-2'>
        <h2 className='font-medium'>Customers</h2>
        <p className='text-sm text-muted-foreground'>Manage all customers from here</p>
      </div>
    </div>
  )
}

export default CustomersPage