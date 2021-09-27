import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from 'redux/auth/auth-selectors';
import s from './Navigation.module.css';

function Navigation() {
  const { link, activeLink } = s;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink exact to="/" className={link} activeClassName={activeLink}>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={link} activeClassName={activeLink}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
