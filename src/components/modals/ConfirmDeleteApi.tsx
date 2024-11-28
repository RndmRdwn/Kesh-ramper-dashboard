'use client'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../shadcn/ui/dialog'
import { Button } from '../shadcn/ui/button'
import { ApiKey } from '@/app/(dashboard)/settings/developers/page'
import { toast } from 'sonner'

type props = {
    open: boolean,
    onClose: (val: boolean) => void,
    data: ApiKey,
    onDelete: () => void;
}
const DeleteApiKey = ({ open, onClose, data, onDelete } : props) => {
    
  const handleDelete = () => {
    onDelete()
    toast.success('API KEY has been deleted')
  }

  return (
    <div>
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className='font-medium'>Delete API Key</DialogTitle>
          <DialogDescription >Do you really want to delete the API key <span className='font-medium text-black'>{data.name}</span> This action is irreversible.</DialogDescription>
        </DialogHeader>

        <DialogFooter>
        <Button variant='outline' onClick={() => onClose(false)}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default DeleteApiKey