import { defineCliConfig } from 'sanity/cli'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: process.env.VITE_SANITY_DATASET || 'production',
  },
  typegen: {
    path: '../src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../src/types/sanity.types.ts',
  },
})
