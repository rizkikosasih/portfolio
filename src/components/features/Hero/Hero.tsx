import { useSanity } from '@/hooks/useSanity'
import { heroQuery, getFileUrl, urlFor } from '@/lib/sanity'
import { Skeleton } from '@/components/ui'
import type { HeroData } from './hero.types'
import { HeroContent } from './HeroContent'
import { HeroImage } from './HeroImage'

const Hero = () => {
  const { data, loading } = useSanity<HeroData>(heroQuery)

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Skeleton className="h-96 w-96 rounded-full" />
      </div>
    )
  }

  if (!data) return null

  return (
    <section
      id="about"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-4 pt-12 pb-20 sm:px-8 lg:pt-10"
    >
      <div className="bg-primary/10 absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <HeroContent
              name={data.name || 'Developer'}
              bio={data.bio || 'Membangun sistem skalabel.'}
              resumeUrl={
                data.resume?.asset?._ref
                  ? getFileUrl(data.resume.asset._ref)
                  : undefined
              }
            />
          </div>

          <div className="flex w-full justify-center lg:w-1/2 lg:justify-center">
            {data?.mainImage && (
              <HeroImage
                src={urlFor(data.mainImage)
                  .width(800)
                  .height(800)
                  .format('webp')
                  .url()}
                alt={data.name || 'Profile Image'}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
