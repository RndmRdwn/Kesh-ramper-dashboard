import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Example dashboard app built using the components.',
};

const DashboardPage = () => {
    return (
        <div className='flex-1 space-y-4 p-2'>
            <div className='w-full h-full py-2'>
                <h2 className='font-medium text-xl'>Dashboard</h2>
                <p className='text-sm text-muted-foreground'>Manage all customers from here</p>
            </div>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
                <div className='w-full border p-8 rounded-lg shadow-md'/>
                <div className='w-full border p-8 rounded-lg shadow-md'/>
                <div className='w-full border p-8 rounded-lg shadow-md'/>
                <div className='w-full border p-8 rounded-lg shadow-md'/>
            </div>
                <div className='border p-4 rounded-lg shadow-sm'>
                    <h2 className='font-medium'>Overview</h2>
                </div>
                <div className=' border p-4 rounded-lg shadow-sm'>
                    <h2 className='font-medium'>Recent Activities</h2>
                </div>
        </div>  
    );
};

export default DashboardPage;
