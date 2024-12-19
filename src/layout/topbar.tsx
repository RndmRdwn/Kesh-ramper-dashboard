import { Input } from "@/components/shadcn/ui/input";
import { UserNav } from "./components/user-nav";
import NavLink from "@/components/ui/nav-link";

const Topbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4 lg:w-11/12 lg:mx-auto">

                {/* navigation */}
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <NavLink
                        href="/overview"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Overview
                    </NavLink>
                    <NavLink
                        href="/analytics"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Analytics
                    </NavLink>
                    <NavLink
                        href="/customers"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Customers
                    </NavLink>
                    <NavLink
                        href="/transactions"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Transactions
                    </NavLink>
                    <NavLink
                        href="/assets"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Assets
                    </NavLink>
                    <NavLink
                        href="/settings"
                        className="text-[16px] text-gray-600 transition-colors hover:text-primary"
                        isActiveClass="text-blue-500 font-medium"
                    >
                        Settings
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center space-x-4">
                    <div>
                        <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
                    </div>
                    <UserNav />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
