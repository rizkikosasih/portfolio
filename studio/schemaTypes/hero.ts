export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'mainImage',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'resume', title: 'Upload CV (PDF)', type: 'file' },
  ],
}
