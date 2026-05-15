import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary/20 text-9xl font-extrabold tracking-tighter"
      >
        404
      </motion.h1>

      <div className="relative -mt-14 space-y-4">
        <h2 className="text-3xl font-bold">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground mx-auto max-w-md">
          Mungkin halaman yang kamu cari sudah dipindahkan, dihapus, atau kamu
          salah ketik URL-nya.
        </p>

        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
