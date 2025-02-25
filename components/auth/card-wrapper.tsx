import React from 'react'
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardContent
} from '@/components/ui/card'
import Header from '@/components/auth/header'
import Socials from '@/components/auth/socials'
import BackButton from '@/components/auth/back-button'




interface CardWrapperProps {
    children: React.ReactNode,
    backButtonhref: string,
    backButtonLabel: string,
    headerLabel: string,
    socials?: boolean
}


const CardWrapper = ({
    children,
    backButtonhref,
    backButtonLabel,
    socials,
    headerLabel
}: CardWrapperProps) => {
    return (
        <Card>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                socials && (
                    <CardFooter>
                        <Socials />
                    </CardFooter>

                )
            }
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonhref} />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper