import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import * as authSelector from 'redux/auth/auth-selectors';
import s from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
