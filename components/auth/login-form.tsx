'use client'

import React from 'react'
import CardWrapper from '@/components/auth/card-wrapper'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormItem,
    FormMessage
} from '@/components/ui/form'
import { LoginSchema } from '@/schemas'
import * as z from 'zod'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'





const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values)
    }

    return (
        <CardWrapper
            headerLabel='Welcome back!'
            backButtonLabel={`Don't have an account?`}
            backButtonhref='/auth/register'
            socials
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit((data) => console.log(data))}
                    className='space-y-4'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='email'
                                            placeholder='Enter your email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder='Enter your password'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormError message='Something went wrong!' />
                        <FormSuccess message='Email Sent.' />

                        <Button
                            className='w-full'
                            type='submit'
                            size='lg'
                        >
                            Login

                        </Button>

                    </div>

                </form>
            </Form>
        </CardWrapper >
    )
}

export default LoginForm