'use client';

import * as React from 'react';
// import { useRouter } from 'next/navigation'; // Use the router for redirection
import { Label } from '@/components/shadcn/ui/label';
import { Input } from '@/components/shadcn/ui/input';
import { Button } from '@/components/shadcn/ui/button';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';


const SignUpForm = ({isFinished} : {isFinished: () => void}) => {
    // const router = useRouter(); // Next.js router for redirection
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
        if (step < 3) setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep((prev) => prev - 1);
    };

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            // Simulate API request for account creation
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Redirect to onboarding page
            // router.push('/on-boarding');
            isFinished()
        } catch (error) {
            console.error('Error during sign-up:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`'grid gap-6'`}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    {/* Step 1: Email */}
                    {step === 1 && (
                        <div className="grid gap-2 ">
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

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                        <div className="text-center">
                            <h2 className="text-lg font-bold">Almost there!</h2>
                            <p className="text-sm text-muted-foreground">
                                Click <strong>Finish</strong> to complete your sign-up process.
                            </p>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="grid place-items-center gap-2 mt-4">
                        {/* Next or Finish Button */}
                        {step < 3 && (
                            <Button
                                type="button"
                                size='lg'
                                disabled={isLoading || !formData[step === 1 ? 'email' : 'password']}
                                onClick={handleNext}
                                className="w-full px-24"
                            >
                                Continue
                            </Button>
                        )}
                        {step === 3 && (
                            <Button
                                type="submit"
                                size='lg'
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
                                size='lg'
                                disabled={isLoading}
                                onClick={handleBack}
                                className="w-full px-24"
                            >
                                Back
                            </Button>
                        )}
                    </div>

                    {step == 1 && (
                        <div className='pt-8'>
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
                    )}
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
