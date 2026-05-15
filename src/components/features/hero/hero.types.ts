import type { Hero } from '@/types/sanity.types'

export type HeroImageProps = {
  src: string
  alt: string
}

export type HeroContentProps = {
  name: string
  bio: string
  resumeUrl?: string | null
}

export type HeroData = Hero

export type HeroBlobProps = {
  className: string
}
