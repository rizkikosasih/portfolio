import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text md:text-[1.875rem]">
        Memiliki proyek di pikiran?
        <br className="sm:block hidden" />
        Ayo, kita wujudkan bersama!
      </p>

      <MotionLink
        to="/kontak"
        className="custom-btn-primary px-5 py-2.5 font-medium"
        whileTap={{ scale: 0.95 }}>
        Kontak
      </MotionLink>
    </section>
  );
};

export default CTA;
