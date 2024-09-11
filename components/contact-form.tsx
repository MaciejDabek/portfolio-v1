'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    console.log('Submit', data)
    const result = await sendEmail(data)

    console.log(result)

    if (result?.error) {
      toast.error('An error occurred! Please try again.')
      return
    }

    toast.success('Message sent successfully!')
    // reset()
  }

  return (
    <div className='relative isolate mx-auto mt-6 max-w-xl rounded-lg p-8'>
      {/* Form */}
      <div className='relative'>
        <form
          onSubmit={handleSubmit(processForm)}
          className='lg:flex-auto'
          noValidate
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='given-name'
                {...register('name')}
              />

              {errors.name?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type='email'
                id='email'
                autoComplete='email'
                placeholder='Email'
                {...register('email')}
              />

              {errors.email?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
              />

              {errors.message?.message && (
                <p className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className='mt-6 flex justify-center'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-[50%] disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Contact Me'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
