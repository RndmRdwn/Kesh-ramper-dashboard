import { Label } from '@/components/shadcn/ui/label'
import { CustomSelect } from '@/components/shared/CustomSelect'
import { DefaultSelectType } from '@/constant/types/common'
import React from 'react'

type Props = {
    currentMethodValue: string,
    currentMobileValue: string,
    methodsData: DefaultSelectType[],
    mobileMethods: DefaultSelectType[],
    handleChange: (field: string, value: string) => void,
}

const Payment = ({currentMethodValue, currentMobileValue, methodsData, mobileMethods, handleChange}: Props) => {
  return (
    <div className='grid gap-3'>
          <div className="grid ">
            <Label className="text-sm ">Payment Method</Label>
            <CustomSelect
              value={currentMethodValue}
              data={methodsData}
              isEditable={true}
              placeholder={'Select A Payment Method'}
              onChange={(value) => handleChange('paymentMethod', value)}
            />
          </div>
          {currentMethodValue == 'Mobile Payment' && (
            <div className="grid ">
              <Label className="text-sm  ">Mobile Payment Method</Label>
              <CustomSelect
                value={currentMobileValue}
                data={mobileMethods}
                isEditable={true}
                placeholder={'Select A Mobile Payment Method'}
                onChange={(value) => handleChange('paymentMethodType', value)}
              />
            </div>
          )}
    </div>
  )
}

export default Payment