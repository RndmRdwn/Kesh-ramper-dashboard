'use client'

import { CodeEditor } from '@/components/codeEditor'
import { Separator } from '@/components/shadcn/ui/separator'
import React, { useState } from 'react'


const Endpoints = () => {
  
  const [ postTranscationCode ] = useState(`
   curl -X POST https://api.keshflip-pay.com/v1/transactions \ 
   -H "Authorization: Bearer YOUR_API_KEY" \ 
   -H "Content-Type: application/json" \ 
   -d '{
        "amount": 100.00,
        "currency": "USD",
        "crypto": "BTC",
        "customer_id": "12345" 
        }'
    `);
  const [ postUsersCode ] = useState(`
   curl -X GET https://api.keshflip-pay.com/v1/users/cust_12345 \ 
   -H "Authorization: Bearer sk_test_12345abcdef67890"
    `);

  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>Endpoints</h2>
      <Separator />
        <div className='w-full grid gap-2 py-4'>
          <p className='font-normal'>Transactions</p>
          <div className='flex justify-between gap-3'>
            <div className='w-fit  grid gap-1 h-fit rounded-md p-3'>
              <EndPointSummary desc='Retrieve a list of transactions' point='/transactions' title='GET' />
              <EndPointSummary desc='Fetch details of a specific transaction' point='/transactions/{id}' title='GET' />
              <EndPointSummary desc='Create a new transaction' point='/transactions' title='POST' />
            </div>
            <div className='w-fit'>
            <CodeEditor height={'250px'} width={'700px'} value={postTranscationCode}  onChange={() => {}} />
            </div>

          </div>
        </div>
      <Separator />
        <div className='w-full grid gap-2 py-4'>
          <p className='font-normal'>Users</p>
          <div className='flex justify-between gap-3'>
            <div className='w-fit  grid gap-0 h-fit rounded-md p-3'>
              <EndPointSummary desc='Retrieve a list of users' point='/users' title='GET' />
              <EndPointSummary desc='Fetch details of a specific user' point='/users/{id}' title='GET' />
              <EndPointSummary desc='Create a new user' point='/users' title='POST' />
            </div>
            <div className='w-fit'>
              <CodeEditor height={'100px'} width={'700px'} value={postUsersCode}  onChange={() => {}} />
            </div>

          </div>
        </div>
    </div>
  )
}

type EndPointSummaryProps = {
  title: string,
  point: string,
  desc: string,

}
const EndPointSummary = ({title, point, desc }: EndPointSummaryProps) => {
  return (
    <div className='flex gap-5'>
      <p className='w-20 text-sm font-medium uppercase'>{title}</p>
      <p className='text-sm w-40 text-muted-foreground'>{point}</p>
      <p className=' text-sm'>{desc}</p>
    </div>
  )
}

export default Endpoints