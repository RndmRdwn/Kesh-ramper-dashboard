import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import { AppearanceForm } from './displayForm'
import { PreviewWidget } from '@/components/widget/preview-widget'
import PayWidget from '@/components/widget/pay-widget'


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
      <div className='flex gap-3 py-4 w-full justify-end'>
        <PreviewWidget />
        <PayWidget />
      </div>
      <AppearanceForm />
     
    </div>
  )
}

export default ConfigureWidgetPage