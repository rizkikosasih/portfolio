export const getFileUrl = (ref: string): string => {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
  const dataset = import.meta.env.VITE_SANITY_DATASET ?? "production"

  const [_file, id, extension] = ref.split("-")

  if (!projectId || !id || !extension) return ""

  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}
