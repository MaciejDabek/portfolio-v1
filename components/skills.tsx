'use client'
import { motion } from 'framer-motion'

import SectionHeading from './section-heading'

import { skillsData } from '@/content/content'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  }),
  hover: {
    scale: 1.05
  }
}

export default function Skills() {
  return (
    <section id='skills'>
      <div className='container max-w-4xl'>
        <SectionHeading text='Skills' />

        <ul className='mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-gray-800'>
          {skillsData.map((skill, index) => (
            <motion.li
              className='cursor-default rounded-xl bg-secondary px-5 py-3 text-secondary-foreground'
              key={index}
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              whileHover='hover'
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
