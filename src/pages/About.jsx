import imgAbout from './../assets/images/photo.jpg';
import CTA from './../components/CTA';
import { educations } from '../constants/index';
import { Tooltip } from 'react-tooltip';
import Text from '../components/about/Text';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text mb-4">
        Hai, saya{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">Rizki</span>
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-col items-start md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2">
          <Text
            content="Sebagai seorang Website Developer dengan pengalaman lebih dari tiga tahun,
            saya telah terlibat dalam berbagai proyek pengembangan aplikasi berbasis web,
            mulai dari perancangan hingga implementasi dan optimalisasi. Saya memiliki
            keahlian dalam mengembangkan dan meningkatkan kinerja aplikasi, memastikan
            pengalaman pengguna yang optimal, serta menjaga keamanan dan skalabilitas
            sistem."
          />

          <Text
            content="Saya memiliki pengalaman dalam bekerja dengan teknologi modern seperti
            Laravel, Codeigniter, Yii2, React, dan beberapa framework lainnya untuk
            menciptakan solusi yang efisien dan inovatif."
          />

          <Text
            content="Dengan latar belakang ini, saya terus mencari tantangan baru dalam dunia
            teknologi, khususnya di perusahaan teknologi yang berkembang, untuk membangun
            aplikasi yang berdampak dan memberikan solusi terbaik bagi pengguna. 🚀"
          />
        </div>

        <div className="relative flex flex-col justify-center items-center mb-8 md:mb-0 md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-1/2">
          <img src={imgAbout} className="profile-image" loading="lazy" />
        </div>
      </div>

      <h1 className="head-text py-8">Pendidikan</h1>

      <div className="flex flex-wrap">
        {educations.map((education) => (
          <div className="w-1/2 my-8" key={education.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${education.theme}`} />
              <div
                data-tooltip-id="education-tooltip"
                data-tooltip-html={`<p class='font-semibold'>${education.title}</p>`}
                className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={education.iconUrl}
                  className="w-1/2 h-1/2 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{education.name}</h4>
              <p className="mt-2 text-slate-500">
                <span className="font-semibold">{education.periode}</span>
                <br />
                {education.schoolName}
              </p>
            </div>
          </div>
        ))}

        <Tooltip
          id="education-tooltip"
          style={{
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            color: 'rgb(224, 231, 225)'
          }}
        />
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
