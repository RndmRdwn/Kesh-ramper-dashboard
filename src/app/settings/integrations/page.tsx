import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const IntegrationsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Integrations</h3>
        <p className="text-sm text-muted-foreground">
          Manage third-party integrations, APIs, and external services connected to your platform.
        </p>
      </div>
      <Separator />
    </div>
  )
}

export default IntegrationsPage