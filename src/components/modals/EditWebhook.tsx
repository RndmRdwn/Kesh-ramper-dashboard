import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { webhookType } from "@/app/(dashboard)/settings/developers/web_hooks/page";

type Props = {
  open: boolean;
  onClose: () => void;
  data: webhookType | null;
};

const EditWebhook = ({ open, data, onClose }: Props) => {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-medium">Edit Webhook</DialogTitle>
        </DialogHeader>
        <div>
          Webhook Name  - {data.name}
        </div>
      </DialogContent>
    </Dialog>
  );
};



export default EditWebhook;
