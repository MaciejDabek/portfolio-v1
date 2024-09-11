'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-email'
import { myEmail, myGmail } from '@/content/content'
import { getErrorMessage } from './utils'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  console.log('#1')
  const result = ContactFormSchema.safeParse(data)
  console.log('#2')
  if (result.error) {
    return { error: result.error.format() }
  }
  console.log('#3')

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: [myGmail],
      cc: [email],
      replyTo: email,
      subject: 'Contact form submission',
      react: ContactFormEmail({ name, email, message })
    })
    console.log('#4')

    if (!data || error) {
      console.log('#E', error)
      throw new Error('Failed to send email')
    }
    console.log('#5')

    return { success: true }
  } catch (error: unknown) {
    console.log('#E', { error: getErrorMessage(error) })
    return { error: getErrorMessage(error) }
  }
}
