import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const TeamsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Teams Management</h3>
        <p className="text-sm text-muted-foreground">
            Configure team roles, permissions, and manage users within your organization.
        </p>
      </div>
      <Separator />
    </div>
  )
}

export default TeamsPage