import React from 'react'
import Customization from './customization'
import { Toaster } from 'sonner'


const ConfigureWidgetPage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Toaster richColors position='top-center'/>
      
      <Customization />
     
    </div>
  )
}

export default ConfigureWidgetPage