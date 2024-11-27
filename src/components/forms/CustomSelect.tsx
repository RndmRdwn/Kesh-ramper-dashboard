import { Label } from "@/components/shadcn/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"
import { DefaultSelectType } from "@/constant/types/common"

type CustomSelectProps = {
  data: DefaultSelectType[]
  placeholder: string
  label?: string,
  value: string,
  isEditable? : boolean
  onChange: (value: string) => void
}

export function CustomSelect({ data, isEditable, placeholder, label, value, onChange }: CustomSelectProps) {
  return (
    <>
      {!isEditable ? <> 
          <div>
            <h2 className='text-sm text-muted-foreground'>{label}</h2>
            <Label className='text-base'>{value}</Label>
          </div> 
        </> : 
        <>
        <div className="grid gap-1">
          <h2 className='text-sm '>{label}</h2>
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder || "Select"} className="text-muted-foreground"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data.map((item) => (
                  <SelectItem key={item.value} value={item.value} >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        </>
      }
    </>
  )
}
