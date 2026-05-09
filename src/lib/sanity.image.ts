import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'
import type { SanityImage } from '@/types/portfolio'

const builder = createImageUrlBuilder(client)

export const urlFor = (source: SanityImage) => {
  return builder.image(source)
}
