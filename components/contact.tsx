'use client'

import { motion } from 'framer-motion'

import ContactForm from './contact-form'
import SectionHeading from './section-heading'

import { myEmail } from '@/content/content'

export default function Contact() {
  return (
    <section id='contact'>
      <div className='container mb-28 max-w-4xl'>
        <SectionHeading text='Contact'></SectionHeading>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}
        >
          <p className='text-sm text-muted-foreground sm:text-center'>
            You can contact me directly at{' '}
            <a
              href={`mailto:${myEmail}`}
              className='font-semibold hover:underline'
            >
              {myEmail}
            </a>{' '}
            or trough this form.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
