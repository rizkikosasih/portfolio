// studio/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Membaca file .env yang ada di root project (keluar 1 tingkat dari folder studio)
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
