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

    const [onBoarding, setOnBoarding] = useState(true)

    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {!onBoarding && (
                    <Link
                        href="/auth/sign-in"
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'absolute left-4 top-4 md:left-8  md:top-8'
                        )}
                    >
                        Sign in
                    </Link>
                )}
                <div className="lg:p-8 h-full">
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
                <RightSide />
            </div>
        </>
    );
};

export default SignUpPage;
