import ecommerce from '../assets/icons/ecommerce.svg';
import cashier from '../assets/icons/cashier.svg';
import government from '../assets/icons/government.svg';

export const experiences = [
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
