export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <p className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()} Maciej. All rights reserved.
      </p>
      <p className='text-xs'>
        This page is built with React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
