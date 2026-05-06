import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { listMenu } from '../../constants/index.js';

const MotionNavLink = motion.create(NavLink);

const Navbar = () => {
  const location = useLocation();

  return (
    <header
      className={
        listMenu.some((item) => item.path === location.pathname) ? 'header' : 'hidden'
      }>
      <MotionNavLink
        to="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md">
        <p className="blue-gradient_text">RK</p>
      </MotionNavLink>

      <nav className="flex gap-2 text-lg font-medium md:gap-7">
        {listMenu.map((v, i) => {
          if (i > 0) {
            return (
              <MotionNavLink
                key={i}
                to={v.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
                {v.name}
              </MotionNavLink>
            );
          }
        })}
      </nav>
    </header>
  );
};

export default Navbar;
