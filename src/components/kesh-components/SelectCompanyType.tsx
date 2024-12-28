import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

export function SelectCompanyType() {

    const companyList = [
        {value: 'company01', name: 'Type 01'},
        {value: 'company02', name: 'Type 02'},
        {value: 'company03', name: 'Type 03'},
        {value: 'company04', name: 'Type 04'},
        {value: 'company05', name: 'Type 05'},
        {value: 'company06', name: 'Type 06'},
    ]

  return (
    <Select>
      <SelectTrigger className="w-full border-primary/20 p-6">
        <SelectValue placeholder="Select comapny type" className="text-muted-foreground" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
            {companyList.map( item => (
                <SelectItem key={item.value} className="p-3 px-5" value={item.value}>{item.name}</SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
