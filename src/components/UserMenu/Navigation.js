import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  const { link, activeLink } = s;

  return (
    <header>
      <nav>
        <NavLink exact to="/" className={link} activeClassName={activeLink}>
          Home
        </NavLink>

        <NavLink to="/phonebook" className={link} activeClassName={activeLink}>
          Phonebook
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
