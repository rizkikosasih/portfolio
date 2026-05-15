import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui'
import type { HeroContentProps } from './hero.types'

const HeroContent = ({ name, bio, resumeUrl }: HeroContentProps) => {
  return (
    <div className="flex-1 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl">
          <span className="from-foreground to-foreground/70 bg-linear-to-b bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto max-w-xl text-sm leading-relaxed sm:text-base lg:mx-0">
          {bio}
        </p>

        <div className="relative z-20 mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <Button
            asChild
            size="lg"
            className="group shadow-primary/20 rounded-full px-8 shadow-xl transition-transform active:scale-95"
          >
            <a href="#projects" className="inline-flex items-center">
              Lihat Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {resumeUrl && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-full border border-zinc-200 bg-transparent px-8 text-zinc-900 shadow-none transition-all duration-300 hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-800/60"
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default HeroContent
