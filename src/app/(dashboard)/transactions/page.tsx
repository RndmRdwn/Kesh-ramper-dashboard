import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Transactions',
  description: 'Transactions Management.',
}; 

// type Props = {}

const TransactionsPage = () => {
  return (
    <div className='flex-1 space-y-4 p-2 lg:w-11/12 lg:mx-auto'>
      <div className='w-full h-full py-2'>
        <h2 className='font-medium'>Transactions</h2>
        <p className='text-sm text-muted-foreground'>Manage all transactions from here</p>
      </div>
    </div>
  )
}

export default TransactionsPage