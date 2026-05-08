export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'role', title: 'Role', type: 'string'},
    {name: 'date', title: 'Month - Year (e.g. 2024 - 2026)', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {
      name: 'technologies',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
