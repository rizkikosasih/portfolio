import { useEffect, useState } from 'react'
import { fetchSanity } from '@/lib/sanity/fetch'

interface UseSanityResult<T> {
  data: T | null
  loading: boolean
  error: unknown
}

export const useSanity = <T>(query: string): UseSanityResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      try {
        const result = await fetchSanity<T>(query)

        if (!cancelled) setData(result)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [query])

  return { data, loading, error }
}
