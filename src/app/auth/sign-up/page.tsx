import { Metadata } from 'next';
import Link from 'next/link';
import SignUpForm from './components/sign-up-form';
import { buttonVariants } from '@/components/shadcn/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'sign-up',
    description: 'Sign up for an account',
};

const SignInPage = () => {
    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="/auth/sign-in"
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'absolute left-4 top-4 md:left-8  md:top-8'
                    )}
                >
                    Sign in
                </Link>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Create an account to get started
                            </p>
                        </div>
                        <SignUpForm />
                       
                    </div>
                </div>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/70" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        easy-ramp
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInPage;
