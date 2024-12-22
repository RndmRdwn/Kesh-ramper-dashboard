import { Button } from '@/components/shadcn/ui/button';
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
  footer: boolean;
  responsive: number
};

const CustomWidget = ({ primary, footer, responsive} : pageWidgetTypeProps) => {
  const rampData: WidgetTypeProps[] = [
    { id: 1, name: 'Buy', value: 'on-ramp', content: <OnRamp primary={primary} /> },
    { id: 2, name: 'Sell', value: 'off-ramp', content: <OffRamp primary={primary} /> },
  ];

  const [selectedTab, setSelectedTab] = useState<string>(rampData[0].value); // Default to the first tab

  return (
    <div className="w-full h-full  ">
      <div className={`${responsive == 1 ? 'w-full h-full border bg-muted   rounded-3xl shadow-md' : 'w-full h-full rounded-md bg-primary/5 flex items-end justify-end  '} relative grid gap-1 `}>

          {responsive == 1 && (
            <h2 className='w-full text-center py-2 pt-3 text-[10px] font-medium text-muted-foreground'>www.keshflip-pay.com</h2>
          )}
          {responsive == 2 && (
            <div className='absolute top-2 flex gap-1 w-full left-2'>
              <div className='rounded-full p-1 border border-primary/30 bg-muted/80'/>
              <div className='rounded-full p-1 border border-primary/30 bg-muted/80'/>
              <div className='rounded-full p-1 border border-primary/30 bg-muted/80'/>
              <div className='w-56 rounded-full ml-32 border border-primary/30 ' />
            </div>
          )}
          {responsive == 1 ? (
              <div className='w-full h-full px-4 rounded-b-2xl pb-2 bg-white'>
                  <WidgetTabs 
                    data={rampData}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                  />
                  <div className='w-full py-2'>
                    {footer && 
                      <p className='text-[10px] text-muted-foreground justify-center flex w-full '>Powered By 
                        <AppIcon className="h-4 w-4 mx-2" />
                        <span className='font-medium text-black text-[10px]'>Keshflip</span>
                      </p>
                    }
                  </div>
              </div>
          ) : (
            <div className='w-full  h-[425px] pb-8  rounded-md z-20'>
              <div className='border h-fit w-[250px] bg-white pb-4  rounded-md'>
                <div className='w-full grid grid-cols-2 py-3 gap-3 px-4'>
                  <h2 className='text-xs flex justify-center items-center w-full border-b'>Buy</h2>
                  <h2 className='text-xs flex justify-center items-center w-full border-b'>Sell</h2>
                </div>
                <div className='px-4 grid gap-3'>
                  <div className='p-2 rounded-lg border'>
                      <div className='flex justify-between items-center'>
                          <h2 className='text-[10px] text-muted-foreground/50'>You pay</h2>
                        <div className='p-1.5 px-4 rounded-lg border border-primary/20' />
                      </div>
                        <h2 className='text-muted-foreground/50 text-sm pt-2'>0.00</h2>
                  </div>
                  <div className='p-2 rounded-lg border'>
                      <div className='flex justify-between items-center'>
                          <h2 className='text-[10px] text-muted-foreground/50'>You get</h2>
                        <div className='p-1.5 px-4 rounded-lg border border-primary/20' />
                      </div>
                        <h2 className='text-muted-foreground/50 text-sm pt-2'>0.00</h2>
                  </div>

                  <div className='w-full p-1 bg-muted rounded-md shadow-sm border-t border-primary/10'>
                  </div>
                  <Button size='sm'>Continue</Button>
                </div>
              </div>
            </div>

          )}
      </div>
    </div>
  );
};

export default CustomWidget;
