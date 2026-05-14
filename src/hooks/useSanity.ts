import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { getCache, setCache } from '@/store/sanity.cache'

const USE_MOCK = import.meta.env.DEV

type MockKey =
  | 'hero'
  | 'skills'
  | 'project'
  | 'experience'
  | 'education'
  | 'contact'

const getMockKey = (query: string): MockKey | null => {
  if (query.includes('_type == "project"')) return 'project'
  if (query.includes('_type == "skill"')) return 'skills'
  if (query.includes('_type == "hero"')) return 'hero'
  if (query.includes('_type == "experience"')) return 'experience'
  if (query.includes('_type == "education"')) return 'education'
  if (query.includes('_type == "contact"')) return 'contact'
  return null
}

const loadMock = async <T>(key: MockKey): Promise<T> => {
  const modules = import.meta.glob('@/mocks/*.json')

  const path = `/src/mocks/${key}.mock.json`
  const loader = modules[path]

  if (!loader) {
    throw new Error(`Mock file not found: ${path}`)
  }

  const mod = await loader()
  return (mod as { default: T }).default
}

interface UseSanityResult<T> {
  data: T | null
  loading: boolean
  error: unknown
}

export const useSanity = <T>(query: string): UseSanityResult<T> => {
  const cached = getCache<T>(query)

  const [data, setData] = useState<T | null>(() => cached ?? null)
  const [loading, setLoading] = useState<boolean>(() => !cached)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        const cached = getCache<T>(query)
        if (cached) return

        setLoading(true)

        let result: T

        if (USE_MOCK) {
          const key = getMockKey(query)
          if (!key) throw new Error(`No mock found for query: ${query}`)

          result = await loadMock<T>(key)
        } else {
          result = await client.fetch<T>(query)
        }

        setCache(query, result)

        if (!cancelled) setData(result)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }
  }, [query])

  return { data, loading, error }
}
