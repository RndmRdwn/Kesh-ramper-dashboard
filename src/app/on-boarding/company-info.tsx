import { Label } from '@/components/shadcn/ui/label'
import React from 'react'
import { SelectCountry, SelectFundsSource, SelectIndustry, SelectLive, SelectVolume } from './SelectionCustom'
import { Button } from '@/components/shadcn/ui/button'
import { Checkbox } from '@/components/shadcn/ui/checkbox'

type Props = {
    handleFinish: () => void
}

const CompanyInfo = ({handleFinish} : Props) => {


  return (
    <>
        <div className='w-full grid  lg:grid-cols-2 md:grid-cols-2 pt-12 gap-8'>
            <div className='grid gap-2'>
                <Label className='font-semibold'>Industry <span className='text-red-500'>*</span></Label>
                <SelectIndustry />
                {/* <CustomCommand data={industryOptions} placeholder='an industry' title='Select an industry' /> */}
            </div>
            <div className='grid gap-2'>
                <Label className='font-semibold'>Country <span className='text-red-500'>*</span></Label>
                <SelectCountry />
                
            </div>
            <div className='grid gap-2'>
                <Label className='font-semibold'>Expected Volume <span className='text-red-500'>*</span></Label>
                <SelectVolume />
            </div>
            <div className='grid gap-2'>
                <Label className='font-semibold'>Source of funds <span className='text-red-500'>*</span></Label>
                <SelectFundsSource />
            </div>
            <div className='grid gap-2 w-full col-span-2'>
                <Label className='font-semibold'>Expected to go live <span className='text-red-500'>*</span></Label>
                <SelectLive />
            </div>
            <div className='col-span-2 pt-4 flex gap-3'>
                <Checkbox id='iDeclare'/>
                <Label htmlFor='iDelare' className='text-xs text-muted-foreground font-normal'>
                    I hereby declare that the information provided above is true, accurate and correct to the best of my knowledge and belief.
                    I acknowledge that providing false and misleading information may result in the suspension or termination of my account or partnership. 
                </Label>
            </div>
        </div>
        <div className='w-full pt-12'>
            <Button onClick={handleFinish} size='lg' className='px-12 py-6 bg-[#6600CC] w-full'>Continue</Button>
        </div>
    </>
  )
}

export default CompanyInfo