import { Button } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <div className='flex flex-col gap-6 py-4'>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" className='rounded-lg border-primary/20 text-sm' required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
            <div className='flex flex-col gap-2'>
                <Input id="password" type="password" required className='rounded-lg border-primary/20 text-sm'/>
                <div className=' flex gap-2 items-center'>
                    <span className=' text-xs'>
                    Forgot your password?
                    </span>
                    <a href="#"
                        className=" font-medium text-xs underline-offset-4 hover:underline" >
                        Reset here
                    </a>
                </div>
            </div>
        </div>
        
          <Link href={'/overview'}>
            <Button type="submit" className="w-full py-5">
              Login
            </Button>
          </Link>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or 
          </span>
        </div>
        <Button variant="outline" className="w-full py-5">
          <Image src={'/assets/google.svg'} alt='googleSvg' width={15} height={15}/>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/auth/sign-up" className="underline underline-offset-4">
          Sign up
        </a>
      </div>

      
    </div>
  )
}

export default LoginForm