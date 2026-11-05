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
    role: 'Desarrollador web full stack',
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
    body: 'Estoy abierto a empleos de tiempo completo y a proyectos freelance. Si tienes una idea, una vacante o un producto que necesita manos, escríbeme y te respondo pronto.',
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
    role: 'Full stack web developer',
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
    body: "I'm open to full-time roles and freelance projects. If you have an idea, an opening, or a product that needs hands, write to me and I'll get back to you soon.",
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
  remote: 'Remote',
  gpa: 'GPA',
}

const dictionaries: Record<Locale, Dictionary> = { es, en }

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang]
}
