import type { ComponentType } from 'react'
import type { Skill } from '@/types/sanity.types'

export type SkillType = 'Frontend' | 'Backend' | 'Database' | 'Other'

export type SkillData = Skill

export type SkillGridProps = {
  skills: SkillData[]
}

export type SkillCardProps = {
  title: string
  type: SkillType
  Icon: ComponentType<{ className?: string }>
  colorClass: string
  isPriority?: boolean
}
