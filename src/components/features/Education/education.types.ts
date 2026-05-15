import type { Education } from '@/types/sanity.types'
import type { Variants } from 'framer-motion'

export type EducationData = Education

export type EducationCardProps = {
  edu: EducationData
  variants: Variants
}
