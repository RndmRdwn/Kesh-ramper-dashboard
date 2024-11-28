import {ColumnDef} from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import {  CustomersType } from "@/constant/types/models";
import { User } from "lucide-react";
import CustomAction from "../customAction";
import { customerStatus } from "@/lib/tab-list";
// import { Checkbox } from "@/components/shadcn/ui/checkbox";


export const CustomersColumn: ColumnDef<CustomersType>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected()
    //                     ? true
    //                     : table.getIsSomePageRowsSelected()
    //                     ? "indeterminate"
    //                     : false
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //             className="translate-y-[2px]"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected() || false}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //             className="translate-y-[2px]"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex px-4 gap-2 items-center">
                    <User />
                    <span className="font-medium text-sm">
                        {row.getValue("name")}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="email" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex gap-1 px-4 items-center hover:">
                    <span className="  text-muted-foreground">
                        {row.getValue("email")}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "role",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="role" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex gap-2 items-center px-4 ">
                    <span className=" ">
                        {row.getValue("role")}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),

        cell: ({ row }) => {
            
        const status = customerStatus.find(
            (status) => status.value === row.getValue("status")
          )

          if (!status) {
            return null
          }
          
            return (
                <div className="px-6 w-fit">
                    <div className={` flex   font-semibold items-center rounded-xl  
                        ${status.label == 'Inactive' ? ' text-gray-400 ' :  
                        status.label == 'Active' ? ' text-blue-600 ' :  
                            'text-orange-400 '}
                    `}>
                    {status.icon && (
                        <status.icon className={` mr-2 h-4 w-4`}  />
                    )}
                    <span>{status.label}</span>
                    </div>
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <CustomAction title="Customers" data={row.original} />,
    },
]

