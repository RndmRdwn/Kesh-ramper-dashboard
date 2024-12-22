import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const APIErrors = () => {
  const authErrors = [
    { id: 1, name: '401 Unauthorized', 
      detail: 'Ensure you are using a valid API key.',  
      message: '"The API key provided is invalid."',},
    { id: 2, name: '401 Unauthorized', 
      detail: 'Include the Authorization header.',  
      message: '"Authorization header is required."',},
    { id: 3, name: '403 Forbidden', 
      detail: "Verify your API key's scope.",  
      message: '"You do not have permission to access this resource."',},
  ]
  return (
    <div>
      <h2 className='text-xl font-semibold pb-2'>API Errors</h2>
      <Separator />
      <div className='py-2'>
          <h2>Common Errors</h2>
          <div className='p-3'>
            <div className='w-full border grid grid-cols-8 rounded-md p-3'>
              <h2 className='font-medium text-sm col-span-2'>HTTP Status</h2>
              <h2 className='font-medium text-sm col-span-2'>Error Code</h2>
              <h2 className='font-medium text-sm col-span-2'>Message</h2>
              <h2 className='font-medium text-sm col-span-2'>Details</h2>
            </div>
            <div>
              {authErrors.map( item => (
                <div key={item.id} className='w-full border grid grid-cols-8 rounded-md p-3'>
                  <h2 className='font-medium text-sm col-span-2'>{item.name}</h2>
                  <h2 className='font-medium text-sm col-span-2'>Error Code</h2>
                  <h2 className='font-medium text-sm col-span-2'>Message</h2>
                  <h2 className='font-medium text-sm col-span-2'>Details</h2>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default APIErrors