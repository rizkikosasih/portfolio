import type { FC } from 'react'

export type SkillType = 'Frontend' | 'Backend' | 'Database' | 'Other'

export interface Skill {
  title: string
  type: SkillType
  icon: string
}

export interface SkillGridProps {
  skills: Skill[]
}

export interface SkillCardProps {
  title: string
  type: SkillType
  Icon: FC<{ className?: string }>
  colorClass: string
  isPriority?: boolean
}
