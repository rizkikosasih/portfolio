import { motion } from 'motion/react';
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
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">RK</p>
      </MotionNavLink>

      <nav className="flex text-lg gap-2 md:gap-7 font-medium">
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
