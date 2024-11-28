import React from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { CustomersType } from "@/constant/types/models";
import { Button } from "../shadcn/ui/button";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: (val: boolean) => void;
  data: CustomersType | null;
};

const ConfirmDelete = ({ open, data, onClose }: Props) => {
  if (!data) return null;
  const handleDelete = () => {
    toast.success('Customer has been deleted')
    onClose(!open)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-medium">Delete Customer</DialogTitle>
        </DialogHeader>
        <div>
          Customer  - {data.name}
        </div>
      <DialogFooter>
        <Button variant='outline' onClick={() => onClose(false)}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </DialogFooter>
      </DialogContent>
      
    </Dialog>
  );
};



export default ConfirmDelete;
