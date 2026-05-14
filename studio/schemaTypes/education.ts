export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {name: 'school', title: 'School Name', type: 'string'},
    {name: 'major', title: 'Major (Optional)', type: 'string'},
    {name: 'period', title: 'Period (e.g 2000 - 2010)', type: 'string'},
    {name: 'description', title: 'Story/Description', type: 'text'},
    {name: 'order', title: 'Order Settings', type: 'number'},
  ],
}
