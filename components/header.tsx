'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import ThemeToggle from './theme-toggle'
import HamburgerMenu from './hamburger-menu'
import { useActiveSection } from '@/lib/hooks'

import { navData } from '@/content/content'
import { cn } from '@/lib/utils'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.2
    }
  })
}

export default function Header() {
  const { activeSection, linkToSection } = useActiveSection()

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-3 backdrop-blur-sm md:py-4'>
      <nav className='container flex max-w-6xl items-center justify-between'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Link href='/'>
            <span className='font-logo text-4xl font-black text-primary'>
              MD
            </span>
          </Link>
        </motion.div>

        <ul className='hidden gap-8 md:flex'>
          {navData.map(data => (
            <motion.li
              key={data.href}
              variants={fadeInAnimationVariants}
              initial='initial'
              animate='animate'
            >
              <Link
                href={data.href}
                onClick={() => linkToSection(data.name)}
                className={cn(
                  'block font-mono transition-colors duration-300 first-letter:uppercase hover:text-primary hover:underline',
                  activeSection === data.name && 'text-primary'
                )}
              >
                {data.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className='flex items-center gap-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ThemeToggle />
          <HamburgerMenu />
        </motion.div>
      </nav>
    </header>
  )
}
