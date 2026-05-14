import type { LucideIcon } from 'lucide-react'

export interface ExperienceData {
  _id: string
  company: string
  role: string
  date: string
  description: string
  technologies?: string[]
}

export interface ExperienceItemProps {
  data: ExperienceData
  isActive: boolean
  onToggle: () => void
}

export interface ExperienceHeaderProps {
  data: ExperienceData
  isActive: boolean
  onToggle: () => void
}

export interface ExperienceBodyProps {
  data: ExperienceData
  isActive: boolean
}

export interface ExperienceTechStackProps {
  technologies?: string[]
}

export interface TechMeta {
  icon: LucideIcon
  color: string
}
