import { projectsData } from '@/content/content'
import SectionHeading from './section-heading'
import Project from './project'

export default function Projects() {
  return (
    <section id='projects'>
      <div className='container max-w-4xl'>
        <SectionHeading text='Projects'></SectionHeading>
        <ul className='flex flex-col items-center gap-20'>
          {projectsData.map(project => (
            <Project key={project.name} project={project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
