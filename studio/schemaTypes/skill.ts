export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {name: 'title', title: 'Skill Name', type: 'string'},
    {
      name: 'type',
      title: 'Type/Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'Frontend'},
          {title: 'Backend', value: 'Backend'},
          {title: 'Database', value: 'Database'},
          {title: 'Other/Tools', value: 'Other'},
        ],
      },
    },
    {name: 'icon', title: 'Icon (Lucide Name)', type: 'string'},
  ],
}
