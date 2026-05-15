import { urlFor } from '@/lib/sanity'

import type { ProjectImageProps } from './project.types'
import ProjectImagePlaceholder from './ProjectImagePlaceholder'
import ProjectActions from './ProjectActions'

const ProjectImage = ({ image, title, github, demo }: ProjectImageProps) => {
  if (!image) return <ProjectImagePlaceholder />

  return (
    <div className="bg-muted group relative isolate h-0 w-full cursor-pointer overflow-hidden pb-[35%]">
      <img
        src={urlFor(image).width(200).blur(80).url()}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 blur-2xl brightness-50"
      />

      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
        <img
          src={urlFor(image).width(1000).url()}
          alt={title}
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:-rotate-1"
        />
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
        <ProjectActions github={github} demo={demo} />
      </div>
    </div>
  )
}

export default ProjectImage
