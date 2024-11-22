'use client'

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog"
import { Button } from '../shadcn/ui/button'
import MainWidget from './main-widget';

export const PreviewWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string>('Sign In');
  const [desc, setDesc] = useState<string>('Please sign in to proceed.');
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    // Update title and description based on the current step
    switch (step) {
      case 1:
        setTitle('Sign In');
        setDesc('Please sign in to proceed.');
        break;
      case 2:
        setTitle('Enter Password');
        setDesc('Enter your password to continue.');
        break;
      case 3:
        setTitle('Two-Factor Authentication');
        setDesc('Verify your identity with the authentication code.');
        break;
      case 4:
        setTitle('Account Set Up Complete');
        setDesc('Your account is now ready. Proceed to the dashboard.');
        break;
      case 5:
        setTitle('Payment Process');
        setDesc('Complete the steps to finalize your payment.');
        setIsOpen(false);  // Close the PreviewWidget when reaching step 5
        break;
      default:
        setTitle('Payment Process');
        setDesc('Complete the steps to finalize your payment.');
        break;
    }
  }, [step]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline">Preview widget auth</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader className="w-full flex items-center">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{desc}</DialogDescription>
          </DialogHeader>
          <MainWidget setIsOpen={setIsOpen} step={step} setStep={setStep} />
        </DialogContent>
      </Dialog>
    </>
  );
}
