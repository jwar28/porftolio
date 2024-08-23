import { Icons } from '@/components/icons'
import { HomeIcon, ComputerIcon, UserIcon } from 'lucide-react'

export const DATA = {
  name: 'Javier Guerra',
  initials: 'JG',
  url: 'https://www.javierguerra.dev',
  location: 'Bucaramanga, COL',
  locationLink: 'https://www.google.com/maps/place/bucaramanga',
  description:
    'Software Engineer with strong focus on user experience, design and quality code',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Astro',
    'Svelte',
    'Typescript',
    'Node.js',
    'Python',
    'Oracle Apex',
    'Postgres',
    'Mongo',
    'Firebase',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/projects', icon: ComputerIcon, label: 'Projects' },
    { href: '/about-me', icon: UserIcon, label: 'About me' },
  ],
  contact: {
    email: 'javierguerra2203@gmail.com',
    tel: '+57',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/jwar28',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/javier-guerra-258401233/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/jguerra22K',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'NTT DATA',
      href: 'https://co.nttdata.com/',
      badges: [],
      location: 'Remote',
      title: 'TI Trainee',
      logoUrl: '/nttdata.png',
      start: 'Jun 2022',
      end: 'Dec 2022',
      description:
        "I provided remote support for Terpel's applications, utilizing tools such as SQL Server Management Studio, Google Cloud Platform (GCP), and Postman. Additionally, I helped in the optimization of a key process in one of the company's main applications for managing large fleets.",
    },
  ],
  education: [
    {
      school: 'Servicio Nacional de Aprendizaje',
      href: 'https://oferta.senasofiaplus.edu.co/sofia-oferta/',
      degree: 'Technologist in Analysis and Development of Information Systems',
      logoUrl: '/sena.png',
      start: '2019',
      end: '2022',
    },
    {
      school: 'Universidad Popular del Cesar',
      href: 'https://www.unicesar.edu.co/',
      degree: 'Systems Engineering (Transfered to UNAB)',
      logoUrl: '/upc.png',
      start: '2020',
      end: '2023',
    },
    {
      school: 'Universidad Autonoma de Bucaramanga',
      href: 'https://unab.edu.co/',
      degree: 'Systems Engineering',
      logoUrl: '/unab.jpg',
      start: '2023',
      end: 'Present',
    },
  ],
  projects: [
    {
      title: 'Lorem Ipsum',
      href: '/',
      dates: 'Jan 2024 - Feb 2024',
      active: true,
      description: 'Lorem',
      technologies: ['Next.js'],
      links: [
        {
          type: 'Website',
          href: '/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '',
    },
  ],
} as const
