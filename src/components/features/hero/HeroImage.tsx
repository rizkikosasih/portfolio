import { motion } from 'framer-motion'
import type { HeroImageProps } from './hero.types'
import HeroProfileBlob from './HeroProfileBlob'

const HeroImage = ({ src, alt }: HeroImageProps) => {
  return (
    <div className="relative flex items-center justify-center p-10 sm:p-14 md:p-18 lg:p-24 xl:p-32">
      <motion.div className="text-primary/20 dark:text-primary/25 absolute z-0">
        <HeroProfileBlob className="h-44 w-44 sm:h-56 sm:w-56 md:h-68 md:w-68 lg:h-80 lg:w-80 xl:h-88 xl:w-88" />
      </motion.div>

      <motion.div className="text-primary/10 dark:text-primary/15 absolute z-0 scale-105 blur-sm">
        <HeroProfileBlob className="h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-84 lg:w-84 xl:h-96 xl:w-96" />
      </motion.div>

      <motion.div className="text-primary/5 dark:text-primary/10 absolute z-0 scale-110 opacity-80 blur-md">
        <HeroProfileBlob className="h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-84 lg:w-84 xl:h-96 xl:w-96" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
      >
        <div className="from-primary/20 to-primary/10 absolute inset-0 rounded-full bg-linear-to-br via-transparent opacity-60 blur-xl" />

        <div className="relative h-full w-full overflow-hidden rounded-full">
          {src && (
            <img
              src={src}
              alt={alt || 'Profile Image'}
              className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform hover:scale-110"
            />
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default HeroImage
