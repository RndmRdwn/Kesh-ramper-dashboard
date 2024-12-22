import { Label } from '@/components/shadcn/ui/label';
import { Separator } from '@/components/shadcn/ui/separator';
import React from 'react';


const KycProof = () => {


    return (
        <div className='grid gap-2 pb-4'>
           <Label className='text-md'>ID Proof & Selfie</Label>
            <Separator />
            <div>
                <h2 className='text-sm '>
                    Proof Yourself (KYC Screens...)
                </h2>
            </div>
        </div>
    );
};
export default KycProof;
