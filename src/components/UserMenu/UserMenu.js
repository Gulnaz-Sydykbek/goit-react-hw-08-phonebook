import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import avatar from './avatar.jpg';
import * as authSelector from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import s from './User.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUsername);

  return (
    <div>
      <img src={avatar} alt="" width="32" className={s.img} />
      <span className={s.name}>Welkom, {name}!</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
