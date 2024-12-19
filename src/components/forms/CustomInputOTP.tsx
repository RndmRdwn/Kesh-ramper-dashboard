import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import { useState, useEffect } from 'react'

export function CustomInputOTP({
    otpValue,
    handleOtpChange,
  }: {
    otpValue?: string;
    handleOtpChange: (value: string) => void;
  }) {
    const [value, setValue] = useState(otpValue || "");
  
    useEffect(() => {
      handleOtpChange(value);
    }, [value, handleOtpChange]);
  
    return (
      <div className="space-y-2 flex flex-col items-center">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot className="text-lg" index={0} />
            <InputOTPSlot className="text-lg" index={1} />
            <InputOTPSlot className="text-lg" index={2} />
          </InputOTPGroup>
            <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot className="text-lg" index={3} />
            <InputOTPSlot className="text-lg" index={4} />
            <InputOTPSlot className="text-lg" index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {value === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {value}</>
          )}
        </div>
      </div>
    );
  }