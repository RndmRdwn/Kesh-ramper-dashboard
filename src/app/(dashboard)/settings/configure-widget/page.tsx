import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import Customization from './customization'


const ConfigureWidgetPage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='grid gap-1'>
        <h3 className="text-lg font-medium">Widget Customization</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the widget. 
        </p>
      </div>
      <Separator />
      <Customization />
     
    </div>
  )
}

export default ConfigureWidgetPage