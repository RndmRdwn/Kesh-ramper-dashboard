import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Separator } from "@/components/shadcn/ui/separator";
import { Textarea } from "@/components/shadcn/ui/textarea";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Business Setting</h3>
          <p className="text-sm text-muted-foreground">
            Manage your company information, branding, and other business-related settings.
          </p>
        </div>
        <Button >
          Make Changes
        </Button>
      </div>
      <Separator />
      <div className="w-full grid grid-cols-2 gap-4 ">
        <div className="w-full py-2">
            <Label className="text-sm">Company Name</Label>
            <Input placeholder="Company Name" />
        </div>
        <div className="w-full py-2">
            <Label className="text-sm">Company Username</Label>
            <Input placeholder="Company Username" className="" />
        </div>
        <div className="py-2 grid ">
            <Label className="text-sm">Company Logo</Label>
            <div className="flex gap-3">
            <div className="p-6 rounded-full border bg-gradient-to-br from-primary/40 shadow-md "/>
              
              <div className="w-full border rounded-lg flex justify-center items-center">
                <h2 className="text-sm text-muted-foreground cursor-pointer">Upload Image</h2>
              </div>
            </div>
        </div>
        <div className="w-full py-2">
            <Label className="text-sm">Company Username</Label>
            <Textarea placeholder="Company Description" className="" />
        </div>
      </div>

      <Separator />
      
      <div className="w-full py-2">
       
      </div>
    </div>
  )
}