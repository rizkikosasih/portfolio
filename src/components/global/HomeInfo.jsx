import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const MotionLink = motion.create(Link);

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="neo-brutalism-blue mx-5 px-8 py-4 text-center text-white sm:text-xl sm:leading-snug">
        Hai, saya
        <span className="mx-2 font-semibold">Rizki</span>👋
        <div>
          Programmer/Developer dari Indonesia{' '}
          <div className="indonesia inline-block">
            <div className="merah"></div>
            <div className="putih"></div>
          </div>
        </div>
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <div className="text-center font-medium sm:text-xl">
          <p>Memiliki pengalaman berharga bekerja di</p>
          <p>Gogobli dan Kejaksaan Agung RI,</p>
          <p>serta mengembangkan berbagai keterampilan</p>
          <p>sepanjang perjalanan tersebut</p>
        </div>

        <MotionLink
          to="/tentang"
          className="neo-brutalism-white neo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Lebih Lanjut
          <IoArrowForward />
        </MotionLink>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <div className="text-center font-medium sm:text-xl">
          <p>Sebagai seorang Programmer/Developer</p>
          <p>dengan pengalaman lebih dari tiga tahun,</p>
          <p>saya telah terlibat dalam berbagai</p>
          <p>proyek pengembangan aplikasi berbasis web</p>
        </div>

        <MotionLink
          to="/kemampuan"
          className="neo-brutalism-white neo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Kemampuan Saya
          <IoArrowForward />
        </MotionLink>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <div className="text-center font-medium sm:text-xl">
          <p>Mencari pengembang website?</p>
          <p>Biarkan saya membantu mewujudkan proyek digital Anda</p>
          <p>dengan solusi yang efektif dan tepat sasaran</p>
        </div>

        <MotionLink
          to="/kontak"
          className="neo-brutalism-white neo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Kontak Saya
          <IoArrowForward />
        </MotionLink>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
