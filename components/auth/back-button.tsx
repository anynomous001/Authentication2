'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BackButtonProps {
    href: string
    label: string
}


const BackButton = ({ href, label }: BackButtonProps) => {
    return (
        <Button
            size={"sm"}
            variant={"link"}
            className='w-full'
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    )
}

export default BackButton