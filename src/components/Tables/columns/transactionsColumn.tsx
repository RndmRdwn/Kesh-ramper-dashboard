import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { TransactionType } from "@/constant/types/models";
import { TransactionStatus, TransactionTypes } from "../data";

export const transactionColumn: ColumnDef<TransactionType>[] = [
   
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="w-full text-start px-5">{row.getValue("id")}</div>,
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "user_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Customer" />
        ),
        cell: ({ row }) => {
            const user = row.original?.user;
             // Check if the currency is an object or a string
             const userName =
             typeof user === "object" && user?.name
                 ? user.name
                 : typeof user === "string"
                 ? user
                 : "Unknown User";
            return (
                <div className="flex w-full gap-1">
                <span className=" px-5  ">
                    {userName}
                </span>
                </div>
            );
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "currency_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Currency" />
        ),
        cell: ({ row }) => {
            const currency = row.original?.currency;
    
            // Check if the currency is an object or a string
            const currencyName =
                typeof currency === "object" && currency?.name
                    ? currency.name
                    : typeof currency === "string"
                    ? currency
                    : "Unknown Currency";
    
            return (
                <div className="w-full px-4">
                    <span>{currencyName}</span>
                </div>
            );
        },
        filterFn: "includesString",
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
            const status = TransactionTypes.find(
              (status) => status.value === row.getValue("type")
            )
      
            if (!status) {
              return null
            }
      
            return (
              <div className={` flex w-full  items-center px-4 font-medium `}>
                <span className={`${status.value == 'deposit' ? ' text-green-600 ' :
                        status.value == 'withdrawal' ? ' text-red-600 ' :  
                        ''}`}>
                    {status.icon && (
                        <status.icon className={` mr-2 h-6 w-6`}  />
                    )}
                </span>
                
                <span>{status.label}</span>
              </div>
            )
          },
        filterFn: "includesString",
    },
    {
        accessorKey: "amount",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
        cell: ({ row }) => (
            <div className="w-full px-4">
                {/* Use amountFormat for the amount */}
                <p>
                    {row.getValue('amount')}
                    <span className="uppercase"> {row.getValue('currency_id')}</span>
                </p>
            </div>
        ),
        filterFn: "includesString",
    },
    
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = TransactionStatus.find(
              (status) => status.value === row.getValue("status")
            )
      
            if (!status) {
              return null
            }
      
            return (
              <div className={` flex w-[120px]   px-4  items-center gap-2
                  ${status.value == 'completed' ? ' text-green-600 ' :
                    status.value == 'pending' ? ' text-yellow-500 ' :  
                    'text-red-600 '}
                `}>
                    <div className={`${status.value == 'completed' ? ' bg-green-600 ' :
                    status.value == 'pending' ? ' bg-yellow-500 ' :  
                    'bg-red-600 '} p-1 rounded-full`}/>
                <span>{status.label}</span>
              </div>
            )
          },
        filterFn: "includesString",
    },
    {
        accessorKey: "date",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
        cell: ({ row }) => {
            return (
                <div className="w-full text-center">
                    <span>{row.getValue("date")}</span>
                </div>
            );
        },
        filterFn: "includesString",
    },
    
];
