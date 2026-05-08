import { useState, useEffect } from 'react'
import { client } from '../lib/sanity.client'
import { portfolioQuery } from '../lib/sanity.queries'
import type { PortfolioData } from '../types/portfolio'

export const usePortfolio = () => {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(portfolioQuery)
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
