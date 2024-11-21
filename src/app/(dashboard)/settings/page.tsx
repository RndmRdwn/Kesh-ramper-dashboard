import { Separator } from "@/components/shadcn/ui/separator";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Business Setting</h3>
        <p className="text-sm text-muted-foreground">
          Manage your company information, branding, and other business-related settings.
        </p>
      </div>
      <Separator />
    </div>
  )
}