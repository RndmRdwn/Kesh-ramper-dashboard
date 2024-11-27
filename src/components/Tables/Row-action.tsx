'use client'

import React, { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"
import ViewTransaction from "../modals/ViewTransaction"
import { TeamsType, TransactionType } from "@/constant/types/models"
import ViewTeamMember from "../modals/ViewTeamMember"
// Import Edit and Delete dialogs similarly

interface DataTableRowActionsProps<TData> {
    row: TData | null;
    title: string
}

export function DataTableRowActions<TData>({
                                               row,
                                               title,
                                           }: DataTableRowActionsProps<TData>) {
    const [viewOpen, setViewOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const closeEditModal = () => {
        setEditOpen(false);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                        <Ellipsis className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[100px]">
                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation(); // Correct stopPropagation usage
                            setViewOpen(true); // Only trigger edit modal
                        }}
                        className="cursor-pointer"
                    >
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation(); // Correct stopPropagation usage
                            setEditOpen(true); // Only trigger edit modal
                        }}
                        className="cursor-pointer"
                    >
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            setDeleteOpen(true); // Trigger delete modal if needed
                        }}
                        className="cursor-pointer"
                    >
                        Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {editOpen &&  (
                <>
                    {title === 'transactions' ?
                        <ViewTransaction
                            open={editOpen}
                            onClose={closeEditModal} // Explicitly manage close logic to ensure no other modals trigger
                            data={row as TransactionType}
                        />
                   : title === 'teams' ? 
                        <ViewTeamMember 
                            open={editOpen}
                            onClose={closeEditModal} // Explicitly manage close logic to ensure no other modals trigger
                            data={row as TeamsType}
                        />
                   : <></>
                    }
                </>
            )}

            {deleteOpen &&  (
                <></>
            )}

            {viewOpen &&  (
                <>
                    <ViewTeamMember 
                        editable={false}
                        open={viewOpen}
                        onClose={() => setViewOpen(!viewOpen)} // Explicitly manage close logic to ensure no other modals trigger
                        data={row as TeamsType}
                    />
                </>
            )}

        </>
    )
}
