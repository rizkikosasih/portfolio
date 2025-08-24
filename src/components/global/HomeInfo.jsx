import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const MotionLink = motion.create(Link);

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hai, saya
        <span className="font-semibold mx-2">Rizki</span>👋
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
        <div className="font-medium sm:text-xl text-center">
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
        <div className="font-medium text-center sm:text-xl">
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
        <div className="font-medium sm:text-xl text-center">
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
