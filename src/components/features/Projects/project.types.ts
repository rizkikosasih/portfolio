import type { SanityImage } from '@/lib/sanity'

export interface ProjectData {
  title: string
  description: string
  image: SanityImage
  tags: string[]
  github: string
  demo: string
}
