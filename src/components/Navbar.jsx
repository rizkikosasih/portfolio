import { NavLink, useLocation } from 'react-router-dom';
import { listMenu } from '../constants';

const Navbar = () => {
  const location = useLocation();

  return (
    <header
      className={
        listMenu.some((item) => item.path === location.pathname) ? 'header' : 'hidden'
      }>
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">RK</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        {listMenu.map((v, i) => {
          if (i > 0) {
            return (
              <NavLink
                key={i}
                to={v.path}
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
                {v.name}
              </NavLink>
            );
          }
        })}
      </nav>
    </header>
  );
};

export default Navbar;
