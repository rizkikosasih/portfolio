import ecommerce from '../assets/icons/ecommerce.svg';
import cashier from '../assets/icons/cashier.svg';
import government from '../assets/icons/government.svg';

export const experiences = [
  {
    title: 'PHP Developer',
    company_name: 'BPJS Ketenagakerjaan',
    icon: government,
    iconBg: '#DBFFCB',
    date: 'Mei 2025 - Juli 2025',
    description:
      'Bekerja di bawah PT Indocyber Global Teknologi untuk mengembangkan modul JP Berkala dan fitur ekspor laporan operasional (PDF & Excel). Saya membangun middleware Node.js & Express.js untuk integrasi JSReport Server serta mengintegrasikan API internal. Selain itu, saya bertanggung jawab memonitor pipeline Jenkins pasca-merge ke branch develop untuk memastikan stabilitas deployment di DEV environment dalam kerangka kerja Agile/Scrum.',
    techStack: ['PHP', 'Oracle DB', 'Node.js', 'Express.js', 'JSReport', 'Jenkins'],
    gridSize: 'large'
  },
  {
    title: 'Programmer Website',
    company_name: 'Kejaksaan Agung RI',
    icon: government,
    iconBg: '#BEE4D0',
    date: 'Juni 2024 - Desember 2024',
    description:
      'Melalui PT Maxxima Innovative Engineering, saya ditugaskan untuk menangani modul aplikasi perkara tindak pidana umum dan mengembangkan sistem manajemen arsip digital yang efisien.',
    techStack: ['PHP', 'Yii2', 'PostgreSQL', 'jQuery', 'Bootstrap'],
    gridSize: 'small'
  },
  {
    title: 'Freelance Developer',
    company_name: 'Viama',
    icon: cashier,
    iconBg: '#FF6363',
    date: 'November 2022 - April 2024',
    description:
      'Membangun sistem kasir dan manajemen keanggotaan dengan desain responsif. Mengintegrasikan layanan internal melalui API serta mengembangkan fitur generator barcode dan QR Code.',
    techStack: ['PHP', 'Laravel', 'jQuery', 'Bootstrap', 'API Integration'],
    gridSize: 'small'
  },
  {
    title: 'Backend PHP Programmer',
    company_name: 'PT. Gogobli Asia Teknologi',
    icon: ecommerce,
    iconBg: '#FF8282',
    date: 'Mei 2021 - April 2024',
    description:
      'Mengelola fitur pemesanan dan manajemen stok pada platform e-commerce. Mengembangkan sistem email otomatis dan fitur ekspor laporan data (Excel/CSV) serta integrasi layanan pihak ketiga.',
    techStack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'API'],
    gridSize: 'small'
  }
];
