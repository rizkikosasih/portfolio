import Text from '../Text';

const AboutText = ({ imgAbout }) => (
  <>
    <h1 className="head-text mb-4">
      Hai, saya{' '}
      <span className="blue-gradient_text font-semibold drop-shadow">Rizki</span>
    </h1>
    <div className="flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="flex flex-col items-start md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2">
        <Text content="Sebagai seorang Website Developer dengan pengalaman lebih dari tiga tahun, saya telah terlibat dalam berbagai proyek pengembangan aplikasi berbasis web, mulai dari perancangan hingga implementasi dan optimalisasi. Saya memiliki keahlian dalam mengembangkan dan meningkatkan kinerja aplikasi, memastikan pengalaman pengguna yang optimal, serta menjaga keamanan dan skalabilitas sistem." />
        <Text content="Saya memiliki pengalaman dalam bekerja dengan teknologi modern seperti Laravel, Codeigniter, Yii2, React, dan beberapa framework lainnya untuk menciptakan solusi yang efisien dan inovatif." />
        <Text content="Dengan latar belakang ini, saya terus mencari tantangan baru dalam dunia teknologi, khususnya di perusahaan teknologi yang berkembang, untuk membangun aplikasi yang berdampak dan memberikan solusi terbaik bagi pengguna. 🚀" />
      </div>
      <div className="relative flex flex-col justify-center items-center mb-8 md:mb-0 md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2">
        <img src={imgAbout} className="profile-image" loading="lazy" />
      </div>
    </div>
  </>
);

export default AboutText;
