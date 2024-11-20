'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/shadcn/ui/label';
import { Input } from '@/components/shadcn/ui/input';
import { Button } from '@/components/shadcn/ui/button';
import { LoaderCircle } from 'lucide-react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {};

const SignInForm = ({ className, ...props }: UserAuthFormProps) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1 mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            className="h-10"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid gap-1 mb-5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="your password"
                            type="password"
                            className="h-10"
                            disabled={isLoading}
                        />
                    </div>

                    <Button disabled={isLoading} className="h-10">
                        {isLoading && (
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign in
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                type="button"
                disabled={isLoading}
                className="h-10"
            >
                {isLoading ? (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                            fill="#fbbb00"
                            data-original="#fbbb00"
                        ></path>
                        <path
                            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                            fill="#518ef8"
                            data-original="#518ef8"
                        ></path>
                        <path
                            d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                            fill="#28b446"
                            data-original="#28b446"
                        ></path>
                        <path
                            d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                            fill="#f14336"
                            data-original="#f14336"
                        ></path>
                    </svg>
                )}{' '}
                Google
            </Button>
        </div>
    );
};

export default SignInForm;
