import { Metadata } from 'next';
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
