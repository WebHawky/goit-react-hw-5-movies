import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const isActive = ({ isActive }) => {
  return isActive ? s.active : '';
};

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/" className={isActive}>
          <span className={s.nav}>Home</span>
        </NavLink>
        <NavLink to="/movies" className={isActive}>
          <span className={s.nav}>Movies</span>
        </NavLink>
      </nav>
    </>
  );
}
