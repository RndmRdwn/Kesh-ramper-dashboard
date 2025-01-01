import { DashChart } from '@/components/charts/dashChart';
import { Metadata } from 'next';
import { RecentSales } from './components/recent-sales';
import { Webhook } from 'lucide-react';
import { AiOutlineApi } from "react-icons/ai";
import { TbApiApp } from "react-icons/tb";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Example dashboard app built using the components.',
};

const DashboardPage = () => {
    return (
        <div className='flex-1 space-y-4 p-2'>
            <div className='w-full h-full py-2'>
                <h2 className='font-medium text-xl'>Dashboard</h2>
            </div>
            <div className='w-full grid  lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-3'>
            <DashCard title='Total Active Users' value='11'  />
                <DashCard title='Total Revenue' value='$ 14,520'  />
                <DashCard title='Transaction Volume' value='400'  />
                <DashCard title='Pending Transactions' value='12'  />
            </div>
            <div className='w-full grid lg:grid-cols-9 grid-cols-2 gap-3'>  
                <div className='col-span-3'>
                    <DashChart />
                </div>

                <div className='border col-span-3 p-4 rounded-lg shadow-sm'>
                    <h2 className='font-medium'>Recent Transactions</h2>
                    <div className='pt-8'>
                        <RecentSales />
                    </div>
                </div>
                <div className=' border h-fit p-4 rounded-lg shadow-sm col-span-3'>
                    <h2 className='font-medium'>Recent Activities</h2>
                    <div className='py-4 flex flex-col gap-3 '>
                        
                        <div className='w-full items-center border-primary/50 shadow-md border p-2 rounded-md flex gap-4'>
                            <AiOutlineApi size={24}/>
                            <h2 className='text-xs  text-muted-foreground'>Client DEF generated a new API key.

                            </h2>
                        </div>
                        <div className='w-full items-center border-primary/50 shadow-md border p-2 rounded-md flex gap-4'>
                            <AiOutlineApi size={24}/>
                            <h2 className='text-xs  text-muted-foreground'>API usage nearing limit</h2>
                        </div>
                        <div className='w-full border-primary/50 shadow-md flex gap-4 border p-2 items-center rounded-md'>
                            <Webhook />
                            <h2 className='text-xs text-muted-foreground'>Webhook received for completed Transaction #789</h2>
                        </div>
                        <div className='w-full border-primary/50 shadow-md flex gap-4 border p-2 items-center rounded-md'>
                            <TbApiApp  size={24}/>
                            <h2 className='text-xs text-muted-foreground'>New integration created for Payment Provider XYZ.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

type DashCardProps = {
    title: string,
    value: string,
}

const DashCard = ({ title, value} : DashCardProps) => {
    return (
        <div className=' lg:col-span-1 md:col-span-2 col-span-1 w-full p-4 flex flex-col gap-3 border-2 rounded-lg shadow-md border-primary/50'>
            <p className='text-sm text-muted-foreground'>{title}</p>
            <p className='text-xl font-semibold'>{value}</p>

        </div>
    )
}
export default DashboardPage;
