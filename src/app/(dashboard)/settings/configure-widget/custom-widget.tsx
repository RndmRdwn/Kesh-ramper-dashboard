import OffRamp from '@/components/widget/off-ramp';
import OnRamp from '@/components/widget/on-ramp';
import { WidgetTabs } from '@/components/widget/widget-tabs';
import { AppIcon } from '@/constant/icons';
import React, { useState } from 'react';

export type WidgetTypeProps = {
  id: string | number;
  name: string;
  value: string;
  content: React.ReactNode;
};
export type pageWidgetTypeProps = {
  primary: string;
};

const CustomWidget = ({ primary } : pageWidgetTypeProps) => {
  const rampData: WidgetTypeProps[] = [
    { id: 1, name: 'Buy', value: 'on-ramp', content: <OnRamp primary={primary}/> },
    { id: 2, name: 'Sell', value: 'off-ramp', content: <OffRamp /> },
  ];

  const [selectedTab, setSelectedTab] = useState<string>(rampData[0].value); // Default to the first tab

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full border bg-white grid gap-2 p-4 rounded-3xl shadow-md py-6">
        
        <WidgetTabs primary={primary}
          data={rampData}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
        <div className='w-full py-2'>
          <p className='text-xs text-muted-foreground justify-center flex w-full '>Powered By 
            <AppIcon className="h-4 w-4 mx-2" />
            <span className='font-medium text-black'>Keshflip</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default CustomWidget;
