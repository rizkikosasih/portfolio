/* import {
  api, bootstrap, codeigniter, contact, css, git, github,
  html, javascript, jquery, laravel, linkedin, mysql,
  nodejs, php, react, tailwindcss, vites
} from "./../assets/icons" */
import api from './../assets/icons/api.svg';
import bootstrap from './../assets/icons/bootstrap.svg';
import codeigniter from './../assets/icons/codeigniter.svg';
import contact from './../assets/icons/contact.svg';
import css from './../assets/icons/css.svg';
import expressjs from './../assets/icons/expressjs.svg';
import git from './../assets/icons/git.svg';
import github from './../assets/icons/github.svg';
import html from './../assets/icons/html.svg';
import javascript from './../assets/icons/javascript.svg';
import jquery from './../assets/icons/jquery.svg';
import laravel from './../assets/icons/laravel.svg';
import linkedin from './../assets/icons/linkedin.svg';
import livewire from './../assets/icons/livewire.svg';
import mysql from './../assets/icons/mysql.svg';
import nodejs from './../assets/icons/nodejs.svg';
import oracledb from './../assets/icons/oracledb.svg';
import php from './../assets/icons/php.svg';
import react from './../assets/icons/react.svg';
import tailwindcss from './../assets/icons/tailwindcss.svg';
import vites from './../assets/icons/vites.svg';
import postgresql from './../assets/icons/postgresql.svg';
import yii from './../assets/icons/yii.svg';
import ecommerce from './../assets/icons/ecommerce.svg';
import cashier from './../assets/icons/cashier.svg';
import government from './../assets/icons/government.svg';
import sd from './../assets/icons/sd.svg';
import smp from './../assets/icons/smp.svg';
import smk from './../assets/icons/smk.svg';
import sarjana from './../assets/icons/sarjana.svg';

const catSize = {
  smMax: {
    Walk: {
      position: [0, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [0, -1.5, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sleeping: {
      position: [0.35, -1.15, 0],
      rotation: [0, -1.15, 0],
      scale: [2, 2, 2]
    }
  },
  mdMax: {
    Walk: {
      position: [0.25, -1.15, 0],
      rotation: [0, 0, 0],
      scale: [1.85, 1.85, 1.85]
    },
    Sitting: {
      position: [0.25, -1.15, 0],
      rotation: [0, 0, 0],
      scale: [1.85, 1.85, 1.85]
    },
    Sleeping: {
      position: [0.43, -0.45, 0],
      rotation: [0, -1.15, 0],
      scale: [1.85, 1.85, 1.85]
    }
  },
  lgMax: {
    Walk: {
      position: [0.02, -1.2, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [0.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2.15, 2.15, 2.15]
    },
    Sleeping: {
      position: [0.5, -0.75, 0],
      rotation: [0, -1.15, 0],
      scale: [2.25, 2.25, 2.25]
    }
  },
  xlMax: {
    Walk: {
      position: [0.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2, 2, 2]
    },
    Sitting: {
      position: [0.1, -1.3, 0],
      rotation: [0, 0, 0],
      scale: [2.15, 2.15, 2.15]
    },
    Sleeping: {
      position: [0.4, -0.75, 0],
      rotation: [0, -1.15, 0],
      scale: [2.15, 2.15, 2.15]
    }
  }
};

const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend'
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Other'
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Other'
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend'
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend'
  },
  {
    imageUrl: nodejs,
    name: 'Node JS',
    type: 'Backend'
  },
  {
    imageUrl: expressjs,
    name: 'Express JS',
    type: 'Backend'
  },
  {
    imageUrl: react,
    name: 'React JS',
    type: 'Frontend'
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend'
  },
  {
    imageUrl: bootstrap,
    name: 'Bootstrap',
    type: 'Frontend'
  },
  {
    imageUrl: codeigniter,
    name: 'Codeigniter',
    type: 'Backend'
  },
  {
    imageUrl: jquery,
    name: 'AJAX',
    type: 'Frontend'
  },
  {
    imageUrl: laravel,
    name: 'Laravel',
    type: 'Backend'
  },
  {
    imageUrl: livewire,
    name: 'Livewire',
    type: 'Frontend'
  },
  {
    imageUrl: yii,
    name: 'Yii',
    type: 'Backend'
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database'
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database'
  },
  {
    imageUrl: oracledb,
    name: 'Oracle Database',
    type: 'Database'
  },
  {
    imageUrl: php,
    name: 'PHP',
    type: 'Backend'
  },
  {
    imageUrl: vites,
    name: 'Vite',
    type: 'Frontend'
  },
  {
    imageUrl: api,
    name: 'Restful API',
    type: 'Backend'
  }
];

const socialLinks = [
  {
    name: 'Kontak',
    iconUrl: contact,
    link: '/kontak'
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/rizkikosasih'
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/rizki-kosasih-rk97'
  }
];

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

const experiences = [
  {
    title: 'Backend PHP Programmer',
    company_name: 'PT. Gogobli Asia Teknologi',
    icon: ecommerce,
    iconBg: '#FF8282',
    date: 'Mei 2021 - April 2024',
    points: [
      'Tech Stack: HTML, CSS, PHP, MySQL, JQuery, Bootstrap.',
      'Mengintegrasikan aplikasi web dengan layanan pihak ketiga melalui API.',
      'Menangani fitur terkait pemesanan, manajemen stok dan produk, serta modul operasional lainnya.',
      'Mengembangkan fitur email otomatis untuk notifikasi sistem.',
      'Membangun fitur ekspor laporan dalam format Excel dan CSV untuk keperluan administrasi dan analisis data.'
    ]
  },
  {
    title: 'Freelance Developer',
    company_name: 'Viama',
    icon: cashier,
    iconBg: '#FF6363',
    date: 'November 2022 - April 2024',
    points: [
      'Tech Stack: HTML, CSS, PHP, Laravel, JQuery, Bootstrap.',
      'Menerapkan desain responsif dan memastikan kompatibilitas antar browser.',
      'Membangun sistem kasir dan manajemen keanggotaan untuk mendukung operasional bisnis.',
      'Mengintegrasikan aplikasi web dengan layanan internal melalui API yang disediakan tim proyek.',
      'Membangun fitur generate dan unduh barcode serta QR Code.'
    ]
  },
  {
    title: 'Programmer Website',
    company_name: 'Kejaksaan Agung RI (DASKRIMTI)',
    icon: government,
    iconBg: '#BEE4D0',
    date: 'Juni 2024 - Desember 2024',
    points: [
      'Tech Stack: HTML, CSS, PHP, Yii2, PostgreSQL, JQuery, Bootstrap.',
      'Menangani modul aplikasi yang berkaitan dengan perkara tindak pidana umum.',
      'Mengembangkan fitur ekspor dokumen untuk kebutuhan persuratan.',
      'Mengembangkan fitur impor dokumen sebagai bagian dari manajemen arsip digital.'
    ]
  },
  {
    title: 'PHP Developer',
    company_name: 'BPJS Ketenagakerjaan',
    icon: government,
    iconBg: '#DBFFCB',
    date: 'Mei 2025 - Juli 2025',
    points: [
      'Tech Stack: HTML, CSS, PHP, Oracle DB, jQuery, Node.js, Express.js, JSReport.',
      'Menangani modul aplikasi yang berkaitan dengan JP Berkala',
      'Mengembangkan fitur ekspor laporan dalam format PDF dan Excel',
      'Mengimplementasikan unit test untuk memastikan kualitas dan stabilitas kode',
      'Mengintegrasikan aplikasi web dengan API internal untuk pertukaran data antar sistem',
      'Membangun middleware menggunakan Node.js dan Express.js untuk menjembatani aplikasi web dengan JSReport Server.'
    ]
  }
];

const educations = [
  {
    iconUrl: sd,
    theme: 'btn-back-red',
    name: 'SD',
    title: 'Sekolah Dasar',
    periode: '2003-2008',
    schoolName: 'SDN 09 Jakarta'
  },
  {
    iconUrl: smp,
    theme: 'btn-back-green',
    name: 'SMP',
    title: 'Sekolah Menengah Pertama',
    periode: '2008-2011',
    schoolName: 'SMPN 72 Jakarta'
  },
  {
    iconUrl: smk,
    theme: 'btn-back-yellow',
    name: 'SMK',
    title: 'Sekolah Menengah Kejuruan',
    periode: '2011-2014',
    schoolName: 'SMK YP IPPI'
  },
  {
    iconUrl: sarjana,
    theme: 'btn-back-black',
    name: 'S1 TI',
    title: 'S1 Teknologi Informatika',
    periode: '2014-2021',
    schoolName: 'Institut Teknologi dan Bisnis Swadharma'
  }
];

export { catSize, skills, socialLinks, listMenu, listFooter, experiences, educations };
