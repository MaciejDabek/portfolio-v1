import { myEmail } from '@/content/content'
import Links from './links'

export default function RightLinks() {
  return (
    <Links side='right'>
      <a
        href={`mailto:${myEmail}`}
        className='gc-link-up text-xs leading-none [writing-mode:vertical-lr]'
      >
        {myEmail}
      </a>
    </Links>
  )
}
