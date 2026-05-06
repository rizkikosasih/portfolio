import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks, listFooter } from '../../constants/index.js';

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`footer font-poppins ${listFooter.includes(location.pathname) ? '' : 'hidden'}`}>
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          Dibuat oleh <b>Rizki Kosasih</b>.
        </p>

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <motion.img
                src={link.iconUrl}
                alt={link.name}
                className={`h-6 w-6 object-contain ${location.pathname === '/kontak' && link.link === '/kontak' ? 'hidden' : ''}`}
                whileHover={{ scale: 1.05 }}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
