import { urlFor } from '@/lib/sanity'
import type { ProjectImageProps } from './project.types'
import { Button } from '@/components/ui'
import ExternalLinkIcon from '@/assets/icons/external-link.svg?react'
import GithubIcon from '@/assets/icons/github.svg?react'

const ProjectImage = ({ image, title, github, demo }: ProjectImageProps) => {
  if (!image) {
    return (
      <div className="bg-secondary flex aspect-video w-full items-center justify-center">
        <span className="text-4xl">🖼️</span>
      </div>
    )
  }

  return (
    <div className="bg-background group relative isolate aspect-video w-full cursor-pointer overflow-hidden">
      <img
        src={urlFor(image).width(300).blur(80).url()}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-30 blur-xl brightness-75 transition-transform duration-700 group-hover:scale-110"
      />

      <div className="bg-background/40 pointer-events-none absolute inset-0 backdrop-blur-sm" />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>

      <div className="relative flex h-full w-full items-center justify-center p-8">
        <img
          src={urlFor(image).width(900).url()}
          alt={title}
          className="max-h-full max-w-full transform-gpu rounded-xl object-contain shadow-2xl transition duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1 group-hover:brightness-90"
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {github && (
          <Button
            asChild
            variant="ghost"
            className="rounded-full border border-zinc-300/60 bg-white/80 px-6 backdrop-blur-md transition-all hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70"
          >
            <a href={github} target="_blank" rel="noreferrer">
              <GithubIcon className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-300" />
              <span className="ml-2">Github</span>
            </a>
          </Button>
        )}

        {demo && (
          <Button
            asChild
            className="shadow-primary/20 rounded-full px-8 shadow-xl transition-transform active:scale-95"
          >
            <a href={demo} target="_blank" rel="noreferrer">
              <ExternalLinkIcon className="stroke-muted-foreground group-hover:stroke-foreground h-5 w-5 transition-colors duration-300" />
              <span className="ml-2">Demo</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProjectImage
