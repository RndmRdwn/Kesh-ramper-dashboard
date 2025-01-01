"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover"
import Image from "next/image"
import { Label } from "../shadcn/ui/label"


type WithIconProps = {
    data: {
        value: string,
        label: string
        flag?: string
        icon?: string
    }[],
    placeholder: string,
    onChange: (value: string) => void
}

export function CustomCommandWithIcon({data, placeholder,onChange} : WithIconProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <div className="flex flex-col gap-2">
      <Label>Country</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full py-6 justify-between rounded-xl"
          >
              <span className="flex gap-2">
                {value ?
                    <Image
                          width={100}
                          height={100}
                          src={data.find((item) => item.value === value)?.flag}
                          alt={`icon`}
                          className="mr-2 h-4 w-6 object-cover"
                      />
                  : <></>
                    }
                  {value
                      ? data.find((item) => item.value === value)?.label
                      : "Select a country"}
              </span>
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-full p-0">
          <Command>
            <CommandInput placeholder={`Search ${placeholder}...`} className="h-9" />
            <CommandList>
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                        onChange(currentValue)
                      setOpen(false)
                    }}
                  >
                      <span className="flex items-center gap-2">
                          <Image
                                width={100}
                                height={100}
                                src={item.flag}
                                alt={`${item.label}`}
                                className="mr-2 h-4 w-6 object-cover"
                            />
                          {item.label}
                      </span>
                    <Check size={14}
                      className={cn(
                        "ml-auto",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
