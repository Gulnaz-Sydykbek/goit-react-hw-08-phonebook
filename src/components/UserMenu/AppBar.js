import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import * as authSelector from '../../redux/auth/auth-selectors';

function AppBar() {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <header>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </header>
  );
}

export default AppBar;
