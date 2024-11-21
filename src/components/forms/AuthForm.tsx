
import * as React from "react"
import { Icons } from "@/constant/icons"
import { Button } from "@/components/shadcn/ui/button"
import { Input } from "@/components/shadcn/ui/input"
import { Label } from "@/components/shadcn/ui/label"
import { CustomInputOTP } from "./CustomInputOTP"

interface Form01Type {
    isLoading: boolean, 
    passValue?: string, 
    emailValue?: string, 
    phoneValue?: string, 
    otpValue?: string, 
    handleChange: (value: string, name: string) => void;
}

export function UserAuthForm({ isLoading, emailValue, handleChange} : Form01Type) {
  return  (
    <>
    <div className="grid gap-2 pt-4">
      <div className="grid gap-2">
        <Label className="" htmlFor="email">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
          value={emailValue}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </div>
      <Button disabled={isLoading}>
        {isLoading && (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        )}
        Sign In with Email
      </Button>
    </div>
    <div className="relative mt-4">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-4">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => ''}
      >
        <Icons.apple className="mr-2 h-4 w-4" /> Apple
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => ''}
      >
        <Icons.google className="mr-2 h-4 w-4" /> Google
      </Button>
    </div>
  </>
  );
}
export const PasswordStep = ({ isLoading, passValue, handleChange} : Form01Type) => {
    return (
        <div className="grid gap-2 pt-4">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
                value={passValue}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Next
            </Button>
        </div>
    )
}
export const PhoneNumberStep = ({ isLoading, phoneValue, handleChange} : Form01Type) => {
    return (
        <div className="grid gap-2 pt-4">
            <div className="grid gap-1">
            <Label className="sr-only" htmlFor="phoneNumber">
                Phone Number
            </Label>
            <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                type="tel"
                autoCapitalize="none"
                autoComplete="tel"
                autoCorrect="off"
                disabled={isLoading}
                value={phoneValue}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
            </div>
            <Button disabled={isLoading}>
            {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Set Up 2FA
            </Button>
        </div>
    )
}
export const TwoFactorAuthStep = ({ isLoading, otpValue, handleChange} : Form01Type) => {
    return (
        <div className="grid gap-2 pt-4">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="otp">
                OTP
              </Label>
              <CustomInputOTP otpValue={otpValue}
                handleOtpChange={(value) => handleChange(value, "otp")}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Verify
            </Button>
          </div>
    )
}