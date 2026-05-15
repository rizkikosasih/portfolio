import { Skeleton } from '@/components/ui'

const ProjectSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {[1, 2].map((i) => (
        <Skeleton
          key={i}
          className="bg-muted aspect-video animate-pulse rounded-3xl"
        />
      ))}
    </div>
  )
}

export default ProjectSkeleton
