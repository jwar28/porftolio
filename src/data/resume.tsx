import type { Dictionary } from '@/i18n/dictionaries'
import type { Localized } from '@/i18n/config'

export type ProjectCategory = keyof Dictionary['categories']
export type LinkKind = 'live' | 'source' | 'api' | 'mobile'
/** Changelog vocabulary for each highlight: what kind of change this line records. */
export type ChangeKind = 'added' | 'improved' | 'removed' | 'migrated' | 'wip' | 'research'
export type Change = Localized & { kind: ChangeKind }

export interface Project {
  slug: string
  title: string
  description: Localized
  category: ProjectCategory
  technologies: string[]
  featured: boolean
  /** Month the public GitHub repo was created (YYYY-MM); null when there is no public repo to date it by. */
  date: string | null
  /** Screenshot in /public; projects without one render as text-only rows. */
  image?: string
  links: { kind: LinkKind; href: string }[]
}

export const DATA = {
  name: 'Javier Guerra',
  initials: 'JG',
  url: 'https://www.javierguerra.dev',
  location: 'Bucaramanga, Colombia',
  avatarUrl: '/me.png',
  cvUrl: { es: '/cv-es.pdf', en: '/cv-en.pdf' } satisfies Localized,
  bio: {
    es: 'Construyo aplicaciones web de principio a fin con Next.js, TypeScript y Node.js, con especial cuidado en la interfaz. Las conecto con datos y automatizaciones en Python, SQL y n8n para convertir problemas complejos en productos simples y prácticos.',
    en: 'I build web applications end to end with Next.js, TypeScript and Node.js, with special care for the interface. I connect them to data and automations with Python, SQL and n8n to turn complex problems into simple, practical products.',
  } satisfies Localized,

  contact: {
    email: 'guerraturizojavier@gmail.com',
    github: 'https://github.com/jwar28',
    linkedin: 'https://www.linkedin.com/in/jguerra2203/',
  },

  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'MQL (MongoDB)'],
    frameworks: ['Node.js', 'Next.js', 'FastAPI', 'Astro', 'n8n', 'Power Automate'],
    databases: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
    cloud: ['Azure', 'Google Cloud Platform', 'Docker', 'Firebase', 'Supabase', 'Vercel', 'Git'],
    data: ['Power BI', 'Tableau', 'Databricks', 'ETL/ELT', 'Excel / Google Sheets'],
  } satisfies Record<Exclude<keyof Dictionary['skills'], 'spoken'>, string[]>,

  spokenLanguages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'Profesional (C1)', en: 'Proficient (C1)' } },
  ],

  work: [
    {
      company: 'Siigo',
      href: 'https://www.siigo.com/',
      title: { es: 'Analista de Automatización', en: 'Automation Analyst' },
      location: { es: 'Colombia', en: 'Colombia' },
      start: '2026-06',
      end: null,
      highlights: [
        {
          kind: 'added',
          es: 'Desarrollé automatizaciones para el área contable de Siigo Colombia con n8n y Power Automate, según requerimientos y permisos.',
          en: "Built automations for Siigo Colombia's accounting team with n8n and Power Automate, based on each requirement and access permissions.",
        },
        {
          kind: 'research',
          es: 'Realicé múltiples levantamientos de requerimientos sobre los procesos manuales de los contadores para automatizarlos.',
          en: 'Led multiple requirements-gathering sessions with accountants to map manual processes for later automation.',
        },
        {
          kind: 'wip',
          es: 'Estoy desarrollando un portal web (Next.js, Supabase, Vercel) que reúne todas estas automatizaciones en un solo lugar, para que los contadores puedan acceder a ellas y usarlas fácilmente.',
          en: 'Developing a web portal (Next.js, Supabase, Vercel) that brings all these automations together in one place, so accountants can easily access and use them.',
        },
        {
          kind: 'improved',
          es: 'Reduje un proceso que tomaba un día completo de trabajo manual a 20 segundos de ejecución en máquina.',
          en: 'Reduced a process that took a full day of manual work to 20 seconds of machine execution.',
        },
      ],
      tools: ['n8n', 'Power Automate', 'Next.js', 'Supabase', 'Vercel'],
    },
    {
      company: 'AnniQ',
      companyDetail: 'Intelligent Customer Success Suite',
      title: { es: 'Ingeniero de IA y Automatización', en: 'AI and Automation Engineer' },
      location: { es: 'Remoto, EE. UU.', en: 'Remote, USA' },
      start: '2025-11',
      end: '2026-06',
      highlights: [
        {
          kind: 'added',
          es: 'Diseñé e implementé pipelines automatizados de ingesta de datos con n8n, integrando múltiples fuentes y cargando datos estructurados en PostgreSQL para casos de uso operativos y analíticos.',
          en: 'Designed and implemented automated data ingestion pipelines using n8n, integrating multiple sources and loading structured data into PostgreSQL for both operational and analytical use cases.',
        },
        {
          kind: 'improved',
          es: 'Optimicé los pipelines críticos de datos, mejorando los tiempos de procesamiento y la eficiencia computacional.',
          en: 'Optimized critical data pipelines, improving processing times and computational efficiency.',
        },
        {
          kind: 'added',
          es: 'Contribuí a las iniciativas de ingeniería de datos, incluyendo el modelado de datos y el diseño de un almacén de datos para el análisis de métricas de redes sociales.',
          en: 'Contributed to data engineering efforts, including data modeling and the design of a data warehouse for social media metrics analysis.',
        },
      ],
      tools: ['n8n', 'PostgreSQL', 'Data modeling'],
    },
    {
      company: 'NTT DATA',
      href: 'https://co.nttdata.com/',
      title: {
        es: 'Analista de Datos/BI — Proyecto Facturación GNV Terpel',
        en: 'Data/BI Analyst — Terpel GNV Billing Project',
      },
      location: { es: 'Remoto, Colombia', en: 'Remote, Colombia' },
      start: '2022-06',
      end: '2022-12',
      highlights: [
        {
          kind: 'migrated',
          es: 'Apoyé la migración de infraestructura local a Google Cloud Platform (GCP) para una plataforma nacional de facturación, mejorando la confiabilidad del sistema y habilitando la automatización de procesos en la nube.',
          en: 'Supported the migration from on-premise infrastructure to Google Cloud Platform (GCP) for a national billing platform, improving system reliability and enabling cloud-based process automation.',
        },
        {
          kind: 'improved',
          es: 'Trabajé con bases de datos relacionales en entornos de facturación, realizando validaciones SQL, conciliaciones y controles de calidad de datos para garantizar su integridad.',
          en: 'Worked with relational databases in billing environments, performing SQL validations, reconciliations, and data quality checks to ensure data integrity.',
        },
        {
          kind: 'improved',
          es: 'Monitoreé y optimicé operaciones de datos en tiempo real, documentando flujos de trabajo críticos para reducir errores, mejorar la trazabilidad y cumplir los SLA operativos.',
          en: 'Monitored and optimized real-time data operations, documenting critical workflows to reduce errors, improve traceability, and meet operational SLAs.',
        },
      ],
      tools: ['SQL', 'GCP', 'Data quality'],
    },
  ] as {
    company: string
    companyDetail?: string
    href?: string
    title: Localized
    location: Localized
    start: string
    end: string | null
    highlights: Change[]
    tools: string[]
  }[],

  education: [
    {
      school: 'Universidad Autónoma de Bucaramanga',
      href: 'https://unab.edu.co/',
      logoUrl: '/unab.jpg',
      degree: { es: 'Ingeniería de Sistemas', en: 'Bachelor in Systems Engineering' },
      gpa: '4.2/5',
      location: 'Bucaramanga, Colombia',
      start: '2023-02',
      end: '2026-07',
    },
    {
      school: 'Servicio Nacional de Aprendizaje (SENA)',
      href: 'https://oferta.senasofiaplus.edu.co/sofia-oferta/',
      logoUrl: '/sena.png',
      degree: {
        es: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
        en: 'Technologist in Analysis and Development of Information Systems',
      },
      location: 'Popayán, Colombia',
      start: '2020-03',
      end: '2022-06',
    },
    {
      school: 'Universidad Popular del Cesar',
      href: 'https://www.unicesar.edu.co/',
      logoUrl: '/upc.png',
      degree: { es: 'Ingeniería de Sistemas', en: 'Undergraduate in Systems Engineering' },
      gpa: '4.1/5',
      location: 'Valledupar, Colombia',
      start: '2020-02',
      end: '2022-11',
    },
  ] as {
    school: string
    href: string
    logoUrl: string
    degree: Localized
    gpa?: string
    location: string
    start: string
    end: string | null
  }[],

  projects: [
    {
      slug: 'pokepedia',
      title: 'Pokepedia',
      description: {
        es: 'Enciclopedia Pokémon hecha con SvelteKit, con datos obtenidos de PokéAPI.',
        en: 'Pokémon encyclopedia built with SvelteKit, with data fetched from PokéAPI.',
      },
      category: 'web',
      technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript'],
      featured: true,
      date: '2023-05',
      image: '/work/pokepedia.png',
      links: [
        { kind: 'live', href: 'https://pokepedia-six.vercel.app/' },
        { kind: 'source', href: 'https://github.com/jwar28/pokepedia' },
      ],
    },
    {
      slug: 'gestion-documental',
      title: 'Gestión Documental Web',
      description: {
        es: 'Sitio informativo para el programa tecnológico en Gestión Documental.',
        en: 'Informational website for the Document Management technology program.',
      },
      category: 'web',
      technologies: ['Astro', 'React'],
      featured: true,
      date: '2024-09',
      image: '/work/gestion-documental.png',
      links: [
        { kind: 'live', href: 'https://gestion-documental-web.vercel.app/' },
        { kind: 'source', href: 'https://github.com/jwar28/gestion-documental' },
      ],
    },
    {
      slug: 'techno-fix',
      title: 'Techno Fix',
      description: {
        es: 'Sitio web estático para una empresa de reparación de dispositivos.',
        en: 'Static website for a device repair company.',
      },
      category: 'web',
      technologies: ['Astro', 'Tailwind CSS', 'React'],
      featured: true,
      date: '2024-05',
      image: '/work/techno-fix.png',
      links: [
        { kind: 'live', href: 'https://techno-fix-five.vercel.app/' },
        { kind: 'source', href: 'https://github.com/jwar28/techno-fix' },
      ],
    },
    {
      slug: 'luna-llena',
      title: 'Luna Llena',
      description: {
        es: 'Sitio web estático para un cliente.',
        en: 'Static website for a client.',
      },
      category: 'web',
      technologies: ['Astro', 'Tailwind CSS'],
      featured: true,
      date: null,
      image: '/work/luna-llena.png',
      links: [{ kind: 'live', href: 'https://luna-llena-three.vercel.app/' }],
    },
    {
      slug: 'emofind',
      title: 'Emofind',
      description: {
        es: 'Aplicación con IA que usa redes neuronales y LLMs para analizar un texto e identificar su sentimiento general.',
        en: 'AI-powered app that uses neural networks and LLMs to analyze a text and identify its overall sentiment.',
      },
      category: 'ai',
      technologies: ['Next.js', 'Tailwind CSS', 'AI'],
      featured: false,
      date: '2025-02',
      image: '/work/emofind.png',
      links: [
        { kind: 'source', href: 'https://github.com/jwar28/emofind.web' },
        { kind: 'api', href: 'https://github.com/nibbengineers/emofind.api' },
        { kind: 'mobile', href: 'https://github.com/jwar28/emofind-mobile' },
      ],
    },
    {
      slug: 'unabccess',
      title: 'Unabccess',
      description: {
        es: 'Software para gestionar reservas de espacios y control de acceso en la Universidad Autónoma de Bucaramanga (UNAB).',
        en: 'User-friendly software for managing space reservations and access control at Universidad Autónoma de Bucaramanga (UNAB).',
      },
      category: 'web',
      technologies: ['Next.js', 'Firebase'],
      featured: false,
      date: '2024-11',
      image: '/work/unabccess.png',
      links: [
        { kind: 'source', href: 'https://github.com/jwar28/unabccess' },
      ],
    },
    {
      slug: 'rocky',
      title: 'Rocky',
      description: {
        es: 'Sistema de recomendación de películas basado en filtrado colaborativo.',
        en: 'Movie recommender system using collaborative filtering.',
      },
      category: 'ai',
      technologies: ['Python', 'Streamlit', 'AI'],
      featured: false,
      date: '2024-05',
      image: '/work/rocky.png',
      links: [
        { kind: 'live', href: 'https://rocky-q71s.onrender.com/' },
        { kind: 'source', href: 'https://github.com/jwar28/rocky' },
      ],
    },
    {
      slug: 'control-stock',
      title: 'Control Stock',
      description: {
        es: 'Aplicación web para gestionar y controlar el inventario de productos de limpieza.',
        en: 'Web app to manage and control stock of cleaning products.',
      },
      category: 'web',
      technologies: ['SvelteKit', 'Tailwind CSS', 'Firebase'],
      featured: false,
      date: '2023-10',
      image: '/work/control-stock.png',
      links: [
        { kind: 'source', href: 'https://github.com/jwar28/control-stock' },
      ],
    },
    {
      slug: 'unab-space',
      title: 'Unab Space',
      description: {
        es: 'Sitio web con información relevante para la comunidad universitaria.',
        en: 'Website with relevant information for the university community.',
      },
      category: 'web',
      technologies: ['Astro', 'Tailwind CSS'],
      featured: false,
      date: '2023-02',
      image: '/work/unab-space.png',
      links: [
        { kind: 'live', href: 'https://unab-space.vercel.app/' },
        { kind: 'source', href: 'https://github.com/jwar28/unab-space' },
      ],
    },
    {
      slug: 'unab-pulse',
      title: 'Unab Pulse',
      description: {
        es: 'App móvil para llevar el control de tus notas universitarias y otra información académica.',
        en: 'Mobile app to keep track of your university grades and other academic information.',
      },
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'NativeWind'],
      featured: false,
      date: '2024-04',
      links: [{ kind: 'source', href: 'https://github.com/jwar28/unab-pulse' }],
    },
    {
      slug: 'next-x-tailwind',
      title: 'Next × Tailwind',
      description: {
        es: 'Plantilla propia para arrancar aplicaciones web rápidamente con Next.js y Tailwind CSS.',
        en: 'Custom template for quickly bootstrapping web applications with Next.js and Tailwind CSS.',
      },
      category: 'template',
      technologies: ['Next.js', 'Tailwind CSS'],
      featured: false,
      date: '2025-04',
      links: [{ kind: 'source', href: 'https://github.com/jwar28/next-x-tailwind' }],
    },
    {
      slug: 'jsclir',
      title: 'JSclir',
      description: {
        es: 'Aplicación de línea de comandos para gestionar tareas personales.',
        en: 'Command-line app to keep track of personal tasks.',
      },
      category: 'cli',
      technologies: ['JavaScript', 'Node.js'],
      featured: false,
      date: '2022-04',
      links: [{ kind: 'source', href: 'https://github.com/jwar28/jsclir' }],
    },
    {
      slug: 'cursed-shadow',
      title: 'Cursed Shadow',
      description: {
        es: 'Videojuego de aventura hecho con Unity como proyecto de clase.',
        en: 'Adventure video game made with Unity for a class project.',
      },
      category: 'game',
      technologies: ['C#', 'Unity'],
      featured: false,
      date: null,
      links: [],
    },
  ] satisfies Project[] as Project[],
}
