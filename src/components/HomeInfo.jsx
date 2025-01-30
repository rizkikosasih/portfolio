import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hai, saya
        <span className="font-semibold mx-2">Rizki</span>👋
        <div>
          Website Developer dari Indonesia{' '}
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

        <Link to="/tentang" className="neo-brutalism-white neo-btn">
          Lebih Lanjut
          <IoArrowForward />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <div className="font-medium text-center sm:text-xl">
          <p>Sebagai seorang Website Developer</p>
          <p>dengan pengalaman lebih dari tiga tahun,</p>
          <p>saya telah terlibat dalam berbagai</p>
          <p>proyek pengembangan aplikasi berbasis web</p>
        </div>

        <Link to="/kemampuan" className="neo-brutalism-white neo-btn">
          Kemampuan Saya
          <IoArrowForward />
        </Link>
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

        <Link to="/kontak" className="neo-brutalism-white neo-btn">
          Kontak Saya
          <IoArrowForward />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
