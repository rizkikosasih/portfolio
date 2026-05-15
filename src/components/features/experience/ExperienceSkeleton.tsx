import { Skeleton } from "@/components/ui";

const ExperienceSkeleton = () => {
  return (
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="bg-muted h-32 animate-pulse rounded-3xl" />
        ))}
      </div>
    )
}

export default ExperienceSkeleton
