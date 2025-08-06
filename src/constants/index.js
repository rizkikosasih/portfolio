import {catSize} from './catSize';
import {skills} from './skill';
import {socialLinks} from './socialLink';
import {experiences} from './experience';
import {educations} from './education';

const listMenu = [
  { path: '/', name: '', element: '../pages/Home' },
  { path: '/tentang', name: 'Tentang', element: '../pages/About' },
  {
    path: '/kemampuan',
    name: 'Kemampuan',
    element: '../pages/Skills'
  },
  { path: '/kontak', name: 'Kontak', element: '../pages/Contact' }
];

const listFooter = ['/tentang', '/kemampuan', '/kontak'];

export { catSize, skills, socialLinks, listMenu, listFooter, experiences, educations };
