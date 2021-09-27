import { useDispatch, useSelector } from 'react-redux';
import * as authSelector from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import s from './User.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUsername);

  return (
    <div>
      <span className={s.name}>Welkom, {name}!</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
