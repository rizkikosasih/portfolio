import { Skeleton } from '@/components/ui'

const HeroSkeleton = () => {
  return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Skeleton className="h-96 w-96 rounded-full" />
      </div>
    )
}

export default HeroSkeleton
