import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { CustomSelect } from '@/components/shared/CustomSelect'
import { DefaultSelectType } from '@/constant/types/common'
import React from 'react'

type Props = {
  currentValue: string,
  currentCodeValue: string,
  codeData: DefaultSelectType[],
  handleChange: (field: string, value: string) => void,
}

const PhoneNumber = ({currentValue, currentCodeValue, codeData, handleChange }: Props) => {
  return (
    <div>
      <div className="grid gap-3">
        <Label className="text-sm">Phone Number</Label>
        <div className="flex gap-2 items-center">
          <CustomSelect
            value={currentCodeValue}
            data={codeData}
            isEditable={true}
            placeholder={codeData[0].name}
            onChange={(value) => handleChange('phoneCode', value)}
          />
          <Input
            value={currentValue}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            placeholder="Enter Phone Number"
            className="h-9"
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneNumber