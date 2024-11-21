import React from 'react'
import { PasswordStep, TwoFactorAuthStep, UserAuthForm } from '@/components/forms/AuthForm';
import { Button } from '@/components/shadcn/ui/button';
import { Icons } from '@/constant/icons';

type Props = {
    step: number;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
  }
  
  const MainWidget = ({ step, setStep, setIsOpen }: Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [formData, setFormData] = React.useState({
      email: "",
      password: "",
      phoneNumber: "",
      otp: "",
    });
  
    const handleChange = ( value: string, name: string,) => {
      setFormData({ ...formData, [name]: value });
    };
  
    const nextStep = () => setStep((prev) => prev + 1);

    const handleSubmit = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      setIsLoading(true);
  
      // Simulate an async operation
      setTimeout(() => {
        setIsLoading(false);
        if (step < 5) {
          nextStep(); // Go to the next step
        }
        if (step === 5) {
          setIsOpen(false); // Close the dialog when step 5 is reached
        }
      }, 500); // Simulating a delay (e.g., API request)
    };

    
  return (
    <div>
        <div className={''} >
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <UserAuthForm handleChange={(val, name) => handleChange(val, name)} isLoading={isLoading} 
                        emailValue= {formData.email} />
                )}
                {step === 2 && (
                    <PasswordStep handleChange={(val, name) => handleChange(val, name)} isLoading={isLoading} 
                        passValue={formData.password} />
                )}
                {step === 3 && (
                    <TwoFactorAuthStep handleChange={(val, name) => handleChange(val, name)} isLoading={isLoading} 
                        otpValue={formData.otp} />
                )}
                {step === 4 && (
                    <div className="grid gap-2 pt-4">
                        <h2 className="text-lg font-medium">Account Set Up Complete</h2>
                        <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Go to Dashboard
                        </Button>
                    </div>
                )}

            </form>
        </div>
    </div>
  )
}

export default MainWidget