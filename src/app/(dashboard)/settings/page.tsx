'use client'

import { Button } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import BusinessDetails from "./business/BusinessDetails";
import { useState } from "react";

export default function SettingsProfilePage() {
  const [isEditable, setIsEditable] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Business Setting</h3>
          <p className="text-sm text-muted-foreground">
            Manage your company information, branding, and other business-related settings.
          </p>
        </div>
        <Button onClick={() => setIsEditable(!isEditable)}>
          Make Changes
        </Button>
      </div>
      <Separator />
      <div className="w-full grid grid-cols-2 gap-4 ">

      {/* <div className="border p-4">
        <PersonalDetails isEditable={isEditable} />
      </div> */}
      <div className="border p-4">
        <BusinessDetails isEditable={isEditable}/>
      </div>
      <div className="border p-4">
      </div>
      </div>

      <Separator />
      
      <div className="w-full py-2">
       
      </div>
    </div>
  )
}