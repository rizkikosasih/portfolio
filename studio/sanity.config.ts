import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET

if (!projectId || !dataset) {
  console.warn(
    '⚠️ Warning: Variabel lingkungan VITE_SANITY_PROJECT_ID atau VITE_SANITY_DATASET belum terdefinisi di file .env root!',
  )
}

export default defineConfig({
  name: 'default',
  title: 'Portfolio Web',

  projectId: projectId || '',
  dataset: dataset || '',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
