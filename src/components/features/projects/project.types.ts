import type { Project } from '@/types/sanity.types'
import type { Variants } from 'framer-motion'

export type ProjectData = Project

export type ProjectCardProps = {
  project: ProjectData
  variants: Variants
}

export type ProjectImageProps = {
  image: ProjectData['image']
  title: ProjectData['title']
  github: ProjectData['github']
  demo: ProjectData['demo']
}

export type ProjectTagProps = {
  tags: ProjectData['tags']
}

export type ProjectIndicatorProps = {
  total: number
  activeIndex: number
}
