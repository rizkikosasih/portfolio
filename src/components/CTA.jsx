import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text md:text-[1.875rem]">
        Memiliki proyek di pikiran?
        <br className="sm:block hidden" />
        Ayo, kita wujudkan bersama!
      </p>
      <Link to="/kontak" className="btn">
        Kontak
      </Link>
    </section>
  );
};

export default CTA;
