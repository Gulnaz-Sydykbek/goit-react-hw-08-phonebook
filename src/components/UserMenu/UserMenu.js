import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import avatar from './avatar.jpg';
import { authSelectors, authOperations } from 'redux/auth';
import s from './User.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

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
