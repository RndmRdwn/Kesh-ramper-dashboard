
import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table";
import { DataTablePagination } from "./Pagination";
import { DataTableToolbar } from "./Toolbar";
import ViewTransaction from "../modals/ViewTransaction";
import { CustomersType, TeamsType, TransactionType } from "@/constant/types/models";
import ViewTeamMember from "../modals/ViewTeamMember";
import ViewCustomers from "../modals/ViewCustomers";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[] ;
    title: string;
    searchTitle: string;
    searchable?: boolean;
    subTitle?: string;
}

interface ModalState<TData> {
    open: boolean;
    type: "customers" | "kyc" | "notifications" | "transactions" | 'users' | 'teams' | null;
    rowData: TData | null;
}

export function DataTable<TData, TValue>({ columns, data, title, searchTitle, searchable=true }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);

    // Manage modal state with a single state object
    const [modalState, setModalState] = React.useState<ModalState<TData>>({
        open: false,
        type: null,
        rowData: null,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
        },
        initialState: {
                pagination: {
                    pageSize: 10
                }
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    const handleRowClick = (rowData: TData ) => {
        const modalType = title.toLowerCase() as ModalState<TData>["type"]; // Cast to ModalState type
        setModalState({
            open: true,
            type: modalType,
            rowData: rowData,
        });
    };

    const closeModal = () => {
        setModalState({ open: false, type: null, rowData: null });
    };

    return (
        <div className="space-y-4">
            {searchable && (
                <DataTableToolbar setFilters={setColumnFilters} title={searchTitle} table={table} />
            )}
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-primary/15">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    onClick={() => handleRowClick(row.original)} // Call handleRowClick with row data
                                    className="cursor-pointer"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />

        </div>
    );
}
