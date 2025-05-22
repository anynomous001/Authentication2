'use client'

import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

const Socials = () => {
    const onclick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        });
    }

    return (
        <div className= "flex items-center w-full gap-x-2" >
        <Button
                size="lg"
    variant = "outline"
    className = "w-full"
    onClick = {() => onclick("google")}
            >
    <FcGoogle className="h-5 w-5 mr-2" />
        Google
        </Button>
        < Button
size = "lg"
variant = "outline"
className = "w-full"
onClick = {() => onclick("github")}
            >
    <FaGithub className="h-5 w-5 mr-2" />
        Github
        </Button>
        </div>
    )
}

export default Socials