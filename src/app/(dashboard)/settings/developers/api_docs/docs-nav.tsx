
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { docsTabs } from "./docs-tabs";

export function DocsNav() {
  return (
    <Tabs defaultValue={docsTabs[0]?.value || ""} className="w-full gap-5 h-full  flex">
      {/* Tabs List */}
      <TabsList className="flex flex-col items-start bg-transparent gap-1 h-full border">
        {docsTabs.map((tab) => (
           <TabsTrigger
           key={tab.id}
           className="p-2 flex text-left w-48 items-start rounded-none font-normal transition-all duration-200 ease-in-out
           aria-selected:border-b-2 aria-selected:border-primary aria-selected:font-semibold"
           value={tab.value}
         >
            <div className="w-full">
              <h2 className="">{tab.name}</h2>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {docsTabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.value} className="w-full">
                {tab.components}
        </TabsContent>
      ))}
    </Tabs>
  );
}
