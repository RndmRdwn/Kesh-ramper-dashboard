import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const BalancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Balance</h3>
        <p className="text-sm text-muted-foreground">
        Monitor and adjust your financial balance, including transaction histories and reports.
        </p>
      </div>
      <Separator />
    </div>
  )
}

export default BalancePage