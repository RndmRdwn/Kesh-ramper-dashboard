import Topbar from '@/layout/topbar';
import { PropsWithChildren } from 'react';

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="hidden flex-col md:flex">
            <Topbar />
            {children}
        </div>
    );
};

export default DashboardLayout;
