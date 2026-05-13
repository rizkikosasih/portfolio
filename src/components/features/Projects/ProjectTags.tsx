import type { ProjectData } from './project.types'

interface Props {
  tags: ProjectData['tags']
}

const ProjectTags = ({ tags }: Props) => {
  if (!tags?.length) return null

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="hover:bg-secondary rounded-full border px-3 py-1 text-[10px] font-medium transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default ProjectTags
