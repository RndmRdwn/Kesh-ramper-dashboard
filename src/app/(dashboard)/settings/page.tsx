import NavLink from "@/components/ui/nav-link";
import { ChevronDown } from "lucide-react";

const SettingPage = () => {
    return (
        <div className="flex-1 space-y-4 px-4 py-8 pt-6 lg:w-11/12 lg:mx-auto">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            </div>
            <div className="flex pt-5">
                <nav className="flex flex-col w-[25%] space-y-0.5 pr-5">
                    <NavLink href="/settings" className="px-3 py-2 rounded-md text-gray-700 font-medium" isActiveClass="bg-gray-100/70">
                        Business Settings
                    </NavLink>

                    <NavLink href="/settings/teams" className="px-3 py-2 rounded-md text-gray-700 font-medium" isActiveClass="bg-gray-100/70">
                        Teams
                    </NavLink>

                    <NavLink href="/settings/payments" className="px-3 py-2 rounded-md text-gray-700 font-medium" isActiveClass="bg-gray-100/70">
                        Payments
                    </NavLink>

                    <NavLink href="/settings/balance" className="px-3 py-2 rounded-md text-gray-700 font-medium" isActiveClass="bg-gray-100/70">
                        Balance
                    </NavLink>

                    <NavLink
                        href="/settings/configure-widget"
                        className="px-3 py-2 rounded-md text-gray-700 font-medium"
                        isActiveClass="bg-gray-100/70"
                    >
                        Configure Widget
                    </NavLink>

                    <NavLink href="/settings/integrations" className="px-3 py-2 rounded-md text-gray-700 font-medium" isActiveClass="bg-gray-100/70">
                        Integrations
                    </NavLink>

                    <NavLink
                        href="/settings/developer"
                        className="px-3 py-2 rounded-md text-gray-700 font-medium flex items-center justify-between"
                        isActiveClass="bg-gray-100/70"
                    >
                        <span>Developer</span>
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                    </NavLink>
                </nav>

                <div className="border border-red-500 w-[75%]">
                    {/*  */}
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default SettingPage;
