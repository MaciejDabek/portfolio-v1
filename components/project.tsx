'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

import { projectsData } from '@/content/content'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ExternalLinkIcon, Scale } from 'lucide-react'

type ProjectProps = { project: (typeof projectsData)[number] }

export default function Project({
  project: { category, name, description, keywords, image, link, githubLink }
}: ProjectProps) {
  return (
    <motion.li
      className='relative max-w-2xl'
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 1 }}
      viewport={{ once: true, margin: '200px' }}
    >
      <div className='flex translate-y-4 items-center justify-between rounded-lg bg-muted px-4 py-2 pb-6'>
        <p className='text-xl font-bold md:w-[100px]'>{name}</p>
        <p className='font-mono text-sm font-semibold text-primary md:w-[100px]'>
          {category}
        </p>
        <div className='flex items-center justify-end gap-3 md:w-[100px]'>
          <a href={link} target='_blank' className='gc-link'>
            <ExternalLinkIcon />
          </a>
          <a href={githubLink} target='_blank' className='gc-link'>
            <GitHubLogoIcon className='size-5' />
          </a>
        </div>
      </div>
      <div className='relative z-10 mx-auto'>
        <Image
          src={image}
          alt={`Image representing project '${name}'`}
          className='rounded-xl'
        />
      </div>
      <div className='-translate-y-4 space-y-3 rounded-lg bg-muted px-4 py-3 pt-6'>
        <p className='text-sm'>{description}</p>

        <ul className='flex flex-wrap justify-end gap-2 font-mono text-xs'>
          {keywords.map(word => (
            <li
              key={word}
              className='text-nowrap rounded-full bg-secondary px-2 py-1 text-secondary-foreground'
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}
