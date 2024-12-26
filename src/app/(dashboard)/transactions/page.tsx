'use client'

import { transactionColumn } from '@/components/Tables/columns/transactionsColumn';
import { DataTable } from '@/components/Tables/Main-table';
import React from 'react'
import TransactionDemoData  from '@/lib/demoData/TransactionsData.json';



// type Props = {}

const TransactionsPage = () => {

  const TrxnData = TransactionDemoData;
  return (
    <div className='flex flex-col gap-2 p-2 '>
      <div className='w-full h-full py-2 '>
        <h2 className='font-medium'>Transactions</h2>
        <p className='text-sm text-muted-foreground'>Manage all transactions from here</p>
      </div>
      <div className='w-full overflow-auto p-2 '>
        <DataTable searchTitle='transactions by currency' columns={transactionColumn} title='Transactions' data={TrxnData} />
      </div>
    </div>
  )
}

export default TransactionsPage