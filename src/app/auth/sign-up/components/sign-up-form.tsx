'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/shadcn/ui/label';
import { Input } from '@/components/shadcn/ui/input';
import { Button } from '@/components/shadcn/ui/button';
import { LoaderCircle } from 'lucide-react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const SignUpForm = ({ className, ...props }: UserAuthFormProps) => {
    const [step, setStep] = React.useState<number>(1);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
    });

    const [passwordError, setPasswordError] = React.useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (id === 'confirmPassword' || id === 'password') {
            setPasswordError(null); // Clear password error when user types
        }
    };

    const handleNext = () => {
        if (step === 2 && formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords don't match.");
            return;
        }
        if (step < 4) setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep((prev) => prev - 1);
    };

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setIsLoading(true);

        // Simulate API request
        setTimeout(() => {
            setIsLoading(false);
            alert('Sign-up completed!');
        }, 3000);
    };

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    {/* Step 1: Email */}
                    {step === 1 && (
                        <div className="grid gap-1 mb-5">
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
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    {/* Step 2: Password */}
                    {step === 2 && (
                        <>
                            <div className="grid gap-1 mb-5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    placeholder="your password"
                                    type="password"
                                    className="h-10"
                                    disabled={isLoading}
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-1 mb-5">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    placeholder="confirm password"
                                    type="password"
                                    className="h-10"
                                    disabled={isLoading}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            {passwordError && (
                                <p className="text-sm text-red-500">{passwordError}</p>
                            )}
                        </>
                    )}

                    {/* Step 3: Personal Information */}
                    {step === 3 && (
                        <div className="grid gap-1 mb-5">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                type="text"
                                className="h-10"
                                disabled={isLoading}
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    {/* Step 4: Onboarding */}
                    {step === 4 && (
                        <div className="text-center">
                            <h2 className="text-lg font-bold">
                                Welcome, {formData.fullName || 'User'}!
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Your account is being set up. Please wait.
                            </p>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="grid place-items-center gap-2 mt-4">
                        {/* Next or Finish Button */}
                        {step < 4 && (
                            <Button
                                type="button"
                                disabled={isLoading || !formData[step === 1 ? 'email' : step === 2 ? 'password' : 'fullName']}
                                onClick={handleNext}
                                className="w-full px-24"
                            >
                                Next
                            </Button>
                        )}
                        {step === 4 && (
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-24"
                            >
                                {isLoading && (
                                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Finish
                            </Button>
                        )}

                        {/* Back Button */}
                        {step > 1 && (
                            <Button
                                variant="outline"
                                type="button"
                                disabled={isLoading}
                                onClick={handleBack}
                                className="w-full px-24"
                            >
                                Back
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
