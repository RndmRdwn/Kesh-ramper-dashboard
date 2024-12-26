import { SelectCompanyType } from '@/components/kesh-components/SelectCompanyType'
import { Button } from '@/components/shadcn/ui/button'
import { Checkbox } from '@/components/shadcn/ui/checkbox'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const RegisterForm = (props: Props) => {
  return (
    <div className='flex flex-col gap-6 py-4'> 
      <div className="grid gap-6">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" type="text" placeholder="Full Name" className='rounded-lg border-primary/20 text-sm' required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" type="text" placeholder="Last Name" className='rounded-lg border-primary/20 text-sm' required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Enter your email address" className='rounded-lg border-primary/20 text-sm' required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="companyType">Company Type</Label>
          <SelectCompanyType />
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required className='rounded-lg border-primary/20 text-sm'/>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input id="confirmpassword" type="password" required className='rounded-lg border-primary/20 text-sm'/>
        </div>
        <div className='text-sm flex gap-2 items-center'>
          <Checkbox id='iAgree'/>
          <Label htmlFor='iAgree' className='text-muted-foreground'>I Agree to terms and conditions</Label>
        </div>
        
        <Link href={'/on-boarding'}>
          <Button type="submit" className="w-full py-5">
              Create Account
          </Button>
        </Link>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or 
          </span>
        </div>
        <Button variant="outline" className="w-full py-5">
          <Image src={'/assets/google.svg'} alt='googleSvg' width={15} height={15}/>
          Sign up with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/sign-in" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </div>
  )
}

export default RegisterForm