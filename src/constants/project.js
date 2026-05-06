import movie_app from '../assets/images/movie_app.jpeg';
import crm_whatsapp from '../assets/images/crm_whatsapp.png';
import task_api_schema from '../assets/images/task_api_schema.png';

export const projects = [
  {
    title: 'Task Management API',
    description:
      'Robust API untuk manajemen tugas, mencakup autentikasi pengguna, manajemen proyek, pelacakan waktu, dan pelaporan menggunakan standar keamanan terbaru.',
    image: task_api_schema,
    type: 'backend',
    techStack: ['Laravel', 'MySQL', 'Sanctum', 'Spatie Roles', 'GitHub Actions'],
    link: null,
    repository: 'https://github.com/rizkikosasih/laravel-task-api'
  },
  {
    title: 'Movie App',
    description:
      'Aplikasi katalog film responsif dengan integrasi OMDb API. Diimplementasikan dengan sistem otomatisasi deployment untuk memastikan versi terbaru selalu tersedia secara publik.',
    image: movie_app,
    type: 'frontend',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Daisy UI', 'GitHub Pages'],
    link: 'https://rizkikosasih.github.io/movie-app/',
    repository: 'https://github.com/rizkikosasih/movie-app'
  },
  {
    title: 'CRM Whatsapp Web',
    description:
      'Aplikasi CRM terintegrasi WhatsApp Web untuk mengelola interaksi pelanggan dan aktivitas tim melalui dashboard AdminLTE yang responsif.',
    image: crm_whatsapp,
    type: 'fullstack',
    techStack: ['Laravel', 'MySQL', 'Bootstrap', 'AdminLTE', 'jQuery'],
    link: null,
    repository: 'https://github.com/rizkikosasih/crm-web-whatsapp'
  }
];
