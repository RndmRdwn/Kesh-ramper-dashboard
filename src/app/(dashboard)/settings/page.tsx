'use client'

import { Button } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import BusinessDetails from "./business/BusinessDetails";
import { useState } from "react";
import PersonalDetails from "./business/PersonalDetails";

export default function SettingsProfilePage() {
  const [isEditable, setIsEditable] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-3">
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
      <div className="w-full grid lg:grid-cols-5 gap-8  ">

        <div className=" p-4  col-span-2 grid gap-4">
          <PersonalDetails />
        </div>
        <div className=" p-4 lg:border-l lg:border-t-0 md:border-t col-span-3 grid gap-4">
          <BusinessDetails />
        </div>
      </div>

      <Separator />
      
      <div className="w-full py-2">
       
      </div>
    </div>
  )
}