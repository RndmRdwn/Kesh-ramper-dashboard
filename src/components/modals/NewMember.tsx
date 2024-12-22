import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../shadcn/ui/dialog'
import { Button } from '../shadcn/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import CustomTextField from '../forms/custom-textfield'
import { CustomSelect } from '../forms/CustomSelect'
import { DefaultSelectType } from '@/constant/types/common'
import { toast } from 'sonner'


type Props = {
    open: boolean,
    onClose: (val: boolean) => void,
}

const NewMember = ({open, onClose }: Props) => {

    const [formData, setFormData] = useState( {
        name: '',
        email: '',
        role : '',
        last_login : '',
        auth : ''
    })
    const roleOptions:DefaultSelectType[] = [
        {id: 1, name: 'Super Admin' , value : 'super_admin'},
        {id: 2, name: 'Admin' , value : 'admin'},
        {id: 3, name: 'Editor' , value : 'editor'},
        {id: 4, name: 'Viewer' , value : 'viewer'},
        {id: 5, name: 'Moderator' , value : 'moderator'},
    ]

    // Handle input change
    const handleChange = (field: string, value: string) => {
     setFormData((prev) => ({
     ...prev,
     [field]: value,
     }))
     }

     const handleClose = () => {
        onClose(true)
        toast.success('New Member has been created')
     }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button><Plus/> New Member</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className='font-medium text-base'>Create new team member</DialogTitle>
        </DialogHeader>
            <div className='grid  gap-4'>
                <CustomTextField 
                    label='Full Name'
                    isEditable
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder='Enter Members name'
                    type='text'
                    value={formData.name}   
                />
                <CustomTextField 
                    label='Email Address'
                    isEditable
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder='Enter Members email'
                    type='text'
                    value={formData.email}   
                />
                <CustomSelect 
                    data={roleOptions}
                    label='Role'
                    onChange={(val) => handleChange('role', val)}
                    placeholder='Select a role for member'
                    value={formData.role}
                    isEditable
                />
            </div>
            <div className='w-full '>
                <Button onClick={handleClose} className='w-full'>Create</Button>
            </div>

        </DialogContent>
        </Dialog>
  )
}

export default NewMember