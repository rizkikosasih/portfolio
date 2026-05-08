export interface SanityImage {
  asset: { _ref: string; _type: string }
}

export interface SanityFile {
  asset: { _ref: string; _type: string }
}

export interface About {
  name: string
  mainImage: SanityImage
  bio: string
  resume: SanityFile
}

export interface Contact {
  email: string
  linkedin: string
  github: string
  whatsapp: string
}

export interface Education {
  school: string
  major?: string
  periode: string
  description: string
}

export interface Experience {
  company: string
  role: string
  date: string
  description: string
}

export interface Project {
  title: string
  description: string
  image: SanityImage
  tags: string[]
  github: string
  demo: string
}

export interface Skill {
  title: string
  type: 'Frontend' | 'Backend' | 'Database' | 'Other'
  icon: string
}

export interface PortfolioData {
  about: About
  contact: Contact
  education: Education[]
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
}
