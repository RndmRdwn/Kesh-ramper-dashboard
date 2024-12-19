import { WidgetTypeProps } from "@/app/(dashboard)/settings/configure-widget/custom-widget";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";

export function WidgetTabs({
  data,
  selectedTab,
  onTabChange,
}: {
  data: WidgetTypeProps[];
  selectedTab: string;
  onTabChange: (value: string) => void;
}) {
  return (
    <Tabs
      defaultValue={data[0].value}
      value={selectedTab} // Bind to selectedTab state
      onValueChange={onTabChange} // Update selectedTab state
      className="w-full"
    >
      <TabsList className="grid w-full  grid-cols-2 pt-3 bg-transparent gap-2">
        {data.map((item) => (
          <TabsTrigger key={item.id} className={`${selectedTab == item.value ? ' border-b-primary/20 ' : 'border-transparent'} rounded-b-8 border-t-0 border-b-2   outline-none `} value={item.value}>
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {data.map((item) => (
        <TabsContent key={item.id} value={item.value} className="pt-2">
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
