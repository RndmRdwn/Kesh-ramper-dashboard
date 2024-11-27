import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../shadcn/ui/dialog";
import { TeamsType } from "@/constant/types/models";

type Props = {
  open: boolean;
  editable?: boolean | true;
  onClose: () => void;
  data: TeamsType | null;
};

const ViewTeamMember = ({ open, data, editable, onClose }: Props) => {
  if (!data) return null;

  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-medium">Team Member Details</DialogTitle>
        </DialogHeader>

        {editable}
      </DialogContent>
    </Dialog>
  );
};

export default ViewTeamMember;
