'use client'

import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'
import TeamsTable from './teams-table'
import NewMember from '@/components/modals/NewMember'
import { useState } from 'react'


const TeamsPage = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="space-y-6">
      <div className='flex justify-between items-end'>
        <div>
          <h3 className="text-lg font-medium">Teams Management</h3>
          <p className="text-sm text-muted-foreground">
              Configure team roles, permissions, and manage users within your organization.
          </p>
        </div>
          <NewMember onClose={() => setIsOpen(!isOpen)} open={isOpen} />
      </div>
      <Separator />
      <div>
        <TeamsTable />
      </div>
    </div>
  )
}

export default TeamsPage