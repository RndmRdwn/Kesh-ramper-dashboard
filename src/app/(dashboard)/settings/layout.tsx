import { Separator } from "@/components/shadcn/ui/separator"
import { Metadata } from "next"
import { SidebarNav } from "./tabs-sidebar"
import { settingTabs } from "@/lib/tab-list"

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
      <div className=" flex-1 space-y-4 p-2 px-4 ">
        <div className="">
          <h2 className='font-medium'>Settings</h2>
          <p className='text-sm text-muted-foreground'>Manage your account settings and preferences.</p>
        </div>
        <Separator className="" />
        <div className="flex flex-col  ">
          <aside className="-lg:w-full ">
            <SidebarNav items={settingTabs} />
          </aside>
          <div className="flex-1 w-full py-4">{children}</div>
        </div>
      </div>
    </>
  )
}