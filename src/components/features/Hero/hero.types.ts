import type { SanityImage, SanityFile } from '@/lib/sanity'

export interface HeroImageProps {
  src: string
  alt: string
}

export interface HeroContentProps {
  name: string
  bio: string
  resumeUrl?: string | null
}

export interface HeroData {
  name: string
  mainImage: SanityImage
  bio: string
  resume: SanityFile
}

export interface HeroBlobProps {
  className: string
}
