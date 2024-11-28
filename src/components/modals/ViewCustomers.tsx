import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { CustomersType } from "@/constant/types/models";

type Props = {
  open: boolean;
  onClose: () => void;
  data: CustomersType | null;
};

const ViewCustomers = ({ open, data, onClose }: Props) => {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-medium">Customers Details</DialogTitle>
        </DialogHeader>
          <div>
            Customer  - {data.name}
          </div>
      </DialogContent>
    </Dialog>
  );
};



export default ViewCustomers;
