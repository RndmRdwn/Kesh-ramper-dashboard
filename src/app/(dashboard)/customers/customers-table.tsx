'use client'

import { DataTable } from '@/components/Tables/Main-table'
import React from 'react'
import { CustomersColumn } from '@/components/Tables/columns/customersColumn'
import { CustomersType } from '@/constant/types/models'
import CustomerDemoData  from '@/lib/demoData/CustomersData.json'

const CustomersTable = () => {


  const customerData: CustomersType[] = CustomerDemoData;
  return (
    <div className='w-full overflow-auto px-1'>
        <DataTable searchTitle='customers' columns={CustomersColumn} title='Customers' data={customerData} />
    </div>
  )
}

export default CustomersTable