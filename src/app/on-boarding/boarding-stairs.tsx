import { Button } from '@/components/shadcn/ui/button'
import React from 'react'
import PersonalInfo from './personal-info'
import CompanyInfo from './company-info'
import { Progress } from '@/components/shadcn/ui/progress'
import { Label } from '@/components/shadcn/ui/label'
import { useRouter  } from 'next/navigation'


const BoardingStairs = () => {

    const [step, setStep] = React.useState<number>(1);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [progress, setProgress] = React.useState(13)
    const router = useRouter()
   
  React.useEffect(() => {
        // Update progress based on step
        if (step === 1) setProgress(0);
        else if (step === 2) setProgress(33);
        else if (step === 3) setProgress(66);
        else if (step === 4) setProgress(100);
    }, [step]);
    const handleNext = async () => {
        // if (step === 2 && formData.password !== formData.confirmPassword) {
        //     setPasswordError("Passwords don't match.");
        //     return;
        // }
        setIsLoading(true);
         try {
             // Simulate API request for account creation
             await new Promise((resolve) => setTimeout(resolve, 500));
             setProgress(66)
             // Redirect to onboarding page
         } catch (error) {
             console.error('Error during sign-up:', error);
         } finally {
             setIsLoading(false);
         }

        if (step < 4) setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep((prev) => prev - 1);
    };
    const handleFinish = () => {
        // await new Promise((resolve) => setTimeout(resolve, 500));
        router.push('/overview');

    };

    //  const handleSubmit = async () => {
    //      setIsLoading(true);
    //      try {
    //          // Simulate API request for account creation
    //          await new Promise((resolve) => setTimeout(resolve, 500));

    //          // Redirect to onboarding page
    //          router.push('/overview');
    //      } catch (error) {
    //          console.error('Error during sign-up:', error);
    //      } finally {
    //          setIsLoading(false);
    //      }
    //  };

  return (
    <div className=' p-2 m-auto  h-full relative flex flex-col gap-2 md:px-0  '>
        <div className='grid h-fit  lg:px-9'>
            {step === 1 && (
                <div className='py-4  flex  gap-4 flex-col justify-center items-center '>
                    <Label className='font-medium text-base text-muted-foreground'>{step} / 2</Label>
                    <h2 className='text-3xl font-semibold'>Company Profile</h2>
                    <h2 className='text-sm text-muted-foreground/80 text-center'>
                        Please fill in details about your case and legal entity. This information will help us throughly evaluate and determine if we can onboard you as a valued partner.
                    </h2>
                </div>
            )}
            {step === 2 && (
                <div className='py-4  flex  gap-4 flex-col justify-center items-center'>
                    <Label className='font-medium text-base text-muted-foreground'>{step} / 2</Label>
                    <h2 className='text-3xl font-semibold'>Company Details</h2>
                    <h2 className='text-sm text-muted-foreground text-center'>
                        Please provide additional details about your company, including revelant information that gives us a comprehensive understanding of your operations and objectives.
                    </h2>
                </div>
            )}

        </div>
        
        <div className=' w-full h-full px-20   '>
            {step === 1 && (
                <div className=' grid  w-full'>
                    <PersonalInfo handleNext={handleNext}/>
                </div>
            )}
            {step === 2 && (
                <div className=' grid  w-full'>
                    <CompanyInfo handleFinish={handleFinish}/>
                </div>
            )}

        </div>
                
    </div>
  )
}


export default BoardingStairs