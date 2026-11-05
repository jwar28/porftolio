import type { Locale } from './config'

const es = {
  meta: {
    title: 'Javier Guerra — Desarrollador web full stack',
    description:
      'Portafolio de Javier Guerra, desarrollador web full stack en Bucaramanga, Colombia: aplicaciones con Next.js, TypeScript y Node.js, conectadas a datos y automatizaciones.',
    projectsTitle: 'Proyectos',
    projectsDescription:
      'Todos los proyectos de Javier Guerra: aplicaciones web, IA, móvil y más.',
  },
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    cv: 'CV',
    switchLanguage: 'Read in English',
    toggleTheme: 'Cambiar tema claro/oscuro',
    skip: 'Saltar al contenido',
  },
  hero: {
    role: 'Desarrollador web full stack · IA y automatización',
    latest: (d: string) => `Última versión · ${d}`,
    email: 'Escríbeme',
    cv: 'Descargar CV',
  },
  sections: {
    work: 'Proyectos destacados',
    allProjects: (n: number) => `Ver los ${n} proyectos`,
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Tecnologías',
    contact: 'Hablemos',
  },
  skills: {
    languages: 'Lenguajes',
    frameworks: 'Frameworks y runtimes',
    databases: 'Bases de datos',
    cloud: 'Cloud / DevOps',
    data: 'Datos / Analítica',
    spoken: 'Idiomas',
  },
  contact: {
    title: '¿Siguiente versión?',
    body: 'Estoy abierto a empleos de tiempo completo y a proyectos freelance. Si tienes una vacante, una idea o un proceso que te quita horas, cuéntame qué necesitas.',
    email: 'Enviar un correo',
    linkedin: 'LinkedIn',
  },
  project: {
    live: 'Ver sitio',
    source: 'Código',
    api: 'API',
    mobile: 'App móvil',
    noPreview: 'Sin vista previa',
  },
  projectsPage: {
    title: 'Proyectos',
    intro:
      'La colección completa: productos para la universidad, sitios para clientes, experimentos con IA y herramientas personales.',
    filterLabel: 'Filtrar por tecnología',
    all: 'Todos',
    count: (n: number) => (n === 1 ? '1 proyecto' : `${n} proyectos`),
    empty: 'No hay proyectos con esa tecnología.',
    sorted: 'Ordenados por el mes en que se creó cada repositorio en GitHub.',
    back: 'Volver al inicio',
  },
  footer: {
    built: 'Hecho con Next.js y Tailwind CSS.',
  },
  categories: {
    web: 'Desarrollo web',
    ai: 'Inteligencia artificial',
    mobile: 'Móvil',
    cli: 'Línea de comandos',
    game: 'Videojuego',
    template: 'Plantilla',
  },
  diff: {
    file: 'siigo',
    manualLabel: 'proceso contable manual: 1 día de trabajo',
    machineLabel: 'ejecución automatizada en máquina: 20 segundos',
    toolingLabel: 'automatizaciones dispersas en varias herramientas',
    portalLabel: 'portal único para contadores: Next.js + Supabase',
  },
  releases: {
    title: 'Historial de versiones',
    jump: 'Saltar a una versión',
    projects: 'Proyectos destacados',
    projectsChip: 'Proyectos',
    projectsSub: 'Sitios y apps publicados, cada uno con su enlace en vivo.',
    education: 'Educación',
    initial: 'Initial commit',
    repo: (d: string) => `repo creado · ${d}`,
    undated: 'sin fecha pública',
    dependencies: 'Dependencias',
  },
  kinds: {
    added: 'Añadido',
    improved: 'Mejorado',
    removed: 'Eliminado',
    migrated: 'Migrado',
    wip: 'En curso',
    research: 'Analizado',
  },
  remote: 'Remoto',
  gpa: 'Promedio',
}

export type Dictionary = typeof es

const en: Dictionary = {
  meta: {
    title: 'Javier Guerra — Full stack web developer',
    description:
      'Portfolio of Javier Guerra, a full stack web developer in Bucaramanga, Colombia: applications built with Next.js, TypeScript and Node.js, connected to data and automations.',
    projectsTitle: 'Projects',
    projectsDescription:
      'Every project by Javier Guerra: web apps, AI, mobile and more.',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    switchLanguage: 'Leer en español',
    toggleTheme: 'Toggle light/dark theme',
    skip: 'Skip to content',
  },
  hero: {
    role: 'Full stack web developer · AI and automation',
    latest: (d: string) => `Latest release · ${d}`,
    email: 'Email me',
    cv: 'Download CV',
  },
  sections: {
    work: 'Selected work',
    allProjects: (n: number) => `See all ${n} projects`,
    experience: 'Experience',
    education: 'Education',
    skills: 'Stack',
    contact: "Let's talk",
  },
  skills: {
    languages: 'Languages',
    frameworks: 'Frameworks / runtimes',
    databases: 'Databases',
    cloud: 'Cloud / DevOps',
    data: 'Data / analytics',
    spoken: 'Spoken languages',
  },
  contact: {
    title: "What's the next release?",
    body: "I'm open to full-time roles and freelance projects. If you have an opening, an idea, or a process that eats your hours, tell me what you need.",
    email: 'Send an email',
    linkedin: 'LinkedIn',
  },
  project: {
    live: 'Live site',
    source: 'Source',
    api: 'API',
    mobile: 'Mobile app',
    noPreview: 'No preview',
  },
  projectsPage: {
    title: 'Projects',
    intro:
      'The full collection: products for my university, client websites, AI experiments and personal tools.',
    filterLabel: 'Filter by technology',
    all: 'All',
    count: (n: number) => (n === 1 ? '1 project' : `${n} projects`),
    empty: 'No projects use that technology.',
    sorted: 'Sorted by the month each GitHub repository was created.',
    back: 'Back to home',
  },
  footer: {
    built: 'Built with Next.js and Tailwind CSS.',
  },
  categories: {
    web: 'Web development',
    ai: 'Artificial intelligence',
    mobile: 'Mobile',
    cli: 'Command line',
    game: 'Game',
    template: 'Template',
  },
  diff: {
    file: 'siigo',
    manualLabel: 'manual accounting process: 1 full day of work',
    machineLabel: 'automated machine run: 20 seconds',
    toolingLabel: 'automations scattered across tools',
    portalLabel: 'single portal for accountants: Next.js + Supabase',
  },
  releases: {
    title: 'Release history',
    jump: 'Jump to a release',
    projects: 'Selected projects',
    projectsChip: 'Projects',
    projectsSub: 'Shipped sites and apps, each with a live link.',
    education: 'Education',
    initial: 'Initial commit',
    repo: (d: string) => `repo created · ${d}`,
    undated: 'no public date',
    dependencies: 'Dependencies',
  },
  kinds: {
    added: 'Added',
    improved: 'Improved',
    removed: 'Removed',
    migrated: 'Migrated',
    wip: 'In progress',
    research: 'Researched',
  },
  remote: 'Remote',
  gpa: 'GPA',
}

const dictionaries: Record<Locale, Dictionary> = { es, en }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}
