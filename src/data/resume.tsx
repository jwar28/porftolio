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
      title: 'Pokepedia',
      href: 'https://pokepedia-six.vercel.app/',
      active: true,
      description:
        'Pokemon app built with Sveltekit, data fetched from PokeAPI',
      technologies: ['Sveltekit', 'TailwindCSS', 'Typescript'],
      category: 'Web Development',
      isFeatured: true,
      links: [
        {
          type: 'Website',
          href: 'https://pokepedia-six.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/jwar28/pokepedia',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/pokepedia.png',
      video: '',
    },
    {
      title: 'Techno Fix',
      href: 'https://techno-fix-five.vercel.app/',
      active: true,
      description: 'Static page made for a tech fix company',
      technologies: ['Astro', 'TailwindCSS', 'React'],
      category: 'Web Development',
      isFeatured: true,
      links: [
        {
          type: 'Website',
          href: 'https://techno-fix-five.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/jwar28/techno-fix',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/tf.png',
      video: '',
    },
    {
      title: 'Rocky',
      href: 'https://rocky-q71s.onrender.com/',
      active: true,
      description: 'Movie recommender system using collaborative filtering',
      technologies: ['Python', 'Streamlit', 'Machine Learning'],
      category: 'Artificial Intelligence',
      isFeatured: true,
      links: [
        {
          type: 'Website',
          href: 'https://rocky-q71s.onrender.com/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/jwar28/rocky',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/rocky.png',
      video: '',
    },
    {
      title: 'Unab Pulse',
      href: 'https://github.com/jwar28/unab-pulse',
      active: true,
      description:
        'Mobile app to keep track of your university grades and other information',
      technologies: ['React Native', 'Expo', 'Nativewind'],
      category: 'Mobile Development',
      isFeatured: true,
      links: [
        {
          type: 'Source',
          href: 'https://github.com/jwar28/unab-pulse',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/xd.gif',
      video: '',
    },
  ],
} as const
