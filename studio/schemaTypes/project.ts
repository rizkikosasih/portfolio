export default {
  name: 'project', // Ini akan digunakan di GROQ query nanti
  title: 'Projects', // Nama yang muncul di Dashboard Sanity
  type: 'document',
  fields: [
    {name: 'title', title: 'Project Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Screenshot', type: 'image', options: {hotspot: true}},
    {name: 'tags', title: 'Tech Stack', type: 'array', of: [{type: 'string'}]},
    {name: 'github', title: 'GitHub Link', type: 'url'},
    {name: 'demo', title: 'Live Demo Link', type: 'url'},
  ],
}
