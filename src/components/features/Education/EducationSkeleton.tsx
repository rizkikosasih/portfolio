import { Skeleton } from "@/components/ui"

const EducationSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[1, 2].map((i) => (
        <Skeleton
          key={i}
          className="h-48 rounded-3xl"
        />
      ))}
    </div>
  )
}

export default EducationSkeleton
