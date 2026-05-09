import { motion } from 'framer-motion'
import { useSanity } from '../../hooks/useSanity'
import { heroQuery } from '../../lib/sanity.queries'
import { urlFor } from '../../lib/sanity.image' // Import helper
import type { About } from '../../types/portfolio'

const Hero = () => {
  const { data, loading } = useSanity<About>(heroQuery)

  if (loading) return <div className="bg-buted mg-muted anim min-h-[70vh]" />
  if (!data) return null

  return (
    <div className="text-c flex min-h-[70vh] flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border-primary border-primary rounde mb-8 h-40 w-40 overflow-hidden shadow-2xl"
      >
        {data.mainImage ? (
          <img
            src={urlFor(data.mainImage).width(400).height(400).url()}
            alt={data.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-muted bg-muted justiftext-4xl flex h-full w-full items-center">
            👤
          </div>
        )}
      </motion.div>

      {/* ... sisa kode name & bio tetap sama ... */}
      <motion.h1 className="text-4xl font-bold tracking-tighter sm:text-7xl">
        {data.name}
      </motion.h1>
      <p className="ed mt-4 max-w-150 md:text-xl">{data.bio}</p>
    </div>
  )
}

export default Hero
