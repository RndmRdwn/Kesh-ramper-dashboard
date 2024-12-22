import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/shadcn/ui/avatar';
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi"


export function RecentSales() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Olivia Martin
                    </p>
                    <p className="text-xs text-muted-foreground">
                        olivia.martin@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex gap-2 items-center text-sm">+$1,999.00 <PiHandDeposit size={22} className='text-green-600' /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Jackson Lee
                    </p>
                    <p className="text-xs text-muted-foreground">
                        jackson.lee@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-2 text-sm">+$39.00 <PiHandWithdraw size={22} className='text-red-600' /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Isabella Nguyen
                    </p>
                    <p className="text-xs text-muted-foreground">
                        isabella.nguyen@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-2 text-sm">+$99.00 <PiHandDeposit size={22} className='text-green-600' /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        William Kim
                    </p>
                    <p className="text-xs text-muted-foreground">
                        will@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-2 text-sm">+$299.00 <PiHandWithdraw size={22} className='text-red-600' /></div>
            </div>
            <div className="flex items-center ">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Sofia Davis
                    </p>
                    <p className="text-xs text-muted-foreground">
                        sofia.davis@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-2 text-sm">+$39.00 <PiHandWithdraw size={22} className='text-red-600' /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Alice Johnson
                    </p>
                    <p className="text-xs text-muted-foreground">
                        alice.johnson@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium flex items-center gap-2 text-sm">+$149.00 <PiHandDeposit size={22} className='text-green-600' /></div>
            </div>
        </div>
    );
}
