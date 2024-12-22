'use client'

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/shadcn/ui/input";
import { DataTableFacetedFilter } from "./Faceted-filter";
import { DataTableViewOptions } from "./View";
import { Filter, FilterX, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { TransactionStatus, TransactionTypes } from "./data";


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  title: string;
}

export function DataTableToolbar<TData>({
  table,
  title,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [showFilters, setShowFilters] = useState(false); // State to toggle filter visibility
  // const [filters, setFiltersState] = useState({});

  const showCustomerFilter = title === "Customers";
  const showTransactionFilter = title === "transactions by currency";


  // const handleFilterChange = (newFilters: any) => {
  //   setFiltersState(newFilters);
  //   setFilters(newFilters); // Pass the new filters to the parent component (data table)
  // };

  const columnToFilter = () => {
    switch (title) {
      case "Users":
        return "name";
      case "Roles":
        return "name";
      case "Currencies":
        return "name";
      case "Network":
        return "name";
      case "payments":
        return "name";
      case "Customers":
        return "name";
      case "transactions by currency":
        return "currency_id";
      case "KYC":
        return "name";
      case "Customers by Id":
        return "id";
      case "Transaction Report":
        return "id";
      case "Currency Report":
        return "currency";
      case "Incoming Report":
        return "id";
      case "Ongoing Report":
        return "id";
      case "Method Performance":
        return "method_name";
      case "Peak Performance":
        return "payment_method";
      case "Monthly Statements":
        return "month";
      case "Income Statements":
        return "account_id";
      case "Ledger Statements":
        return "due_to_state";
      case "Trial Balance":
        return "account_name";
      case "BlackList":
        return "name";
      case "promo code":
        return "code";
      case "Access":
        return "code";
      default:
        return "name"; // fallback column if needed
    }
  };

  // const filterConfigsCurrency = [
  //   { title: "Currency Status", column: "status", options: Statuses },
  //   { title: "Currency Type", column: "type", options: CurrencyType },
  //   { title: "Rate Type", column: "rate_type", options: RateTypes },
  //   { title: "Position", column: "position", options: CurrencyPosition }
  // ];
  const filterConfigsTransaction = [
    { title: "Transaction Status", column: "status", options: TransactionStatus },
    { title: "Transaction Type", column: "type", options: TransactionTypes },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex lg:flex-row md:flex-row gap-4 lg:gap-1 flex-col flex-1 lg:items-center space-x-2">

        <Input
          placeholder={`Search ${title}`}
          value={(table.getColumn(columnToFilter())?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(columnToFilter())?.setFilterValue(event.target.value)
          }
          className="h-full w-full md:w-[50%] lg:w-[350px] shadow-sm"
        />

        <div className="">
          <Button variant={'outline'} onClick={() => setShowFilters(!showFilters)} size="sm"
            className={`px-2 flex gap-1 py-0 ${showFilters ? 'text-red-600 hover:text-red-600 hover:bg-red-600/10' : ''}`} 
            >
            {!showFilters ? 
              <Filter size={20} /> : <FilterX size={20}  />
            } Filter 
          </Button>
        </div>

        {showFilters && (

          <div className="flex flex-col gap-2 lg:flex-row">
          
            {showTransactionFilter && filterConfigsTransaction.map(
              ({ title, column, options }) =>
                table.getColumn(column) && (
                  <DataTableFacetedFilter 
                    key={column} 
                    title={title} 
                    column={table.getColumn(column)} 
                    options={options} 
                  />
                )
            )}

            {showCustomerFilter && table.getColumn("status") && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="Status"
                options={TransactionStatus}
              />
            )}

            {isFiltered && (
              <Button
                variant="ghost"
                onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 lg:px-3"
              >
                Reset
                <X className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
