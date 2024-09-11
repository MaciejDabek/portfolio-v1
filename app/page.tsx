import About from '@/components/about'
import Contact from '@/components/contact'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div>
      <div className='container max-w-4xl space-y-40'>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  )
}
