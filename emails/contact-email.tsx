import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Img,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactEmailProps = {
  name: string
  email: string
  message: string
}

export default function ContactEmail({
  name,
  email,
  message
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Information about your contact form submission</Preview>
      <Tailwind>
        <Body className='bg-zinc-100 font-sans text-black'>
          <Container className='mx-auto mt-5'>
            <Section className='border'>
              <Heading className='text-center text-xl font-semibold leading-tight'>
                Thank You for Reaching Out!
              </Heading>
              <Text className='px-3 text-lg'>
                Dear <strong>{name}</strong>,
              </Text>
              <Text className='px-3'>
                Thank you for contacting me. I&apos;ve received your message and
                appreciate you taking the time to reach out.
              </Text>
              <Text className='mx-6 rounded-lg bg-zinc-200 p-2'>{message}</Text>
              <Text className='px-3'>
                I will review your message and get back to you as soon as
                possible.
              </Text>
              <Text className='px-3'>
                In the meantime, if you need anything else, feel free to reply
                to this email.
              </Text>
              <Text className='px-3'>
                Best regards,
                <br />
                Maciej Dąbek
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
