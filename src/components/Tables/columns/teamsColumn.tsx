import {ColumnDef} from "@tanstack/react-table";
import {Checkbox} from "@/Components/ui/checkbox";
import {DataTableColumnHeader} from "@/Components/shared/Tables/columns/column-header";
import {DataTableRowActions} from "@/Components/shared/Tables/data-table/Row-action";
import { UserType } from "@/types";
import { CheckCircle, ClipboardPlus, XCircle, XCircleIcon } from "lucide-react";
import { UserListProps } from "@/types/user.schema";
import { ManageActions } from "../data-table/actions";
import { RoleFormProps } from "@/store/role.schema";
import { handleClipboard } from "@/lib/clipboardText";
import { TeamType } from "@/Pages/main/teams/type";

export const teamsColumn: ColumnDef<TeamType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px] "
            />
        ),
        cell: ({ row }) => (
            <div className="px-2">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="translate-y-[2px]"
                />

            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex w-[80px] px-6 gap-1">
                    <span className="font-medium text-base">
                        {row.index + 1}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="name" />
        ),
        cell: ({ row }) => {

            return (
                <div onClick={() => handleClipboard(row.getValue("name"))} className="flex px-6 w-f gap-1">
                    <span className="font-medium text-base">
                        {row.getValue("name")}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => {

            return (
                <div className="flex gap-1 px-6 items-center hover:">
                    <span className=" ">
                        {row.getValue("description")}
                    </span>
                </div>
            )
        },
        filterFn: 'includesString',
    },
    {
        accessorKey: "members",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Members" />
        ),
        cell: ({ row }) => {
            const members = row.original.members;
            return (
                <div className="flex flex-wrap gap-2 px-6">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 border rounded-full px-3 py-1 bg-gray-100 hover:bg-gray-200"
                        >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-sm">{member}</span>
                        </div>
                    ))}
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <ManageActions category="Teams" subCategory="teams" title="teams" row={row.original} />,
    },
]

