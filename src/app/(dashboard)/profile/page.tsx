import { Button } from '@/components/shadcn/ui/button'
import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'
import { Separator } from '@/components/shadcn/ui/separator'
import { Plus } from 'lucide-react'
import React from 'react'


const ProfilePage = () => {
  return (
    <div className='max-w-5xl grid gap-3 mx-auto'>
        <h2 className='text-xl font-medium'>Profile</h2>
        <div className='w-full grid  py-4   gap-4'>
                <div className=' '>
                    User
                    <Separator />
                </div>
                <div className='grid grid-cols-7 '>
                    <div className='col-span-2 flex items-center'>
                        <Label>Name</Label>
                    </div>
                    <div className='col-span-3 '>
                        <Input placeholder='Null User' />
                    </div>
                </div>
                <div className='grid grid-cols-7 '>
                    <div className='col-span-2 flex items-center'>
                        <Label>Email Address</Label>
                    </div>
                    <div className='col-span-3 '>
                        <Input placeholder='business@example.com' />
                    </div>
                </div>
                <div className='grid grid-cols-7 '>
                    <div className='col-span-2 flex items-center'>
                        <Label>Password</Label>
                    </div>
                    <div className='col-span-3 '>
                        <Input type='password'  placeholder='your password' />
                    </div>
                </div>
        </div>
        <div className='w-full grid  py-4   gap-4'>
                <div className=' '>
                    <div className=''>
                        <h2>Two-step authentication</h2>
                        <p className='text-sm text-muted-foreground pb-2'>Increase security for your account by using multiple authentication methods.</p>
                    </div>
                    <Separator />
                </div>
                <div className='flex'>
                   <Button variant='outline'><Plus/> Add Authentication Method</Button>
                </div>
        </div>
        <div className='w-full grid  py-4   gap-4'>
                <div className=' '>
                    <div className=''>
                        <h2>Login sessions</h2>
                        <p className='text-sm text-muted-foreground pb-2'>Places where you are logged into Keshflip.</p>
                    </div>
                    <Separator />
                </div>
        </div>
        <div className='w-full grid  py-4   gap-4'>
                <div className=' '>
                    <div className=''>
                        <h2>Accounts</h2>
                        <p className='text-sm text-muted-foreground pb-2'>The list of accounts to which you are a member..</p>
                    </div>
                    <Separator />
                </div>
        </div>
    </div>
  )
}

export default ProfilePage