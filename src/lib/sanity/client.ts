import { createClient } from '@sanity/client'
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET

export const client = createClient({
  projectId: projectId ?? '',
  dataset: dataset ?? '',
  useCdn: true,
  apiVersion: '2026-05-08',
})
