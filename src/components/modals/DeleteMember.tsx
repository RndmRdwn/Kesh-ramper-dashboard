import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/shadcn/ui/dialog';
import { Button } from '@/components/shadcn/ui/button';

import { TeamsType } from '@/constant/types/models';


type Props = {
    open: boolean,
    onClose: () => void,
    data: TeamsType;
}

const DeleteMember = ({ open, onClose, data}: Props) => {
    // const [step, setStep] = useState(1);
    // const [confirmText, setConfirmText] = useState("");

    // const handleDelete = () => {
      
    // };

    // const handleConfirmTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setConfirmText(e.target.value);
    // };

    // const handleNextStep = () => {
    //     setStep(2);
    // };

    const handleCancel = () => {
        // setStep(1);
        // setConfirmText("");
        onClose();
    };

  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className=''>
            <DialogTitle className="hidden" />
            <DialogHeader>
                <h2 className='font-semibold text-xl'>Confirmation</h2>
            </DialogHeader>
                <p>Are you sure you want to delete
                    <span className="font-semibold px-1">
                        {data?.name}
                    </span>?
                </p>
                <div className="flex gap-2 items-end w-full justify-end">
                    <Button onClick={onClose} variant="destructive">
                        Yes, proceed
                    </Button>
                    <Button onClick={handleCancel} variant="secondary">
                        Cancel
                    </Button>
                </div>
        </DialogContent>
    </Dialog>
  )
}

export default DeleteMember
