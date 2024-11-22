import { Metadata } from 'next';
import Link from 'next/link';
import SignInForm from './components/sign-in-form';
import { buttonVariants } from '@/components/shadcn/ui/button';
import { cn } from '@/lib/utils';
import { AppIcon } from '@/constant/icons';

export const metadata: Metadata = {
    title: 'sign-in',
    description: 'Sign in to your account',
};

const SignInPage = () => {
    return (
        <>
            <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href="/auth/sign-up"
                    className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'absolute left-4 top-4 md:left-8 md:top-8'
                    )}
                >
                    Sign up
                </Link>
                
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Welcome back! 👋
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your credentials to access the dashboard.
                            </p>
                        </div>
                        <SignInForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{' '}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary" />
                        <div className="relative z-20 flex items-center gap-3 text-black text-lg font-medium">
                            <AppIcon className="h-8 w-8" />
                                Keshflip
                        </div>
                    <div className="z-50 flex items-center justify-center h-full">
                     
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
