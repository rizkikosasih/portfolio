import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'

const cache = new Map<string, unknown>()

export const useSanity = <T>(query: string) => {
  const cached = cache.get(query) as T | undefined

  const [data, setData] = useState<T | null>(cached ?? null)
  const [loading, setLoading] = useState<boolean>(!cached)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    if (cached) return

    const fetchData = async () => {
      try {
        setLoading(true)

        const result = await client.fetch<T>(query)

        cache.set(query, result)
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, cached])

  return { data, loading, error }
}
