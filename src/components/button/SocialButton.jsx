'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SocialButton = () => {
    const params =useSearchParams();
    const callbackUrl = params.get('callbackUrl') || '/';

    const handleSignIn=()=>{
        const result= signIn("google", { callbackUrl  })
        
    }
    return (
        
        <button
            onClick={handleSignIn}
            className="w-full py-2 rounded-lg btn btn-primary btn-outline flex items-center justify-center gap-2"
        >
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
            />
            Continue with Google
        </button>
    );
};

export default SocialButton;