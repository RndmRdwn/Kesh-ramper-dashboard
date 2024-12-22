/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { TeamsType } from "@/constant/types/models";
import { Button } from "../shadcn/ui/button";
import { useState } from "react";
import CustomTextField from "../forms/custom-textfield";
import { Pencil, Trash2 } from "lucide-react";
import DeleteMember from "./DeleteMember";

type Props = {
  open: boolean;
  onClose: () => void;
  data: TeamsType | null;
};

const ViewTeamMember = ({ open, data,  onClose }: Props) => {
  if (!data) return null;

  const [formData, setFormData] = useState({
    name: data.name,
    email: data.email,
    auth: data.auth,
    role: data.role,
    last_login: data.last_login,
})
  const [isEditable, setIsEditable] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
   // Handle input change
   const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
    ...prev,
    [field]: value,
    }))
}
  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-medium">Team Member Details</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <CustomTextField isEditable={isEditable} label="Member Name" 
                        value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
            <CustomTextField isEditable={isEditable} label="Email Address" 
                        value={formData.email} onChange={(e) => handleChange('email', e.target.value)}/>
            <CustomTextField isEditable={isEditable} label="Role" 
                        value={formData.role} onChange={(e) => handleChange('role', e.target.value)}/>
            <CustomTextField isEditable={false} label="Auth" 
                        value={formData.auth} onChange={(e) => handleChange('auth', e.target.value)}/>
            <CustomTextField isEditable={false} label="Last Login" 
                        value={formData.last_login} onChange={(e) => handleChange('last_login', e.target.value)}/>

          </div>
          <DialogFooter >
            <Button onClick={() => setIsDeleting(true)} variant={'destructive'} className="px-4">
              <Trash2 /> Delete
            </Button>
            <Button onClick={() => setIsEditable(!isEditable)} variant={isEditable ? 'outline' : 'default'} className="px-4"><Pencil /> 
              {!isEditable ? 'Edit' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DeleteMember data={data} onClose={onClose} open={isDeleting} />
    </>
  );
};

export default ViewTeamMember;
