import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

import imageBrainwave from '/public/images/projects/brainwave.webp'
import imageOmnifood from '/public/images/projects/omnifood.webp'
import imageTwingram from '/public/images/projects/twingram.webp'
import imageTwinTube from '/public/images/projects/twintube.webp'

export const myEmail = 'contact@maciejdabek.com' as const
export const myGmail = 'maciejkamildabek@gmail.com' as const

export const socialsLinks = [
  { icon: GitHubLogoIcon, href: 'https://github.com/MaciejDabek' },
  { icon: LinkedInLogoIcon, href: 'l' }
] as const

export const navData = [
  { name: 'about', href: '#about' },
  { name: 'skills', href: '#skills' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'Express',
  'Framer Motion',
  'Python',
  'Git',
  'Bash'
] as const

export const projectsData = [
  {
    id: 1,
    category: 'Case study',
    name: 'Twingram',
    description:
      'Twingram is an Instagram clone featuring advanced design and functionality. It provides a modern, responsive layout that adapts seamlessly to different devices, offering core Instagram-like features such as user posts and image sharing for an engaging user experience.',
    keywords: [
      'React',
      'Typescript',
      'Tailwind',
      'React Query',
      'React Router'
    ],
    image: imageTwingram,
    link: 'https://maciejdabek-twingram.netlify.app/',
    githubLink: 'https://github.com/MaciejDabek/twingram'
  },
  {
    id: 2,
    category: 'Case study',
    name: 'Brainwave',
    description:
      'Brainwave is a project inspired by a tutorial, showcasing an advanced, responsive design. It demonstrates modern design techniques and layout flexibility, adapting smoothly to different screen sizes for an enhanced and user-friendly experience across devices.',
    keywords: ['React', 'Typescript', 'Tailwind'],
    image: imageBrainwave,
    link: 'https://maciejdabek-brainwave.netlify.app/',
    githubLink: 'https://github.com/MaciejDabek/brainwave'
  },
  {
    id: 3,
    category: 'Case study',
    name: 'Omnifood',
    description:
      'Omnifood is a single-page website introducing a product with a clean and simple design. It focuses on delivering essential product information in a streamlined and user-friendly format, ensuring a smooth experience across various devices with its responsive layout.',
    keywords: ['HTML', 'CSS', 'JavaScript'],
    image: imageOmnifood,
    link: 'https://maciejdabek-omnifood.netlify.app/',
    githubLink: 'https://github.com/MaciejDabek/omnifood'
  },
  {
    id: 4,
    category: 'Case study',
    name: 'TwinTube',
    description:
      "TwinTube is a YouTube front-page clone that focuses on responsive design. It replicates the layout and structure of YouTube's homepage, providing a modern interface that adapts to various screen sizes, ensuring a consistent user experience across devices.",
    keywords: ['React', 'Typescript', 'Styled-components'],
    image: imageTwinTube,
    link: 'https://maciejdabek-twintube.netlify.app/',
    githubLink: 'https://github.com/MaciejDabek/twintube'
  }
] as const
