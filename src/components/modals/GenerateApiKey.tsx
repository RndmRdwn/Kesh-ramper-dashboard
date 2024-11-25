'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../shadcn/ui/dialog'
import { Button } from '../shadcn/ui/button'
import CustomTextField from '../shared/Custom-TextField'
import { Label } from '../shadcn/ui/label'
import { Checkbox } from '../shadcn/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../shadcn/ui/radio-group'

type props = {
    open: boolean,
    onClose: (val: boolean) => void,
    fetchPermissions: (value: string) => void
    fetchApiName: (api: string) => void
    fetchApiKey: (fullKey: string, maskedKey: string) => void
}
const GenerateApiKey = ({ open, onClose, fetchApiName, fetchPermissions, fetchApiKey } : props) => {
    const [apiKeyName, setApiKeyName] = useState('')
    const [selectedPermission, setSelectedPermission] = useState('default')
  
    // Handle input change
    const handleChange = (e: string) => {
      setApiKeyName(e)
    }
    const handlePermissionChange = (value: string) => {
      setSelectedPermission(value);
    };
    // Generate a full API key
    const generateFullKey = (): string => {
        const prefix = 'API_'
        const digits = Math.floor(100 + Math.random() * 900).toString() // 3 random digits
        const suffix = Math.random().toString(36).substring(2, 15).toUpperCase() // Random alphanumeric
        return prefix + digits + suffix
    }

    // Generate a masked version of the API key
    const generateMaskedKey = (fullKey: string): string => {
        if (fullKey.length <= 7) return fullKey // Not enough characters to mask
        const prefix = fullKey.substring(0, 7) // 'API_123'
        const maskedLength = fullKey.length - 7
        const masked = '*'.repeat(maskedLength)
        return prefix + masked
    }
    
    const handleSubmit = () => {
        const fullKey = generateFullKey() // Generate the full API key
        const maskedKey = generateMaskedKey(fullKey) // Generate the masked API key
    
      fetchApiName(apiKeyName)
      fetchPermissions(selectedPermission);
      fetchApiKey(fullKey, maskedKey) // Pass the generated key to the parent
      onClose(!open) // Close the dialog
    }
  return (
    <div>
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button>Generate API Key</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className='font-medium'>Create API Key</DialogTitle>
          <DialogDescription>
            Please give your new API key a name for identification purposes.
          </DialogDescription>
        </DialogHeader>
        <div>
            <CustomTextField 
                label='Name' 
                placeholder='API KEY Name' 
                value={apiKeyName} 
                onChange={handleChange} 
            />
        </div>

        <div>
          <Label>Permissions</Label>
          <RadioGroup  value={selectedPermission}
              onValueChange={handlePermissionChange} className='flex gap-2 pt-2'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label className='text-xs font-normal' htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full-access" id="r2" />
                <Label className='text-xs font-normal' htmlFor="r2">Full Access</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="r3" />
                <Label className='text-xs font-normal' htmlFor="r3">Custom</Label>
              </div>
            </RadioGroup>
        </div>
        <DialogFooter>
          <Button variant='outline' onClick={() => onClose(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default GenerateApiKey