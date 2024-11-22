'use client';


// import { Metadata } from 'next';
import Link from 'next/link';
import SignUpForm from './components/sign-up-form';
import { buttonVariants } from '@/components/shadcn/ui/button';
import { cn } from '@/lib/utils';
import RightSide from './components/right-side';
import { useState } from 'react';
import BoardingStairs from '@/app/on-boarding/boarding-stairs';

// export const metadata: Metadata = {
//     title: 'sign-up',
//     description: 'Sign up for an account',
// };

const SignUpPage = () => {

    const [onBoarding, setOnBoarding] = useState(false)

    return (
        <>
            <div className={` relative lg:px-0 h-screen grid items-center justify-center 
                    transition-all duration-500 w-full gap-5 ${
                    onBoarding ? 'lg:grid-cols-[1fr_3fr]' : 'lg:grid-cols-[1fr_1fr]'
                    }`}
                >
                {!onBoarding && (
                    <Link
                    href="/auth/sign-in"
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'absolute right-4 top-4 md:right-8  md:top-8'
                    )}
                    >
                    Sign in
                    </Link>
                )}
                <RightSide/>

                <div className={`transition-all duration-500 ${onBoarding ? 'col-span-1' : 'col-span-1'}`}>
                    {!onBoarding ? (
                        <div className="mx-auto flex w-full flex-col h-full justify-center space-y-6 sm:w-[450px]">
                            <div className="flex flex-col space-y-2 text-center">
                                <h1 className="text-2xl font-semibold tracking-tight">
                                    Create an account
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Create an account to get started
                                </p>
                            </div>
                            <SignUpForm isFinished={() => setOnBoarding(!onBoarding)}/>
                        
                        </div>
                    ) : (
                        <BoardingStairs />
                    )}

                </div>
            </div>
        </>
    );
};

export default SignUpPage;
