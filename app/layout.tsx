import type { Metadata } from 'next'
import { Inter, Playfair_Display, Pridi } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'
import LeftLinks from '@/components/left-links'
import RightLinks from '@/components/right-links'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})
const pridi = Pridi({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-pridi'
})

export const metadata: Metadata = {
  title: 'Maciej Dąbek | Portfolio',
  description:
    'Portfolio of a Web Developer with Expertise in Software Engineering'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='scroll-pt-[100px] !scroll-smooth'
      suppressHydrationWarning
    >
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable,
          pridi.variable
        )}
      >
        <Providers>
          {/* <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]'></div> */}

          <Header />
          <main className='grow'>{children}</main>
          <Footer />

          <LeftLinks />
          <RightLinks />
        </Providers>
      </body>
    </html>
  )
}
