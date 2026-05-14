import type { LucideIcon } from 'lucide-react'

import type { Experience } from '@/types/sanity.types'

export type ExperienceData = Experience;

export type ExperienceItemProps = {
  data: ExperienceData
  isActive: boolean
  onToggle: () => void
}

export type ExperienceHeaderProps = {
  data: ExperienceData
  isActive: boolean
  onToggle: () => void
}

export type ExperienceBodyProps = {
  data: ExperienceData
  isActive: boolean
}

export type ExperienceTechStackProps = {
  technologies?: string[]
}

export type TechMeta = {
  icon: LucideIcon
  color: string
}
