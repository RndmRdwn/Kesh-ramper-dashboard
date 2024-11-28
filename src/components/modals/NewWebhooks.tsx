import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../shadcn/ui/dialog';
import { Button } from '../shadcn/ui/button';
import CustomTextField from '../forms/custom-textfield';
import { toast } from 'sonner';
import CustomTextArea from '../forms/Custom-TextArea';
import { CustomSelect } from '../shared/CustomSelect';
import { DefaultSelectType } from '@/constant/types/common';
import { Label } from '../shadcn/ui/label';
import { webhookType } from '@/app/(dashboard)/settings/developers/web_hooks/page';

type Props = {
  open: boolean;
  onClose: (isOpen: boolean, newWebhook?: webhookType) => void;
};

const NewWebhook = ({ open, onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    webhook_url: '',
    event: '',
  });

  const eventOptions: DefaultSelectType[] = [
    { id: 1, name: 'When a new transaction created', value: 'transaction_created' },
    { id: 2, name: 'When a transaction is successful', value: 'transaction_successful' },
    { id: 3, name: 'When a transaction failed', value: 'transaction_failed' },
    { id: 4, name: 'When an event happens', value: 'event_4' },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.webhook_url || !formData.event) {
      toast.error('Please fill all fields');
      return;
    }
    onClose(false, formData); // Pass the created webhook back to the parent
    toast.success('New Webhook has been created');
    setFormData({ name: '', webhook_url: '', event: '' }); // Reset form
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => onClose(isOpen)}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-medium text-base">Add Webhook</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <CustomTextField
            label="Name"
            isEditable
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter Webhook name"
            type="text"
            value={formData.name}
          />
          <div>
            <CustomTextArea
              label="Webhook URL"
              isEditable
              onChange={(e) => handleChange('webhook_url', e.target.value)}
              placeholder="https://"
              value={formData.webhook_url}
            />
            <p className="text-xs text-muted-foreground py-1">
              Enter the URL where your webhook should send data
            </p>
          </div>
          <div>
            <Label>Event to send</Label>
            <CustomSelect
              data={eventOptions}
              onChange={(val) => handleChange('event', val)}
              placeholder="Select"
              value={formData.event}
              isEditable
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave} className="w-full">
            Save Webhook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewWebhook;
