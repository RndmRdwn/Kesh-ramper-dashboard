import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../shadcn/ui/tooltip';
import { Fullscreen, UserPen, UserRoundMinus } from 'lucide-react';
import ViewCustomers from '../modals/ViewCustomers';
import { CustomersType, TeamsType, TransactionType } from '@/constant/types/models';
import EditCustomers from '../modals/EditCustomers';
import ConfirmDelete from '../modals/ConfirmDelete';
import ViewTransaction from '../modals/ViewTransaction';
import ViewTeamMember from '../modals/ViewTeamMember';

interface DataTableRowActionsProps<TData> {
    data: TData | null;
    title: string,
} 
interface ActionItemsProps {
    title: string;
    onClick: () => void
    Icon: React.ReactNode
    category?: string
    subCategory?: string
}

function CustomAction<TData>({ data, title }: DataTableRowActionsProps<TData>) {
    
    const [viewOpen, setViewOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)


  return (
    <div>
        <div className="flex gap-2">
        {title == 'Teams' ? 
            <ActionItems title="View" onClick={() => setViewOpen(!viewOpen) } Icon={ <> <Fullscreen size={18}/> </> }/>
        :
        <>
                <ActionItems title="View" onClick={() => setViewOpen(!viewOpen) } Icon={ <> <Fullscreen size={18}/> </> }/>
                <ActionItems title="Edit" onClick={() => setEditOpen(!editOpen) } Icon={ <> <UserPen size={18}/> </> }/>
                <ActionItems title="Remove" onClick={() => setDeleteOpen(!deleteOpen) } Icon={ <> <UserRoundMinus size={18}/> </> }/>
        </>
        }
        </div>

        {viewOpen && (
            <>
                {title == 'Customers' && 
                    <ViewCustomers open={viewOpen} data={data as CustomersType}
                    onClose={() => setViewOpen(!viewOpen)} />
                }
                {title == 'Transactions' && 
                    <ViewTransaction open={viewOpen} data={data as TransactionType}
                    onClose={() => setViewOpen(!viewOpen)} />
                }
                {title == 'Teams' && 
                    <ViewTeamMember open={viewOpen} data={data as TeamsType}
                    onClose={() => setViewOpen(!viewOpen)} />
                }
                
            </>
        )}
        {editOpen && (
            <>
                {title == 'Customers' && 
                    <EditCustomers open={editOpen} data={data as CustomersType}
                        onClose={() => setEditOpen(!editOpen)}  />
                }
            </>
        )}
        {deleteOpen && (
            <>
                {title == 'Customers' && 
                    <ConfirmDelete open={deleteOpen} data={data as CustomersType}
                        onClose={() => setDeleteOpen(!deleteOpen)}  />
                }
            </>
        )}
    </div>
  )
}

const ActionItems = ({title, Icon, onClick} : ActionItemsProps) => {


    return (
        <div className="flex gap-2">
            <Tooltip>
                <TooltipTrigger >
                    <div onClick={onClick} className=" p-1 rounded-lg hover:bg-primary/5 dark:hover:bg-primary border border-transparent hover:border-primary duration-200 ease-in-out">
                       {Icon}
                    </div>
                </TooltipTrigger>
                <TooltipContent className="bg-primary/70 rounded-md backdrop-blur-md">
                    <h2 className="text-xs font-medium ">{title}</h2>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}


export default CustomAction