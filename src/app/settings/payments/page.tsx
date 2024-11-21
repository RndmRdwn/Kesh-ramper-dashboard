import { Separator } from '@/components/shadcn/ui/separator'
import React from 'react'


const PaymentsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Payment Method</h3>
        <p className="text-sm text-muted-foreground">
          Set up and manage payment methods, billing options, and payment-related settings.
        </p>
      </div>
      <Separator />

    </div>
  )
}

export default PaymentsPage