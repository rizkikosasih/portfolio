import movie_app from '../assets/images/movie_app.jpeg';
import crm_whatsapp from '../assets/images/crm_whatsapp.png';

export const projects = [
  {
    title: 'Movie App',
    description: `Aplikasi katalog film dengan banner carousel, pencarian cepat, pagination, dan detail via modal. Data diambil dari OMDb API. <br/><br/>
      <b>Tech stack</b>: React • Vite • React Router • Tailwind CSS • Daisy UI • Swiper • react-spinners • ESLint • Prettier • gh-pages (Yarn)`,
    image: movie_app,
    link: 'https://rizkikosasih.github.io/movie-app/'
  },
  {
    title: 'CRM Whatsapp Web',
    description: `Aplikasi CRM terintegrasi WhatsApp Web untuk mengelola interaksi pelanggan, kontak, dan aktivitas tim melalui dashboard AdminLTE. Mendukung setup cepat, integrasi API dengan Axios, dan build frontend modern via Vite. <br/><br/>
      <b>Tech stack</b>: Laravel (PHP) • MySQL • Vite • Bootstrap 4 • AdminLTE • jQuery • Axios • Font Awesome • laravel-vite-plugin • Prettier • Yarn`,
    image: crm_whatsapp,
    link: 'https://github.com/rizkikosasih/crm-web-whatsapp'
  }
];
