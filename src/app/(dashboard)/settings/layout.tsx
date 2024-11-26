import { Separator } from "@/components/shadcn/ui/separator"
import { Metadata } from "next"
import { SidebarNav } from "./tabs-sidebar"
import { settingTabs } from "@/lib/tab-list"
import { Toaster } from "sonner"


export const metadata: Metadata = {
  title: "Settings ",
  description: "Settings Management",
}


interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className=" flex-1 space-y-4 p-2 ">
        <Toaster  position="top-center"/>
        <div className="">
          <h2 className='font-medium'>Settings</h2>
          <p className='text-sm text-muted-foreground'>Manage your account settings and preferences.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-2/12 px-4">
            <SidebarNav items={settingTabs} />
          </aside>
          <div className="flex-1 w-full">{children}</div>
        </div>
      </div>
    </>
  )
}