'use client'

import { animate, motion } from 'framer-motion'

import Link from 'next/link'
import { Button } from './ui/button'

export default function Intro() {
  return (
    <section
      id='intro'
      className='relative flex min-h-screen items-center justify-center'
    >
      <div className='container'>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 }}
          viewport={{
            once: true
          }}
          className='mb-5 text-7xl font-bold text-primary'
        >
          Hi, I&apos;m Maciej
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.64 }}
          viewport={{
            once: true
          }}
          className='font-inter mb-3 text-3xl font-semibold md:text-4xl'
        >
          A Web Developer with&nbsp;Expertise in&nbsp;Software&nbsp;Engineering
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{
            once: true
          }}
          className='mb-7 max-w-prose text-base text-muted-foreground'
        >
          From developing complex systems to building engaging web apps, I bring
          a&nbsp;unique blend of technical know-how with a passion for creating
          innovative web solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.96 }}
          viewport={{
            once: true
          }}
          className='flex flex-wrap gap-4 md:gap-6'
        >
          <Button size='lg'>
            <Link href='#contact'>Get in touch</Link>
          </Button>
          <Button size='lg' variant='secondary' asChild>
            <a href='/CV-Maciej-Dabek.pdf' download>
              Download CV &darr;
            </a>
          </Button>
        </motion.div>
      </div>
      <div className='absolute bottom-0 left-1/2 hidden h-[80px] w-[1px] bg-muted md:block' />
    </section>
  )
}
