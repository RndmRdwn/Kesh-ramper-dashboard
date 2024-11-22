import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const DevelopersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Developer Tools</h3>
        <p className="text-sm text-muted-foreground">
          Access developer tools, API settings, and configuration for custom development and technical setup.
        </p>
      </div>
      <Separator />


    </div>
  )
}

export default DevelopersPage