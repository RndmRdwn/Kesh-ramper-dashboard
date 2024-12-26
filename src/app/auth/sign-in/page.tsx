import { Metadata } from 'next';
import Link from 'next/link';
import SignInForm from './components/sign-in-form';
import { buttonVariants } from '@/components/shadcn/ui/button';
import { cn } from '@/lib/utils';
import { AppIcon } from '@/constant/icons';
import { AuthTabs } from '@/components/authTabs';
import Sample from './sample';

export const metadata: Metadata = {
    title: 'sign-in',
    description: 'Sign in to your account',
};

const SignInPage = () => {
    return (
        <>
        <Sample />
        </>
    );
};

export default SignInPage;
