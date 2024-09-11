'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import AboutMore from './about-more'
import SectionHeading from './section-heading'

import meImage from '/public/images/me.webp'

export default function About() {
  return (
    <section id='about'>
      <div className='container'>
        <SectionHeading text='About' />
        <div className='flex flex-col-reverse gap-8 md:flex-row'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{
              once: true
            }}
            className='space-y-4'
          >
            <p>
              My name is <span className='text-primary'>Maciej Dąbek</span>. My
              career began at{' '}
              <a
                href='https://versabox.eu/'
                className='text-primary hover:underline'
              >
                Versabox
              </a>
              , where I worked on developing complex robotic systems and leading
              technical teams in the creation of innovative solutions.
            </p>

            <p>
              After a year of travel and exploring different cultures, I decided
              to pivot my career to web development. I dedicated the last half a
              year to mastering modern web technologies, with a particular
              emphasis on <span className='text-primary'>React</span>.
            </p>

            <p>
              Now, I’m excited to bring my technical expertise and
              problem-solving abilities into the world of web development,
              creating user-friendly, innovative solutions that make an impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{
              once: true
            }}
            className='relative mx-auto h-fit min-w-[180px] max-w-[220px] rounded-md before:absolute before:-z-10 before:h-full before:w-full before:translate-x-2 before:translate-y-2 before:rounded-md before:bg-primary'
          >
            <Image
              src={meImage}
              alt='Photo of author'
              className='z-10 overflow-hidden rounded-md'
            ></Image>
          </motion.div>
        </div>
        {/* <AboutMore /> */}
      </div>
    </section>
  )
}
