import {ColumnDef} from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { TeamsType } from "@/constant/types/models";
import { User } from "lucide-react";


export const teamsColumn: ColumnDef<TeamsType>[] = [
    
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Member" />
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
                    {row.getValue("role") == 'Super Admin' && (
                        <span className="text-muted-foreground  ">
                            (Owner)
                        </span>
                    )}
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "auth",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="auth" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-2 px-4">
                    <span className="">{row.getValue('auth')}</span>
                </div>
            );
        },
    },
]

