'use client'

import { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navData } from '@/content/content'
import Link from 'next/link'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(open => !open)

  return (
    <div>
      <Button
        variant='ghost'
        size='icon'
        className='md:hidden'
        onClick={toggleMenu}
      >
        <MenuIcon className='size-7' />
      </Button>

      {isOpen && (
        <div className='absolute inset-0 z-50 h-screen bg-background/90 backdrop-blur-sm'>
          <div className='fixed inset-0 h-full w-full overflow-y-auto p-4'>
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-4 top-3'
              onClick={toggleMenu}
            >
              <X className='size-10' />
              <span className='sr-only'>Close</span>
            </Button>
            <nav className='flex h-full flex-col items-center justify-center space-y-8'>
              {navData.map(data => (
                <Link
                  key={data.href}
                  href={data.href}
                  onClick={toggleMenu}
                  className='font-mono text-2xl font-bold first-letter:uppercase hover:text-primary hover:underline'
                >
                  {data.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
