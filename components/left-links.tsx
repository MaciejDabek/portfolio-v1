import { socialsLinks } from '@/content/content'
import Links from './links'

export default function LeftLinks() {
  return (
    <Links side='left'>
      {socialsLinks.map(sl => (
        <a className='gc-link-up' href={sl.href} key={sl.href}>
          {<sl.icon className='size-6'></sl.icon>}
        </a>
      ))}
    </Links>
  )
}
